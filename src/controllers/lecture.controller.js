import db from "../models/index.js";

export const getLecture = async(req, res) => {
    const idLesson = req.db.id;
    const lecture = db.Lecture.findOne({ where : {id_lesson: idLesson} })
    return res.json({lecture})
}