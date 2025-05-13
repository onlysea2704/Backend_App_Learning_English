import db from "../models/index.js";

export const getQuizByIdByIdLesson = async (req, res) => {
    // input {idLesson}
    const idLesson = req.body.idLesson;
    try {
        const quiz = await db.Quiz.findOne({ where: { id_lesson: idLesson } })
        return res.json(quiz)
    } catch (error) {
        console.log('error: ', error.message);
        return res.status(500).json({ error: error.message });
    }
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