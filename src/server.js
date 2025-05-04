import express from 'express'
import dotenv from 'dotenv';
import db from './models/index.js';
import cors from "cors"
import userRoutes from "./routes/user.router.js"

dotenv.config()

await db.sequelize.sync(); // chạy lệnh tạo bảng nếu chưa có


const app = express()
app.use(express.json())
app.use(cors())
app.use('/user',userRoutes)

const port = process.env.SERVER_PORT
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`)
})