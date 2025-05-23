import express from 'express'
import { checkAdminRole, checkUser } from '../middleware/check_auth.js';
import multer from "multer"
import { createLecturer, updateLecturerInfoById } from '../controllers/lecturer.controller.js';
import { getInfoLecturer } from '../controllers/lesson.controller.js';

const upload = multer({ dest: 'uploads/' })
const router = express.Router();

// Visiter + Admin
router.post('/get-info-lecturer', getInfoLecturer);
router.post('/public-api-get-all-lecturers', getAllLecturer);

// Admin
router.post('/create-lectuer', checkAdminRole, upload.single('avatar'), createLecturer);
router.post('/update', checkAdminRole, upload.single('avatar'), updateLecturerInfoById);

export default router;