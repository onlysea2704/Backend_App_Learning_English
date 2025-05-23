import express from 'express'
import { getStudentInfoById, updateStudentInfoById } from '../controllers/student.controller.js';
import { checkUser } from '../middleware/check_auth.js';
import multer from "multer"

const upload = multer({ dest: 'uploads/' })
const router = express.Router();

// Student
router.get('/info', checkUser, getStudentInfoById);
router.put('/update', checkUser, upload.single('avatar'), updateStudentInfoById);

export default router;