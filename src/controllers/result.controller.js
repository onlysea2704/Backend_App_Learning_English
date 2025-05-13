import db from "../models/index.js";

export const getResultByIdLesson = async (req, res) => {
    try {
        const idUser = req.user.id_user;
        const idLesson = req.body.idLesson;
        const student = await db.Student.findOne({ where: { id_user: idUser } });
        const quiz = await db.Quiz.findOne({ where: { id_lesson: idLesson } });
        const result = await db.Result.findOne({ where: { id_student: student.id_student, id_quiz: quiz.id_quiz } });
        console.log('result: ', result);
        return res.json(result);
    } catch (error) {
        return res.json();
    }
}
