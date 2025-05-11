import express from 'express'
import { getStudentInfoById } from '../controllers/student.controller.js';
import { checkUser } from '../middleware/check_auth.js';

const router = express.Router();
router.get('/info', checkUser, getStudentInfoById);

export default router;