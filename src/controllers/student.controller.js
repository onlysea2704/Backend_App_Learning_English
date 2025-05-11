import db from "../models/index.js";
import cloudinary from "../config/cloudinary.js";

export const getStudentInfoById = async (req, res) => {

    const idUser = req.user.id
    const student = await db.Student.findOne({ where: { id_user: idUser } });

    return res.json(student)
}

export const updateStudentInfoById = async (req, res) => {
    const idUser = req.user.id;
    const studentInfo = JSON.parse(req.body.studentInfo);
    console.log(studentInfo)
    let url
    if (req.file) {
        const filePath = req.file.path;
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: 'image'
        });
        studentInfo.link_image = result.url
        console.log('url', result.url)
        // fs.unlinkSync(filePath);
    }
    console.log(studentInfo)
    const result = await db.Student.update({ ...studentInfo }, { where: { id_user: idUser } })
    // const result = await db.Student.findOne({ where: { id_user: idUser } })
    console.log('result ', result)
    return res.json({ status: "success" })
}