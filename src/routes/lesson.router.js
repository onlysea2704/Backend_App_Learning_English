import express from "express"
import { checkCompleteLesson, getListLessonByIdCourse, getInfoLesson, markAsDone, getInfoLecturer, getDetailCourseByIdLesson, getAllLecturer } from "../controllers/lesson.controller.js";
import { checkUser } from "../middleware/check_auth.js";
import { getQuizByIdLesson, submitAnswer } from "../controllers/quiz.controller.js";
import { createLecture, createQuiz, getLectureByIdLesson } from "../controllers/lecture.controller.js";
import multer from "multer"

const upload = multer({ dest: 'uploads/' })

const router = express.Router();
// visiter
router.post('/get-list-lessons-by-id-course', getListLessonByIdCourse);
router.post('/get-detail-course-by-id-lesson', getDetailCourseByIdLesson);

//student
router.post('/get-info-lesson', checkUser, getInfoLesson);
router.post('/check-complete-lesson',checkUser, checkCompleteLesson);

//admin

export default router;