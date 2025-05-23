import express from "express"
import { checkAdminRole, checkUser } from "../middleware/check_auth.js"
import multer from "multer"
import { createLecture, getLectureByIdLesson } from "../controllers/lecture.controller.js";
import { updateLecture } from "../controllers/course.controller.js";
import { markAsDone } from "../controllers/lesson.controller.js";

const upload = multer({ dest: 'uploads/' });

const router = express.Router();

// Student
router.post('/get-lecture-by-id-lesson', checkUser, getLectureByIdLesson);
router.post('/mark-as-done', checkUser, markAsDone);

// Admin
router.post('/update-lecture', checkAdminRole,upload.single('video'), updateLecture);
router.post('/create-lecture', checkAdminRole, createLecture);
// router.post('/delete-lecture', checkAdminRole, );

export default router;