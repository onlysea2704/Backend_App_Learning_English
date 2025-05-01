import express from 'express'
import dotenv from 'dotenv';
import db from './models/index.js';

dotenv.config()

await db.sequelize.sync(); // chạy lệnh tạo bảng nếu chưa có


const app = express()
app.use(express.json)

const port = process.env.SERVER_PORT
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`)
})