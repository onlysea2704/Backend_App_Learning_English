import express from "express"
import { checkAdminRole, checkUser } from "../middleware/check_auth.js"
import { getAllResponseByIdResult } from "../controllers/response.controller.js"

const router = express.Router()
router.post('/get-all-response-by-id-result',checkUser, getAllResponseByIdResult)

export default router;