import db from "../models/index.js";
import cloudinary from "../config/cloudinary.js";
import fs, { link } from "fs";
import { scoreSpeakingAI, ScoreWritingAI } from "../config/gemini.js";

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

export const updateQuiz = async (req, res) => {
    const quiz = req.body.quiz;
    const { id_quiz, ...infoQuiz } = quiz;

    const result = await db.Quiz.update({ ...infoQuiz }, { where: { id_quiz: id_quiz } });
    return res.json({ status: "success" });
}

export const deleteQuiz = async (req, res) => {
}

export const submitAnswer = async (req, res) => {
    try {
        const idUser = req.user.id_user

        const student = await db.Student.findOne({ where: { id_user: idUser } })
        const { idLesson } = req.body;
        const quiz = await db.Quiz.findOne({ where: { id_lesson: idLesson } })
        let answers = [];

        answers = req.body.answers.map(ans => ({
            id_question: ans.id_question,
            answer: ans.answer
        }));

        // Upload các file mp3 lên Cloudinary và cập nhật đường dẫn
        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                const match = answers.find(ans => ans.answer === file.originalname);
                if (match) {
                    const result = await cloudinary.uploader.upload(file.path, {
                        resource_type: "video", // cloudinary xem mp3 là video
                    });
                    match.urlCloudinary = result.url;
                    match.filePath = file.path; // Cập nhật answer thành URL Cloudinary
                }
            }
        }

        // Chấm điểm
        let sumScore = 0
        const newResult = await db.Result.create({
            id_student: student.id_student,
            id_quiz: quiz.id_quiz,
        })
        await Promise.all(answers.map(async (ans) => {
            const question = await db.Question.findOne({ where: { id_question: ans.id_question } });
            if (question.type_question === "reading") {
                const score = question.answer === ans.answer ? question.scale : 0
                sumScore += score
                await db.Response.create({
                    id_student: student.id_student,
                    id_question: question.id_question,
                    response: ans.answer,
                    type_response: question.type_question,
                    score: score,
                    id_result: newResult.id_result,
                })
            } else if (question.type_question === "listening") {
                const score = question.answer === ans.answer ? question.scale : 0
                sumScore += score
                await db.Response.create({
                    id_student: student.id_student,
                    id_question: question.id_question,
                    response: ans.answer,
                    type_response: question.type_question,
                    score: score,
                    id_result: newResult.id_result,
                })
            } else if (question.type_question === "speaking") {
                console.log('++++++++++++')
                const result = await scoreSpeakingAI(question.question, ans.filePath);
                sumScore += result?.score
                const idSpeakingResponse = await db.Response.create({
                    id_student: student.id_student,
                    id_question: question.id_question,
                    link_mp3: ans.urlCloudinary,
                    type_response: question.type_question,
                    score: result?.score,
                    comment: result?.comment + '\n' + result?.suggest,
                    id_result: newResult.id_result,
                })
            } else if (question.type_question === "writing") {
                const result = await ScoreWritingAI(question.question, ans.answer);
                sumScore += result?.score
                const idSpeakingResponse = await db.Response.create({
                    id_student: student.id_student,
                    id_question: question.id_question,
                    response: ans.answer,
                    type_response: question.type_question,
                    score: result?.score,
                    comment: result?.comment + '\n' + result?.suggest,
                    id_result: newResult.id_result,
                })
            }
        }))
        await db.Result.update(
            { score: sumScore }, // Dữ liệu cần cập nhật
            { where: { id_result: newResult.id_result } }               // Điều kiện cập nhật
        );
        await db.Progress.create({
            id_student: student.id_student,
            id_lesson: idLesson
        })

        return res.status(200).json({
            message: 'Answers submitted successfully',
            data: {
                idQuiz: quiz.id_quiz,
                answers,
            },
        });
    } catch (error) {
        console.error("Error submitting quiz:", error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

