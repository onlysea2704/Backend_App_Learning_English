import db from "../models/index.js";
import { checkMyCourse } from "../utils.ts/checkMyCourse.js";

export const getListLessonByIdCourse = async (req, res) => {
    // input {idCourse}
    const idCourse = req.body.idCourse;
    try {
        const results = await db.sequelize.query(`
        SELECT 
            l.id_lesson,
            l.id_course,
            l.order_lesson,
            l.type_lesson,
            COALESCE(le.name_lecture, q.name_quiz) AS lesson_name,
            COALESCE(le.id_lecture, q.id_quiz) AS id_lecture_quiz
        FROM Lessons l
        LEFT JOIN lectures le ON l.id_lesson = le.id_lesson
        LEFT JOIN quizzes q ON l.id_lesson = q.id_lesson
        WHERE l.id_course = :id_course
        ORDER BY l.order_lesson ASC;
    `, {
            replacements: { id_course: idCourse },
            type: db.Sequelize.QueryTypes.SELECT
        });
        return res.json(results);
    } catch (error) {
        console.log('error: ', error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getInfoLesson = async (req, res) => {
    // input {idLesson}
    try {
        const idLesson = req.body.idLesson;
        const idUser = req.user.id_user;
        const student = await db.Student.findOne({ where: { id_user: idUser } });
        const lesson = await db.Lesson.findOne({ where: { id_lesson: idLesson }, raw: true });
        if (!lesson) {
            return res.status(404).json({ message: "Lesson not found" });
        }
        const isMyCourse = await checkMyCourse(student.id_student, lesson.id_course)
        if (!isMyCourse) {
            return res.json({ status: false, message: 'Hãy mua khóa học để comment nhé' })
        }
        lesson.status = true
        return res.json(lesson);
    } catch (error) {
        console.log('error: ', error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getDetailCourseByIdLesson = async (req, res) => {
    const idLesson = req.body.idLesson;
    const lesson = await db.Lesson.findOne({where: {id_lesson: idLesson}});
    const detailCourse = await db.Course.findOne({where: {id_course: lesson.id_course}});
    return res.json({detailCourse, orderLesson: lesson.order_lesson});
}

export const checkCompleteLesson = async (req, res) => {
    try {
        const idLesson = req.body.idLesson;
        const idUser = req.user.id_user;
        const student = await db.Student.findOne({ where: { id_user: idUser } });

        const isComplete = await db.Progress.findOne({ where: { id_student: student.id_student, id_lesson: idLesson } });
        if (isComplete) {
            return res.json({ status: true });
        } else {
            return res.json({ status: false });
        }
    } catch (error) {
        return res.json({ status: false });
    }
}

export const deleteLesson = async (req, res) => {

    try {
        const idLesson = req.body.idLesson
        await db.Lesson.destroy({
            where: {
                id_lesson: idLesson
            }
        });
        return res.json({ status: true })
    } catch (error) {
        return res.json({ status: false })
    }
}

