import express from "express"
import { getLecture, getQuiz, lessonGetByIdCourse } from "../controllers/lesson.controller.js";

const router = express.Router();
router.get('/get-lessons-by-id-course', lessonGetByIdCourse)
router.get('/get-lecture-by-id-lesson', getLecture)
router.get('/get-quiz-by-id-lesson', getQuiz)

export default router;