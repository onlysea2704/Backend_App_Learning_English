import express from "express"
import { checkUser } from "../middleware/check_auth.js"
import { getAllCourse, getMyCourses } from "../controllers/course.controller.js"

const router = express.Router()
router.get('/all-course', checkUser, getAllCourse)
router.get('/my-course', checkUser, getMyCourses)

export default router;