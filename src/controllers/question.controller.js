import db from "../models/index.js";
import cloudinary from "../config/cloudinary.js";
import fs from 'fs'
import { createQuestionListenging, createQuestionReading, createQuestionSpeaking, createQuestionWriting } from "../utils.ts/useModelAi.js";

export const getAllQuestionByQuizId = async (req, res) => {

    const idQuiz = req.body.idQuiz;
    const isMyCourse = true;
    if (isMyCourse) {
        const questions = await db.Question.findAll({ where: { id_quiz: idQuiz } })
        return res.json(questions)
    } else {
        return res.json([])
    }
}

export const createQuestion = async (req, res) => {
    const idQuiz = req.body.idQuiz
    const newQuestion = await db.Question.create({
        id_quiz: idQuiz,
    })
    return res.json(newQuestion);
}

export const createQuestionByAi = async (req, res) => {
    const typeQuestion = req.body.typeQuestion
    let question
    if (typeQuestion === 'reading') {
        question = await createQuestionReading();
    } else if (typeQuestion === 'writing') {
        question = await createQuestionWriting();
    } else if (typeQuestion === 'speaking') {
        question = await createQuestionSpeaking();
    } else {
        question = await createQuestionListenging(req.file.path);
    }
    return res.json(question);
}

export const updateQuestion = async (req, res) => {
    try {
        const question = JSON.parse(req.body.question);
        const { id_question, ...infoQuestion } = question;

        // Xử lý ảnh nếu có
        if (req.files && req.files['image']) {
            const imageFile = req.files['image'][0];
            const imagePath = imageFile.path;
            const result = await cloudinary.uploader.upload(imagePath, {
                resource_type: 'image'
            });
            infoQuestion.link_image = result.url;
            fs.unlinkSync(imagePath); // Xóa file local
        }

        // Xử lý audio nếu có
        if (req.files && req.files['audio']) {
            const audioFile = req.files['audio'][0];
            const audioPath = audioFile.path;
            const result = await cloudinary.uploader.upload(audioPath, {
                resource_type: 'video' // Cloudinary dùng 'video' cho audio
            });
            infoQuestion.link_mp3 = result.url;
            fs.unlinkSync(audioPath); // Xóa file local
        }

        // Cập nhật DB
        const resultUpdate = await db.Question.update(
            { ...infoQuestion },
            { where: { id_question: id_question } }
        );
        return res.json({ status: 'success', result: resultUpdate });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 'error', message: error.message });
    }
};

export const deleteQuestion = async (req, res) => {
    try {
        const idQuestion = req.body.idQuestion
        await db.Question.destroy({
            where: {
                id_question: idQuestion
            }
        });
        return res.json({ status: true })
    } catch (error) {
        return res.json({ status: false })
    }
}