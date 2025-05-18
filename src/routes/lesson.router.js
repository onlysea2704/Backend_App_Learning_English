import express from "express"
import { checkCompleteLesson, getListLessonByIdCourse, getInfoLesson } from "../controllers/lesson.controller.js";
import { checkUser } from "../middleware/check_auth.js";
import { getQuizByIdLesson, submitAnswer } from "../controllers/quiz.controller.js";
import { getLectureByIdLesson } from "../controllers/lecture.controller.js";
import multer from "multer"

const upload = multer({ dest: 'uploads/' })

const router = express.Router();
router.post('/get-list-lessons-by-id-course', getListLessonByIdCourse);
router.post('/get-lecture-by-id-lesson', checkUser, getLectureByIdLesson); // checkUser
router.post('/get-quiz-by-id-lesson', checkUser, getQuizByIdLesson); // checkUser
router.post('/get-info-lesson', checkUser, getInfoLesson);
router.post('/check-complete-lesson',checkUser, checkCompleteLesson);
router.post('/submit-answers', checkUser, upload.array('files'), submitAnswer)

export default router;