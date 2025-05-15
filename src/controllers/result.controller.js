import db from "../models/index.js";

export const getResulResponsetByIdLesson = async (req, res) => {
    try {
        const idUser = req.user.id_user;
        const idLesson = req.body.idLesson;
        const student = await db.Student.findOne({ where: { id_user: idUser } });
        const quiz = await db.Quiz.findOne({ where: { id_lesson: idLesson } });
        console.log(quiz.id_quiz)
        const result = await db.Result.findOne({ where: { id_student: student.id_student, id_quiz: quiz.id_quiz } });
        const questions = await db.Question.findAll({ where: { id_quiz: quiz.id_quiz }, raw: true, });
        const responses = await db.Response.findAll({ where: { id_result: result.id_result, id_student: student.id_student }, raw: true, });
        const newFormatQuestions = questions.map(q => ({
            ...q,
            options: [q.option_1, q.option_2, q.option_3, q.option_4]
        }));
        
        const responseQuestions = newFormatQuestions.map(question => {
            const response = responses.find(r => r.id_question === question.id_question);
            return {
                ...question,
                response: response ? response : null
            };
        });
        return res.json(responseQuestions);
    } catch (error) {
        console.log('error: ', error.message);
        return res.json();
    }
}
