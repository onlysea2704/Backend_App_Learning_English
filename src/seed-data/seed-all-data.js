// node .\src\seed-data\seed-all-data.js

import db from "../models/index.js";
import { seedComments } from "./seed-comment.js";
import { seedCourses } from "./seed-course.js";
import { seedLectures } from "./seed-lecture.js";
import { seedLessons } from "./seed-lesson.js";
import { seedMyCourses } from "./seed-my-course.js";
import { seedQuestions } from "./seed-question.js";
import { seedQuizes } from "./seed-quiz.js";
import { seedResponses } from "./seed-response.js";
import { seedStudents } from "./seed-student.js";
import { seedUsers } from "./seed-user.js";
import { seedLectureres } from "./seed-lecturer.js";

const clearDatabase = async () => {
    try {
        await db.Response.destroy({ where: {} });
        await db.Question.destroy({ where: {} });
        await db.Comment.destroy({ where: {} });
        await db.MyCourse.destroy({ where: {} });
        await db.Quiz.destroy({ where: {} });
        await db.Lesson.destroy({ where: {} });
        await db.Lecture.destroy({ where: {} });
        await db.Lecturer.destroy({ where: {} });
        await db.Course.destroy({ where: {} });
        await db.Student.destroy({ where: {} });
        await db.User.destroy({ where: {} });

        await db.sequelize.query('ALTER TABLE responses AUTO_INCREMENT = 1');
        await db.sequelize.query('ALTER TABLE questions AUTO_INCREMENT = 1');
        await db.sequelize.query('ALTER TABLE comments AUTO_INCREMENT = 1');
        await db.sequelize.query('ALTER TABLE my_courses AUTO_INCREMENT = 1');
        await db.sequelize.query('ALTER TABLE quizzes AUTO_INCREMENT = 1');
        await db.sequelize.query('ALTER TABLE lessons AUTO_INCREMENT = 1');
        await db.sequelize.query('ALTER TABLE lectures AUTO_INCREMENT = 1');
        await db.sequelize.query('ALTER TABLE lecturers AUTO_INCREMENT = 1');
        await db.sequelize.query('ALTER TABLE courses AUTO_INCREMENT = 1');
        await db.sequelize.query('ALTER TABLE students AUTO_INCREMENT = 1');
        await db.sequelize.query('ALTER TABLE users AUTO_INCREMENT = 1');

        console.log('✔️ Đã xóa sạch dữ liệu trong database.');
    } catch (err) {
        console.error('❌ Lỗi khi xóa dữ liệu:', err);
    }
};

const seedData = async () => {
    await seedUsers();
    await seedCourses();
    await seedLectures();
    await seedLessons();
    await seedQuizes();
    await seedQuestions();
    await seedResponses();
    await seedComments();
    await seedMyCourses();
    await seedLectureres();
    await seedStudents();
}

await clearDatabase().then()
await seedData().then()