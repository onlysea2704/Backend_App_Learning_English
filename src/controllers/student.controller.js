import {Student} from '../models/student'

export const getStudentById = async (req, res) => {
    const student = await Student.findAll();
    res.json(student)
}
