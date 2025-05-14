import express from "express"
import { checkCompleteLesson, getAllLessonByIdCourse, getInfoLesson } from "../controllers/lesson.controller.js";
import { checkUser } from "../middleware/check_auth.js";
import { getQuizByIdLesson, submitAnswer } from "../controllers/quiz.controller.js";
import { getLectureByIdLesson } from "../controllers/lecture.controller.js";
import multer from "multer"

const upload = multer({ dest: 'uploads/' })

const router = express.Router();
router.post('/get-lessons-by-id-course', getAllLessonByIdCourse);
router.post('/get-lecture-by-id-lesson', getLectureByIdLesson); // checkUser
router.post('/get-quiz-by-id-lesson', getQuizByIdLesson); // checkUser
router.post('/get-info-lesson', getInfoLesson);
router.post('/check-complete-lesson',checkUser, checkCompleteLesson);
router.post('/submit-answers', checkUser,upload.array('files'), submitAnswer)

export default router;