import db from "../models/index.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const getQuizByIdLesson = async (req, res) => {
    // input {idLesson}
    const idLesson = req.body.idLesson;
    try {
        const quiz = await db.Quiz.findOne({ where: { id_lesson: idLesson } })
        return res.json(quiz)
    } catch (error) {
        console.log('error: ', error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const submitAnswer = async (req, res) => {
    try {
        const { id_quiz } = req.body;
        let answers = [];

        console.log('req.body: ', req.body);
        answers = req.body.answers.map(ans => ({
            id_question: ans.id_question,
            answer: ans.answer
        }));
        console.log("Parsed Answers: ", answers);

        // Upload các file mp3 lên Cloudinary và cập nhật đường dẫn
        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                const match = answers.find(ans => ans.answer === file.originalname);
                if (match) {
                    // Upload lên Cloudinary (mặc định vào folder "quiz_audio")
                    const result = await cloudinary.uploader.upload(file.path, {
                        resource_type: "video", // cloudinary xem mp3 là video
                    });
                    match.answer = result.url; // Cập nhật answer thành URL Cloudinary
                    fs.unlinkSync(file.path); // Xóa file tạm trên server
                }
            }
        }

        // 👉 TODO: Lưu `id_quiz` và `answers` vào database

        res.status(200).json({
            message: 'Answers submitted successfully',
            data: {
                id_quiz,
                answers,
            },
        });
    } catch (error) {
        console.error("Error submitting quiz:", error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const createQuiz = async (req, res) => {
    // input {idCourse, typeLesson}

    const { idCourse, typeLesson } = req.body;

    const newLesson = await db.Lesson.create({
        id_course: idCourse,
        order_lesson: 1,
        type_lesson: typeLesson
    })

    await db.Quiz.create({
        name_quiz: nameQuiz,
        description: description,
        id_lesson: newLesson.id,
    })
    return res.json({ status: "success" })
}

export const updateQuiz = async (req, res) => {

}

export const deleteQuiz = async (req, res) => {

}