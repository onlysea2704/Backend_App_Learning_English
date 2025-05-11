import express from "express"
import { getAllLessonByIdCourse, getLectureById } from "../controllers/lesson.controller.js";
import { checkUser } from "../middleware/check_auth.js";
import { getQuizById } from "../controllers/quiz.controller.js";

const router = express.Router();
router.get('/get-lessons-by-id-course', getAllLessonByIdCourse)
router.get('/get-lecture-by-id-lesson', checkUser, getLectureById)
router.get('/get-quiz-by-id-lesson', checkUser, getQuizById)
// router.post('/create-')
export default router;