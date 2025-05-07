import db from "../models/index.js";

export const getAllQuestionByQuizId = async (req, res) => {

    const user = req.user;
    console.log(user)
    const idQuiz = req.body.id

    
    const questions = await db.Question.findAll({ where: { id_quiz: idQuiz } })
    return res.json(questions)
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