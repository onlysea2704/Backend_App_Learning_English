import express from "express"
import { checkAdminRole, checkUser } from "../middleware/check_auth.js"
import { createQuiz, deleteQuiz, getQuizByIdLesson, submitAnswer, updateQuiz } from "../controllers/quiz.controller.js";
import multer from "multer"

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

// Student
router.post('/get-quiz-by-id-lesson', checkUser, getQuizByIdLesson); 
router.post('/submit-answers', checkUser, upload.array('files'), submitAnswer);

// Admin
router.post('/create-quiz', checkAdminRole, createQuiz);
router.post('/update-quiz', checkAdminRole, updateQuiz);
router.post('/delete-quiz', checkAdminRole, deleteQuiz);

export default router;