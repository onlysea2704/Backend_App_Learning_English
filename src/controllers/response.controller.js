import db from "../models/index.js";


export const getAllResponseByIdResult = async (req, res) => {

    try {
        const idResult = req.body.idResult
        const idUser = req.user.id_user;
        const student = await db.Student.findOne({ where: { id_user: idUser } });

        const responses = await db.Response.findAll({ where: { id_result: idResult, id_student: student.id_student } });
        return res.json(responses)
    } catch (error) {
        return res.json([]);
    }
}

export const createResponse = async (req, res) => {
    const idUser = req.user.id_user;
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