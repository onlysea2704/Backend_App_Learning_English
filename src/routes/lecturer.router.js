import express from 'express'
import { checkUser } from '../middleware/check_auth.js';
import multer from "multer"
import { updateLecturerInfoById } from '../controllers/lecturer.controller.js';

const upload = multer({ dest: 'uploads/' })
const router = express.Router();
router.post('/update', checkUser, upload.single('avatar'), updateLecturerInfoById);

export default router;