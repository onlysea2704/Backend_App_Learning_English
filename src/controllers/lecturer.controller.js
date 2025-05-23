import db from "../models/index.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs"

export const updateLecturerInfoById = async (req, res) => {
    const lecturer = JSON.parse(req.body.lecturer);
    const {id_lecturer, ...infoLecturer} = lecturer
    if (req.file) {
        const filePath = req.file.path;
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: 'image'
        });
        infoLecturer.link_image = result.url;
        fs.unlinkSync(filePath);
    }
    const result = await db.Lecturer.update({ ...infoLecturer }, { where: { id_lecturer: id_lecturer } });
    return res.json({ status: "success" });
}