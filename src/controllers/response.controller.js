import db from "../models/index.js";

export const checkExistResult = async (req, res) => {
    const idUser = req.user.id;
    const idQuiz = req.body.id;
    const idStudent = db.Student.findOne({ where: { id_user: idUser }, attributes: ['id_student'] })
    const isExistResult = db.Result.findOne({ where: { id_student: idStudent, id_quiz: idQuiz } })

    if (isExistResult) {
        return res.json({ status: true })
    } else {
        return res.json({ status: false })
    }
}

export const getAllResponseByIdLesson = async (req, res) => {
    const idUser = req.user.id;
    const idLesson = req.body.idLesson;
    const quiz = db.Quiz.findOne({ where: { id_lesson: idLesson } });
    const idStudent = db.Student.findOne({ where: { id_user: idUser }, attributes: ['id_student'] });

    const idResult = db.Result.findOne({ where: { id_student: idStudent, id_quiz: quiz.id_quiz } });
    const responses = db.Response.findAll({ where: { id_result: idResult } });

    return res.json({ responses })
}

export const createResponse = async (req, res) => {
    const idUser = req.user.id;
    const response = req.body;
    const idStudent = db.Student.findOne({ where: { id_user: idUser } })
    const question = db.Question.findOne({ where: { id_question: response.id_question } })

    await db.Response.create({
        id_student: idStudent,
        id_question: response.id_question,
        link_mp3: '',
        response: response.response,
        type_response: response.type_response,
        score: response.response === question.answer ? question.scale : 0
    })
}