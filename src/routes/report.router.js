import express from "express"
import { checkAdminRole } from "../middleware/check_auth.js"
import { getResulResponsetByIdLesson } from "../controllers/result.controller.js"
import { getReport } from "../controllers/report.controller.js"

const router = express.Router()

// Admin
router.get('/get-report', checkAdminRole, getReport);

export default router;