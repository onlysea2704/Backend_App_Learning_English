import db from "../models/index.js";

export const lessonGetByIdCourse = async (req, res) => {

    const idCourse = req.body.id;
    const lessons = await db.Lesson.findAll({ where: { id_course: idCourse } })
    return res.json(lessons)
}

export const createLesson = async (req, res) => {
    return res.json({ status: true })
}

export const updateLesson = async (req, res) => {
    return res.json({ status: true })
}