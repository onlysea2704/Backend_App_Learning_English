import db from "../models/index.js";

export const getAllCommentByIdCourse = async(req, res) => {
    const idCourse = req.body.id;
    const comments = db.Comment.findAll({where: {id_course: idCourse}})

    return res.json({comments}); 
}

export const createComment = async(req, res) => {
    const idUser = req.user.id;
    const idStudent = db.Student.findOne({where: {}})
    await db.Comment.create({

    })
}