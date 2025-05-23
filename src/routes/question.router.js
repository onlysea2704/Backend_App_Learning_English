import express from "express"
import { createQuestion, createQuestionByAi, deleteQuestion, getAllQuestionByQuizId, updateQuestion } from "../controllers/question.controller.js";
import { checkAdminRole, checkUser } from "../middleware/check_auth.js";
import multer from "multer"

const upload = multer({ dest: 'uploads/' });

const router = express.Router()

// Student
router.post('/get-all-question-by-quiz-id', checkUser, getAllQuestionByQuizId);

// Admin
router.post('/create-question',checkAdminRole, createQuestion);
router.post('/create-question-by-ai', checkAdminRole, upload.single('audio'), createQuestionByAi);
router.post('/update-question', checkAdminRole, upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'audio', maxCount: 1 }
]), updateQuestion);
router.get('/delete-question',checkAdminRole, deleteQuestion);

export default router