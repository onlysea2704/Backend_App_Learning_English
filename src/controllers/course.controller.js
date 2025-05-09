import { Op } from "sequelize";
import db from "../models/index.js";
import cloudinary from "../config/cloudinary.js";
import fs from 'fs'

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

export const getAllListCourseAdmin = async (req, res) => {
    const courses = await db.Course.findAll();

    return res.json(courses)
}

export const getDetailCourseById = async (req, res) => {
    // input {idCourse}

    const detailCourse = await db.Course.findOne({ where: { id_course: Number(req.body.idCourse) } })
    const myCourse = await db.MyCourse.findOne({ where: { id_course: Number(req.body.id) } })
    const isMyCourse = !!myCourse

    return res.json({ detailCourse: detailCourse, isMyCourse: isMyCourse })
}

export const getAllLecturer = async (req, res) => {
    const lecturers = await db.Lecturer.findAll()

    return res.json(lecturers)
}

export const creatCourse = async (req, res) => {
    // input metadata: { nameCourse, description, price, idLecturer }

    const metadata = JSON.parse(req.body.metadata);
    const filePath = req.file.path;

     const result = await cloudinary.uploader.upload(filePath, {
      resource_type: 'image' 
    });

    fs.unlinkSync(filePath);

    await db.Course.create({
        name_course: metadata.nameCourse,
        description: metadata.description,
        price: metadata.price,
        link_image: result.url,
        number_lesson: 0,
        number_student: 0,
        id_lecturer: metadata.idLecturer,
    })
    return res.json({ status: 'success' })
}

export const updateCourse = async (req, res) => {
    return res.json({ status: success })
}

export const deleteCourse = async (req, res) => {
    return res.json({ status: success })
}