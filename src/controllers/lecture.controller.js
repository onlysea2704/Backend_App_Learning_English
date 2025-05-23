import db from "../models/index.js";
import { checkMyCourse } from "../utils.ts/checkMyCourse.js";


export const getLectureByIdLesson = async (req, res) => {

    try {
        // const isMyCourse = await checkMyCourse(idStudent, idCourse)
        // if (!isMyCourse) {
        //     return res.json({ status: false, message: 'Hãy mua khóa học để comment nhé' })
        // }
        const idLesson = req.body.idLesson;
        const lecture = await db.Lecture.findOne({ where: { id_lesson: idLesson } });
        return res.json(lecture);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const createLecture = async (req, res) => {
    // input
    const idCourse = req.body.idCourse
    const sumLesson = await db.Lesson.count({where: {id_course : idCourse}})
    const newLesson = await db.Lesson.create({
        order_lesson: sumLesson + 1,
        type_lesson: 'video',
        id_course: idCourse
    })
    await db.Lecture.create({
        id_lesson: newLesson.id_lesson,
    })
    return res.json({ lessonId: newLesson.id_lesson })
}

export const createQuiz = async (req, res) => {
    // input
    const idCourse = req.body.idCourse
    const sumLesson = await db.Lesson.count({where: {id_course : idCourse}})
    const newLesson = await db.Lesson.create({
        order_lesson: sumLesson + 1,
        type_lesson: 'quiz',
        id_course: idCourse
    })
    await db.Quiz.create({
        id_lesson: newLesson.id_lesson,
    })
    return res.json({ lessonId: newLesson.id_lesson })
}