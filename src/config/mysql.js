import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()

const sequelize = new Sequelize(process.env.MYSQL_URI, {
    dialect: "mysql",
    logging: false, // Ẩn log query
});

export {sequelize}