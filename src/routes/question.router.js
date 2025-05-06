import express from "express"
import { getAllQuestionByQuizId } from "../controllers/question.controller";

const router = express.Router()

router.get('/get-all-question-by-quiz-id', getAllQuestionByQuizId);
router.get('/update-question', getAllQuestionByQuizId);
router.get('/create-question', getAllQuestionByQuizId);
router.get('/delete-question', getAllQuestionByQuizId);