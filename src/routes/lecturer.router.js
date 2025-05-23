import express from 'express'
import { checkUser } from '../middleware/check_auth.js';
import multer from "multer"
import { updateLecturerInfoById } from '../controllers/lecturer.controller.js';
import { getInfoLecturer } from '../controllers/lesson.controller.js';

const upload = multer({ dest: 'uploads/' })
const router = express.Router();

// Visiter
router.post('/get-info-lecturer', getInfoLecturer);

// Admin
// router.post('/create-lectuer', checkUser, upload.single('avatar'), updateLecturerInfoById);
router.post('/update', checkUser, upload.single('avatar'), updateLecturerInfoById);

export default router;