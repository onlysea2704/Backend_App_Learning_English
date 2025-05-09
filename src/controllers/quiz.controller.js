import db from "../models/index.js";

export const getQuizById = async (req, res) => {
    // input {idQuiz}
    const idQuiz = req.body.idQuiz;

    const quiz = db.Quiz.findOne({ where: { id_quiz: idQuiz } })
    return res.json(quiz)
}

export const createQuiz = async (req, res) => {
    // input {idCourse, typeLesson}

    const { idCourse, typeLesson } = req.body;

    const newLesson = await db.Lesson.create({
        id_course: idCourse,
        order_lesson: 1,
        type_lesson: typeLesson
    })

    await db.Quiz.create({
        name_quiz: nameQuiz,
        description: description,
        id_lesson: newLesson.id,
    })
    return res.json({ status: "success" })
}

export const updateQuiz = async (req, res) => {

}

export const deleteQuiz = async (req, res) => {
    
}