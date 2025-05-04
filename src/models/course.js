import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const Course = sequelize.define('Course', {
    id_course: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    name_course: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10,2),
    link_image: DataTypes.STRING,
    number_lesson: DataTypes.INTEGER,
    number_student: DataTypes.INTEGER,
    id_lecturer: DataTypes.INTEGER
}, {
    tableName: 'courses',
    timestamps: false
});

export default Course;
  