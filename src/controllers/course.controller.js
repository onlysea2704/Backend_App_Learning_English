import { Op } from "sequelize";
import db from "../models/index.js";
import cloudinary from "../config/cloudinary.js";
import fs from 'fs'

export const getAllCourse = async (req, res) => {
    const idUser = req.user.id_user;
    const myCourses = await db.MyCourse.findAll({
        where: { id_student: idUser },
    });
    const listMyCourses = myCourses.map(myCourse => myCourse.id_course)
    const courses = await db.Course.findAll({
        where: { id_course: { [Op.notIn]: listMyCourses } }
    });

    return res.json(courses)
}

export const getPopularCourse = async (req, res) => {
    const popularCourses = await db.Course.findAll({
        order: [['number_student', 'DESC']],
        limit: 4
    });
    return res.json(popularCourses)
}

export const getMyCourses = async (req, res) => {
    const idUser = req.user.id_user;
    const myCourses = await db.MyCourse.findAll({
        where: { id_student: idUser },
    });
    const listMyCourses = myCourses.map(myCourse => myCourse.id_course)
    const courses = await db.Course.findAll({
        where: {
            id_course: {
                [Op.in]: listMyCourses
            }
        }
    });

    return res.json(courses)
}

export const getDetailCourseById = async (req, res) => {
    // input {idCourse}
    const idUser = req.user.id_user;
    const idCourse = req.body.idCourse;
    const student = await db.Student.findOne({ where: { id_user: idUser } })
    const detailCourse = await db.Course.findOne({ where: { id_course: idCourse } })
    const myCourse = await db.MyCourse.findOne({ where: { id_course: idCourse, id_student: student.id_student } })
    const isMyCourse = !!myCourse

    return res.json({ detailCourse: detailCourse, isMyCourse: isMyCourse })
}

export const checkProgress = async (req, res) => {
    const idCourse = req.body.idCourse;
    const idUser = req.user.id_user;
    const student = await db.Student.findOne({ where: { id_user: idUser } });
    try {
        const listLessonWithName = await db.sequelize.query(`
            SELECT 
                l.id_lesson,
                l.id_course,
                l.order_lesson,
                l.type_lesson,
                COALESCE(le.name_lecture, q.name_quiz) AS lesson_name
            FROM Lessons l
            LEFT JOIN lectures le ON l.id_lesson = le.id_lesson
            LEFT JOIN quizzes q ON l.id_lesson = q.id_lesson
            WHERE l.id_course = :id_course
            ORDER BY l.order_lesson ASC;
        `, {
            replacements: { id_course: idCourse },
            type: db.Sequelize.QueryTypes.SELECT
        });
        const lessonsOfCourse = await db.Lesson.findAll({ where: { id_course: idCourse } });
        const lessonIds = lessonsOfCourse.map(lesson => lesson.id_lesson);
        const completeLessons = await db.Progress.findAll({
            where: {
                id_student: student.id_student,
                id_lesson: {
                    [Op.in]: lessonIds
                }
            }, raw: true
        });
        const completeLessonIds = completeLessons.map((completeLesson) => (completeLesson.id_lesson))
        const listLessonsResult = listLessonWithName.map(item => ({
            ...item,
            isComplete: completeLessonIds.includes(item.id_lesson)
        }));

        // console.log(updatedResults);
        return res.json(listLessonsResult);
    } catch (error) {
        console.log('error: ', error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getAllListCourseAdmin = async (req, res) => {
    const courses = await db.Course.findAll();

    return res.json(courses)
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