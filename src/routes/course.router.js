import express from "express"
import { checkUser } from "../middleware/check_auth.js"
import { getAllCourse, getDetailCourseById, getMyCourses } from "../controllers/course.controller.js"

const router = express.Router()
router.get('/all-course', checkUser, getAllCourse)
router.get('/my-course', checkUser, getMyCourses)
router.get('/detail-course', checkUser, getDetailCourseById)

export default router;