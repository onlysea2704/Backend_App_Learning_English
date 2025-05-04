import express from "express"
import { checkUser } from "../middleware/check_auth.js"
import { getAllCourse } from "../controllers/course.controller.js"

const router = express.Router()
router.get('/all-course', checkUser, getAllCourse)

export default router;