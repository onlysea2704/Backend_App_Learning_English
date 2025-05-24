import db from "../models/index.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs"

export const getInfoLecturer = async (req, res) => {
    try {
        const idLecturer = req.body.idLecturer;
        const infoLecturer = await db.Lecturer.findOne({ where: { id_lecturer: idLecturer } });
        return res.json(infoLecturer);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ succes: false })
    }
}
export const getAllLecturer = async (req, res) => {
    try {
        const lecturers = await db.Lecturer.findAll();
        return res.json(lecturers);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ succes: false })
    }
}
export const updateLecturerInfoById = async (req, res) => {
    const lecturer = JSON.parse(req.body.lecturer);
    const { id_lecturer, ...infoLecturer } = lecturer
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
export const createLecturer = async (req, res) => {
    const newLecturer = await db.Lecturer.create();
    return res.json(newLecturer);
}
export const deleteLecturer = async (req, res) => {
    const idLecuter = req.body.idLecturer
    await db.Lecturer.destroy({
        where: {
            id_lecturer: idLecuter
        }
    });
    return res.json({ status: true })
}