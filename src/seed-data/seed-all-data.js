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

const clearDatabase = async () => {
    try {
        await db.Response.destroy({ where: {} });
        await db.Question.destroy({ where: {} });
        await db.Comment.destroy({ where: {} });
        await db.MyCourse.destroy({ where: {} });
        await db.Quiz.destroy({ where: {} });
        await db.Lesson.destroy({ where: {} });
        await db.Lecture.destroy({ where: {} });
        await db.Course.destroy({ where: {} });
        await db.Student.destroy({ where: {} });
        await db.User.destroy({ where: {} });
        console.log('✔️ Đã xóa sạch dữ liệu trong database.');
    } catch (err) {
        console.error('❌ Lỗi khi xóa dữ liệu:', err);
    }
};

const seedData = async () => {
    await seedUsers();
    await seedStudents();
    await seedCourses();
    await seedLectures();
    await seedLessons();
    await seedQuizes();
    await seedQuestions();
    await seedResponses();
    await seedComments();
    await seedMyCourses();
    await seedLectures();
}

await clearDatabase().then()
await seedData().then()