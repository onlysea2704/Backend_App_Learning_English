import db from "../models/index.js";
import { configZaloPay } from "../config/zalopay.js";
import CryptoJS from "crypto-js";
import moment from "moment";
import axios from "axios";
import { urlNgrok } from "../config/ngrok.js";

export const CreateBill = async (req, res) => {

    const idCourse = req.body.idCourse
    const infoCourse = await db.Course.findOne({ where: { id_course: idCourse } })
    const idUser = req.user.id_user
    const student = await db.Student.findOne({ where: { id_user: idUser } })

    const embed_data = { redirecturl: `http://localhost:3000/coursedetail/${idCourse}` };
    const items = [infoCourse];
    const transID = Math.floor(Math.random() * 1000000);
    const order = {
        app_id: configZaloPay.appid,
        app_trans_id: `${moment().format('YYMMDD')}_${transID}`, // translation missing: vi.docs.shared.sample_code.comments.app_trans_id
        app_user: student.id_student, // thay cái này bằng userId
        app_time: Date.now(),
        item: JSON.stringify(items),
        embed_data: JSON.stringify(embed_data),
        amount: Number(infoCourse.price),
        // Lưu ý giá tiền phải chẵn mới thanh toán được
        description: `Thanh Toán Khóa Học ${infoCourse.name_course} #${transID}`,
        bank_code: "",
        callback_url: `${urlNgrok}/payment/confirm-payment`
    };

    // appid|app_trans_id|appuser|amount|apptime|embeddata|item
    const data = configZaloPay.appid + "|" + order.app_trans_id + "|" + order.app_user + "|" + order.amount + "|" + order.app_time + "|" + order.embed_data + "|" + order.item;
    order.mac = CryptoJS.HmacSHA256(data, configZaloPay.key1).toString();

    try {
        const result = await axios.post(configZaloPay.endpoint, null, { params: order })
        res.json(result.data)
    } catch (error) {
        console.log(error.message)
    }
}

export const ConfirmPayment = async (req, res) => {
    let result = {};
    try {
        let dataStr = req.body.data;
        let reqMac = req.body.mac;
        let mac = CryptoJS.HmacSHA256(dataStr, configZaloPay.key2).toString();
        console.log("mac =", mac);

        // kiểm tra callback hợp lệ (đến từ ZaloPay server)
        if (reqMac !== mac) {
            // callback không hợp lệ
            result.return_code = -1;
            result.return_message = "mac not equal";
            console.log("Mac không hợp lệ")
        }
        else {
            // thanh toán thành công
            // merchant cập nhật trạng thái cho đơn hàng
            let dataJson = JSON.parse(dataStr, configZaloPay.key2);
            const idCourse = JSON.parse(dataJson["item"])[0].id_course

            await db.MyCourse.create({
                id_student: dataJson["app_user"],
                id_course: idCourse,
                time_transaction: new Date()
            })

            await db.Course.update({
                number_student: db.Sequelize.literal('number_student + 1'),
            }, {
                where: { id_course: idCourse }
            })
            result.return_code = 1;
            result.return_message = "success";
        }
    } catch (ex) {
        result.return_code = 0; // ZaloPay server sẽ callback lại (tối đa 3 lần)
        console.log(ex.message);
        result.return_message = ex.message;
    }

    // thông báo kết quả cho Client
    return res.json(result);
}