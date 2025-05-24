import express from 'express'
import { checkAdminRole } from '../middleware/check_auth.js';
import multer from "multer"
import { createLecturer, getAllLecturer, getInfoLecturer, updateLecturerInfoById } from '../controllers/lecturer.controller.js';

const upload = multer({ dest: 'uploads/' })
const router = express.Router();

// Visiter + Admin
router.post('/get-info-lecturer', getInfoLecturer);
router.post('/public-api-get-all-lecturers', getAllLecturer);

// Admin
router.post('/create-lecturer', checkAdminRole, createLecturer);
router.post('/update', checkAdminRole, upload.single('avatar'), updateLecturerInfoById);

export default router;