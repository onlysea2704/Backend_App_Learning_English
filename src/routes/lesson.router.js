import express from "express"
import { checkCompleteLesson, getListLessonByIdCourse, getInfoLesson, getDetailCourseByIdLesson } from "../controllers/lesson.controller.js";
import { checkUser } from "../middleware/check_auth.js";

const router = express.Router();
// visiter
router.post('/get-list-lessons-by-id-course', getListLessonByIdCourse);
router.post('/get-detail-course-by-id-lesson', getDetailCourseByIdLesson);

//student
router.post('/get-info-lesson', checkUser, getInfoLesson);
router.post('/check-complete-lesson',checkUser, checkCompleteLesson);

//admin

export default router;