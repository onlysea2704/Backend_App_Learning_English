import db from "../models/index.js";

export const getAllQuestionByQuizId = async (req, res) => {

    const idQuiz = req.body.idQuiz;
    console.log('=========')
    console.log(idQuiz)
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