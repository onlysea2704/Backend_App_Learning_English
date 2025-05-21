import express from "express"
import { checkAdminRole, checkUser } from "../middleware/check_auth.js"
import { getResulResponsetByIdLesson } from "../controllers/result.controller.js"
import { getReport } from "../controllers/report.controller.js"

const router = express.Router()
router.get('/get-report', checkUser, getReport);

export default router;