import db from "../models/index.js";

export const lessonGetByIdCourse = async (req, res) => {

    const idCourse = req.body.id;
    const lessons = await db.Lesson.findAll({ where: { id_course: idCourse } })
    return res.json(lessons)
}

export const getLecture = async (req, res) => {
    const idLesson = req.body.id;
    const lecture = db.Lecture.findOne({ where: { id_lesson: idLesson } })
    return res.json({ lecture })
}

export const getQuiz = async (req, res) => {
    const idLesson = req.body.id;
    const quiz = db.Quiz.findOne({ where: { id_lesson: idLesson } })
    return res.json({ quiz })
}

export const createLesson = async (req, res) => {
    return res.json({ status: true })
}

export const updateLesson = async (req, res) => {
    return res.json({ status: true })
}