import db from "../models/index.js";
import cloudinary from "../config/cloudinary.js";

export const getStudentInfoById = async (req, res) => {
    try {
        const idUser = req.user.id_user
        const student = await db.Student.findOne({ where: { id_user: idUser } });
        return res.json(student)
    } catch (error) {
        console.error("Error fetching student info:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const updateStudentInfoById = async (req, res) => {
    const idUser = req.user.id_user;
    const studentInfo = JSON.parse(req.body.studentInfo);
    let url
    if (req.file) {
        const filePath = req.file.path;
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: 'image'
        });
        studentInfo.link_image = result.url;
        fs.unlinkSync(filePath);
    }
    const result = await db.Student.update({ ...studentInfo }, { where: { id_user: idUser } })
    return res.json({ status: "success" })
}