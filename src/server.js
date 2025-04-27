import express from 'express'
import dotenv from 'dotenv';

dotenv.config()

const app = express()
app.use(express.json)

const port = process.env.SERVER_PORT
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`)
})