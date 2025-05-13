import db from "../models/index.js";

export const getAllQuestionByQuizId = async (req, res) => {

    // const idUser = req.user.id_user;
    // const idStudent = await db.Student.findOne({ where: { id_user: idUser }, attributes: ['id_student'] })
    const idQuiz = req.body.idQuiz;
    // const idLesson = await db.Quiz.findOne({ where: { id_quiz: idQuiz }, attributes: ['id_lesson'] })
    // const idCourse = await db.Lesson.findOne({ where: { id_lesson: idLesson }, attributes: ['id_course'] })
    // const isMyCourse = await db.MyCourse.findOne({ where: { id_course: idCourse, id_student: idStudent } })
    const isMyCourse = true;
    if (isMyCourse) {
        const questions = await db.Question.findAll({ where: { id_quiz: idQuiz } })
        return res.json(questions)
    } else {
        return res.json([])
    }
}

export const createQuestion = async (req, res) => {
    return res.json()
}

export const updateQuestion = async (req, res) => {
    return res.json()
}

export const deleteQuestion = async (req, res) => {
    return res.json()
}