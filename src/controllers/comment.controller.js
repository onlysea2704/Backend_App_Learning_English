import db from "../models/index.js";

export const getAllCommentByIdCourse = async (req, res) => {

    // input {idCourse}
    const idCourse = req.body.idCourse;
    console.log('idCourse: ', idCourse);
    const results = await db.sequelize.query(`
        select id_comment, comment, name from comments
        left join students on comments.id_student = students.id_student
        where id_course = :id_course
        order by time_comment;
        `, {
        replacements: { id_course: idCourse },
        type: db.Sequelize.QueryTypes.SELECT
    });

    return res.json(results);
}

export const createComment = async (req, res) => {
    // input {idCourse, content}
    console.log(123)
    const idUser = req.user.id;
    const idCourse = req.body.idCourse;
    const content = req.body.content;
    const idStudent = await db.Student.findOne({ where: { id_user: idUser } });
    await db.Comment.create({
        id_student: idStudent.id_student,
        id_course: idCourse,
        comment: content,
        time_comment: new Date(),
    });
    return res.json({status: true});
}