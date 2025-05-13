import express from "express"
import { checkAdminRole, checkUser } from "../middleware/check_auth.js"
import multer from "multer"
import { getResultByIdLesson } from "../controllers/result.controller.js"

const router = express.Router()
router.get('/get-result-by-id-lesson', checkUser, getResultByIdLesson)

export default router;