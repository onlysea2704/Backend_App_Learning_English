import db from "../models/index.js";

export const getStudentInfoById = async (req, res) => {
    const student = await db.Student.findOne({ where: { firebase_user_id: req.firebase_user_id } });
    res.json(student)
}

export const updateStudentInfoById = async (req, res) => {
    const updatedInfo = req;
    await db.Student.update({updatedInfo}, {where: {firebase_user_id: req.firebase_user_id}})
}