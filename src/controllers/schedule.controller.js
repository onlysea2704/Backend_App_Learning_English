import { qstash } from "../config/qstash.js";
import db from "../models/index.js";
import { urlNgrok } from "../config/ngrok.js";
import { transporterSendEmail } from "../config/gmail.js";

export const getAllSchedule = async (req, res) => {
    const schedules = await db.Schedule.findAll();
    return res.json(schedules);
}

export const createSchedule = async (req, res) => {
    const newSchedule = await db.Schedule.create();
    return res.json(newSchedule);
}

export const updateSchedule = async (req, res) => {
    try {
        const schedule = req.body.schedule;
        if (schedule.id_schedule_qstash) {
            try {
                await qstash.messages.delete(schedule.id_schedule_qstash)
            } catch (error) {
                console.log('Message đã được gửi nên không thể xóa')
            }
        }
        // Bắt buộc phải chuyển thời gian như này
        const scheduleDate = new Date(schedule.time_sent);
        const notBeforeTimestamp = Math.floor(scheduleDate.getTime() / 1000);
        const response = await qstash.publishJSON({
            url: `${urlNgrok}/schedule/send-email`,
            // url: `http://localhost:3000//schedule/send-email`,
            body: { id_schedule: schedule.id_schedule },
            // Thời gian bắt đầu gửi (UTC ISO 8601 format)
            notBefore: notBeforeTimestamp,
        });
        schedule.id_schedule_qstash = response.messageId
        const { id_schedule, ...updatedSchedule } = schedule
        await db.Schedule.update({ ...updatedSchedule }, { where: { id_schedule: id_schedule } })
        return res.json(schedule);
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(null);
    }
}

export const deleteSchedule = async (req, res) => {
    try {
        const schedule = req.body.schedule
        try {
            await qstash.messages.delete(schedule.id_schedule_qstash)
        } catch (error) {
            console.log('Message đã được gửi nên không thể xóa')
        }
        await db.Schedule.destroy({
            where: {
                id_schedule: schedule.id_schedule
            }
        });
        return res.json({ status: true })
    } catch (error) {
        return res.json({ status: false })
    }
}

export const sendEmail = async (req, res) => {
    const idSchedule = req.body.id_schedule
    // const emails = await db.Student.findAll({ where: { email: 'phamduyhai2704@gmail.com' } });
    const contentEmail = await db.Schedule.findOne({ where: { id_schedule: idSchedule } });
    try {
        await transporterSendEmail.sendMail({
            from: '"Hust-English" phamduyhai2704@gmail.com',
            to: 'phamduyhai2k3@gmail.com, ngocmai12062k3@gmail.com',
            subject: contentEmail.title,
            text: contentEmail.body,
            // html trường này không có cũng được
        });
        res.status(200).json({ message: 'Gửi email thành công!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi khi gửi email', error });
    }
}
