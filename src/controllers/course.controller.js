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

export const getMyCourses = async (req, res) => {

    const myCourses = await db.MyCourse.findAll({
        where: { id_student: req.user.id },
    });

    const listMyCourses = myCourses.map(myCourse => myCourse.id_course)

    const courses = await db.Course.findAll({
        where: { id: listMyCourses }
    })

    return res.json(courses)
}

export const getDetailCourseById = async (req, res) => {
    console.log('************************')
    console.log(req.body.id)
    const detailCourse = await db.Course.findOne({ where: { id_course: Number(req.body.id) } })

    const myCourse = await db.MyCourse.findOne({ where: { id_course: Number(req.body.id) } })
    const isMyCourse = !!myCourse
    return res.json({detailCourse, isMyCourse})
}