import express from 'express'
import { register } from '../controllers/user.controller.js';
import multer from "multer"

const upload = multer({ dest: 'uploads/' })

const router = express.Router();
router.post('/register', upload.single('avatar'), register);

export default router;