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
    const newLesson = await db.Lesson.create({})

    await db.Lecture.create({
        name_lecture: DataTypes.STRING,
        description: DataTypes.TEXT,
        id_lesson: newLesson.id,
        link_material: '',
    })
    return res.json({ status: true })
}