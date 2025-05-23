import express from "express"
import { ConfirmPayment, CreateBill } from "../controllers/payment.controller.js";
import { checkUser } from "../middleware/check_auth.js";

const router = express.Router();

// Student
router.post('/create-bill',checkUser, CreateBill);

// Zalopay
router.post('/confirm-payment', ConfirmPayment);

export default router;