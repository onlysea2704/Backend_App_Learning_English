import express from "express"
import { checkAdminRole, checkUser } from "../middleware/check_auth.js"
import { checkProgress, creatCourse, getAllCourse, getAllListCourseAdmin, getDetailCourseById, getMyCourses, getPopularCourse, publicApiGetAllCourse, publicApiGetDetailCourseById, updateCourse, updateLecture, updateQuiz } from "../controllers/course.controller.js"
import multer from "multer"

const upload = multer({ dest: 'uploads/' });

const router = express.Router();
// visiter
router.get('/get-popular-courses', getPopularCourse);
router.get('/public-api-get-all-course', publicApiGetAllCourse);
router.post('/public-api-get-detail-course', publicApiGetDetailCourseById);

// student
router.get('/all-course', checkUser, getAllCourse);
router.get('/my-course', checkUser, getMyCourses);
router.post('/detail-course', checkUser, getDetailCourseById);
router.post('/check-progress', checkUser, checkProgress);

// admin
router.get('/get-all-list-courses-admin', checkAdminRole, getAllListCourseAdmin);
router.post('/create-course', checkAdminRole, upload.single('image'), creatCourse);
router.post('/update-course', checkAdminRole,upload.single('detailCourse'), updateCourse);
// router.get('/delete-course', checkAdminRole, deleteCourse);

export default router;