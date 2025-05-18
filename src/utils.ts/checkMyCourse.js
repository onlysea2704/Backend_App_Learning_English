import db from "../models/index.js";

export const checkMyCourse = async (idStudent, idCourse) => {
    const result = await db.MyCourse.findOne({ where: { id_student: idStudent, id_course: idCourse } })
    if (result) {
        return true
    }
    else {
        return false
    }
} 