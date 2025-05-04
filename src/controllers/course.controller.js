import { Op } from "sequelize";
import db from "../models/index.js";

export const getAllCourse = async (req, res) => {

    const myCourses = await db.MyCourse.findAll({
        where: { id_student: req.user.id },
    });

    const listMyCourses = myCourses.map(myCourse => myCourse.id_course)

    const courses = await db.Course.findAll({
        where: { id: { [Op.notIn]: listMyCourses } }
    })

    return res.json(courses)
}