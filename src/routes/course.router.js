import express from "express"
import { checkAdminRole, checkUser } from "../middleware/check_auth.js"
import { creatCourse, deleteCourse, getAllCourse, getAllListCourseAdmin, getDetailCourseById, getMyCourses, updateCourse } from "../controllers/course.controller.js"
import { multer } from "multer"

const upload = multer({ dest: 'uploads/' })

const router = express.Router()
router.get('/all-course', checkUser, getAllCourse)
router.get('/my-course', checkUser, getMyCourses)
router.get('/get-all-list-courses-admin', checkAdminRole, getAllListCourseAdmin)
router.get('/detail-course', checkUser, getDetailCourseById)
router.post('/create-course', checkAdminRole, upload.single('audio'), creatCourse)
router.get('/update-course', updateCourse)
router.get('/delete-course', deleteCourse)

export default router;