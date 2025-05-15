import db from "../models/index.js";
import { configZaloPay } from "../config/zalopay.js";
import CryptoJS from "crypto-js";
import moment from "moment";
import axios from "axios";

export const CreateBill = async (req, res) => {

    const idCourse = req.body.idCourse
    const infoCourse = await db.Course.findOne({ where: { id_course: idCourse } })
    const embed_data = { redirecturl: "https://student-hustenglish-system.vercel.app/coursedetail/1" };
    const items = [infoCourse];
    let x = infoCourse.price + 10000
    const transID = Math.floor(Math.random() * 1000000);
    const order = {
        app_id: configZaloPay.appid,
        app_trans_id: `${moment().format('YYMMDD')}_${transID}`, // translation missing: vi.docs.shared.sample_code.comments.app_trans_id
        app_user: "123456",
        app_time: Date.now(), // miliseconds
        item: JSON.stringify(items),
        embed_data: JSON.stringify(embed_data),
        amount: Number(10000) + Number(infoCourse.price)*100, // + tạm 10000 cho đỡ lỗi vì giá đang rất nhỏ
        // Lưu ý giá tiền phải chẵn mới thanh toán được
        description: `Thanh Toán Khóa Học ${infoCourse.name_course} #${transID}`,
        bank_code: "",
        callback_url: "https://2d47-2402-800-6d3e-b434-500d-ff04-636-53ca.ngrok-free.app/callback"
    };

    // appid|app_trans_id|appuser|amount|apptime|embeddata|item
    const data = configZaloPay.appid + "|" + order.app_trans_id + "|" + order.app_user + "|" + order.amount + "|" + order.app_time + "|" + order.embed_data + "|" + order.item;
    order.mac = CryptoJS.HmacSHA256(data, configZaloPay.key1).toString();

    try {
        const result = await axios.post(configZaloPay.endpoint, null, { params: order })
        console.log(result.data)
        res.json(result.data)
    } catch (error) {
        console.log(error.message)
    }
}
