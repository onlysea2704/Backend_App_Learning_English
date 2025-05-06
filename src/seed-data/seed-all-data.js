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
        await db.MyCourse.destroy({ where: {}, truncate: true });
        await db.Comment.destroy({ where: {}, truncate: true });
        await db.Response.destroy({ where: {}, truncate: true });
        await db.Question.destroy({ where: {}, truncate: true });
        await db.Quiz.destroy({ where: {}, truncate: true });
        await db.Lesson.destroy({ where: {}, truncate: true });
        await db.Lecture.destroy({ where: {}, truncate: true });
        await db.Course.destroy({ where: {}, truncate: true });
        await db.Student.destroy({ where: {}, truncate: true });
        await db.User.destroy({ where: {}, truncate: true });
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
}

clearDatabase().then()
seedData().then()