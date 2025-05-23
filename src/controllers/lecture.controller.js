import db from "../models/index.js";
import { checkMyCourse } from "../utils.ts/checkMyCourse.js";

export const updateLecture = async (req, res) => {
    const lecture = JSON.parse(req.body.lecture);
    const { id_lecture, ...infoLecture } = lecture
    if (req.file) {
        const filePath = req.file.path;
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: 'video'
        });
        infoLecture.link_material = result.url;
        fs.unlinkSync(filePath);
    }
    const result = await db.Lecture.update({ ...infoLecture }, { where: { id_lecture: id_lecture } });
    return res.json({ status: "success" });
}

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

export const markAsDone = async (req, res) => {

    try {
        const idUser = req.user.id_user;
        const idLesson = req.body.idLesson;
        const student = await db.Student.findOne({ where: { id_user: idUser } });
        await db.Progress.create({
            id_student: student.id_student,
            id_lesson: idLesson
        })
        return res.json({ success: true })
    } catch (error) {
        console.log(error.message)
        return res.json({ success: true })
    }
}

export const deleteLecture = async (req, res) => {
}