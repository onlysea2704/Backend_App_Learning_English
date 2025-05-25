import express from 'express';
import { checkAdminRole } from '../middleware/check_auth.js';
import { createSchedule, deleteSchedule, getAllSchedule, sendEmail, updateSchedule } from '../controllers/schedule.controller.js';
import { qstashAuth } from '../middleware/qstashAuth.js';

const router = express.Router();

router.get('/get-all-schedule', checkAdminRole, getAllSchedule);
router.post('/create-schedule', checkAdminRole, createSchedule);
router.post('/update-schedule', checkAdminRole, updateSchedule);
router.post('/delete-schedule', checkAdminRole, deleteSchedule);

router.post('/send-email', qstashAuth, sendEmail);


export default router;
