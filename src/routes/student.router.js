import express from 'express'
import { getStudentById } from '../controllers/student.controller';

const router = express.Router();
router.get('/info', getStudentById);

export default router;