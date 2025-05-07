import express from "express"
import { getAllQuestionByQuizId } from "../controllers/question.controller.js";
import { checkUser } from "../middleware/check_auth.js";

const router = express.Router()

router.get('/get-all-question-by-quiz-id', checkUser, getAllQuestionByQuizId);
router.get('/update-question', getAllQuestionByQuizId);
router.get('/create-question', getAllQuestionByQuizId);
router.get('/delete-question', getAllQuestionByQuizId);

export default router