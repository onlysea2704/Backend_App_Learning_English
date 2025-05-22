import express from "express"
import { createQuestion, getAllQuestionByQuizId, updateQuestion } from "../controllers/question.controller.js";
import { checkUser } from "../middleware/check_auth.js";
import multer from "multer"

const upload = multer({ dest: 'uploads/' });

const router = express.Router()

router.post('/get-all-question-by-quiz-id', checkUser, getAllQuestionByQuizId);
router.post('/create-question', createQuestion);
router.post('/update-question', upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'audio', maxCount: 1 }
]), updateQuestion);
router.get('/delete-question', getAllQuestionByQuizId);

export default router