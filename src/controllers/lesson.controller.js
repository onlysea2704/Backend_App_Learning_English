import db from "../models/index.js";

export const getAllLessonByIdCourse = async (req, res) => {

    // input {idCourse}
    const idCourse = req.body.idCourse;
    const lessons = await db.Lesson.findAll({ where: { id_course: idCourse } })
    return res.json(lessons)
}

export const getLectureById = async (req, res) => {

    // input {idLecture}
    const idLesson = req.body.idLesson;
    const lecture = db.Lecture.findOne({ where: { id_lesson: idLesson } })
    return res.json({ lecture })
}

export const getQuizById = async (req, res) => {

    // input {idQuiz}
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