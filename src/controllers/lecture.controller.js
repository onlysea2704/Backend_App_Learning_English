import db from "../models/index.js";

export const getLectureByIdLesson = async (req, res) => {
    const idLesson = req.db.id;
    const lecture = db.Lecture.findOne({ where: { id_lesson: idLesson } })
    return res.json({ lecture })
}

export const createLecture = async (req, res) => {

    // input
    const newLesson = await db.Lesson.create({

    })

    await db.Lecture.create({
        name_lecture: DataTypes.STRING,
        description: DataTypes.TEXT,
        id_lesson: newLesson.id,
        link_material: '',
    })
    return res.json({ status: true })
}