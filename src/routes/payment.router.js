import express from "express"
import { CreateBill } from "../controllers/payment.controller.js";
import { checkUser } from "../middleware/check_auth.js";

const router = express.Router();
router.post('/create-bill',checkUser, CreateBill);

export default router;