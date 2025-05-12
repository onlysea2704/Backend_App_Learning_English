import db from "../models/index.js";

export const getAllLessonByIdCourse = async (req, res) => {
    // input {idCourse}
    const idCourse = req.body.idCourse;
    try {
        const results = await db.sequelize.query(`
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
        return res.json(results);
    } catch (error) {
        console.log('error: ', error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getLectureById = async (req, res) => {

    // input {idLecture}
    const idLesson = req.body.idLesson;
    const lecture = db.Lecture.findOne({ where: { id_lesson: idLesson } })
    return res.json({ lecture })
}

export const getQuizById = async (req, res) => {

    // input {idQuiz}
    const idLesson = req.body.id;
    const quiz = db.Quiz.findOne({ where: { id_lesson: idLesson } })
    return res.json({ quiz })
}

export const createLesson = async (req, res) => {
    return res.json({ status: true })
}

export const updateLesson = async (req, res) => {
    return res.json({ status: true })
}