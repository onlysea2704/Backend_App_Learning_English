import express from "express"
import { lessonGetByIdCourse } from "../controllers/lesson.controller.js";

const router = express.Router();
router.get('/get-lessons-by-id-course', lessonGetByIdCourse)

export default router;