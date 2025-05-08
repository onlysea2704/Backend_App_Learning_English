import db from "../models/index.js";

export const getAllCommentByIdCourse = async(req, res) => {

    // input {idCourse}

    const idCourse = req.body.id;
    const comments = db.Comment.findAll({where: {id_course: idCourse}})

    return res.json({comments}); 
}

export const createComment = async(req, res) => {
    // input {idCourse, content}
    const idUser = req.user.id;
    const idCourse = req.body.idCourse;
    const content = req.body.content;
    const idStudent = db.Student.findOne({where: {id_user: idUser}});
    await db.Comment.create({
        id_student: idStudent,
        id_course: idCourse,
        comment: content,
        time_comment: new Date(),
    })
}