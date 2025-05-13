import express from 'express'
import dotenv from 'dotenv';
import db from './models/index.js';
import cors from "cors"
import userRoutes from "./routes/user.router.js"
import studentRoutes from "./routes/student.router.js"
import courseRoutes from "./routes/course.router.js"
import lessonRoutes from "./routes/lesson.router.js"
import questionRoutes from "./routes/question.router.js"
import commentRoutes from "./routes/comment.router.js"
import resultRoutes from "./routes/result.router.js"

dotenv.config()

await db.sequelize.sync(); // chạy lệnh tạo bảng nếu chưa có


const app = express()
app.use(express.json())
app.use(cors())
app.use('/user',userRoutes)
app.use('/student',studentRoutes)
app.use('/course',courseRoutes)
app.use('/lesson',lessonRoutes)
app.use('/question',questionRoutes)
app.use('/comment',commentRoutes)
app.use('/result',resultRoutes)

const port = process.env.SERVER_PORT
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`)
})