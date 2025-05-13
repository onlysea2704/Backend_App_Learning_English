import db from "../models/index.js";

export const getResultByIdLesson = async (req, res) => {
    const idUser = req.user.id;
    const idLesson = req.body.idLesson;

    const student = db.Student.findOne({ where: { id_user: idUser }, attributes: ['id_student'] });
    const quiz = db.Quiz.findOne({ where: { id_lesson: idLesson } });
    const result = db.Result.findOne({ where: { id_student: student.id_student, id_quiz: quiz.id_quiz } });

    return res.json(result);
}
