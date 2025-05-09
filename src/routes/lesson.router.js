import express from "express"
import { getAllLessonByIdCourse, getLecture, getQuiz } from "../controllers/lesson.controller.js";
import { checkUser } from "../middleware/check_auth.js";

const router = express.Router();
router.get('/get-lessons-by-id-course', getAllLessonByIdCourse)
router.get('/get-lecture-by-id-lesson', checkUser, getLecture)
router.get('/get-quiz-by-id-lesson', checkUser, getQuiz)

export default router;