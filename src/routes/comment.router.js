import express from "express"
import { checkUser } from "../middleware/check_auth.js"
import { createComment, getAllCommentByIdCourse } from "../controllers/comment.controller.js";

const router = express.Router();
router.post('/get-all-comment-by-id-course', getAllCommentByIdCourse);
router.post('/create',checkUser, createComment);

export default router;