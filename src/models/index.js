import { Sequelize } from 'sequelize';
import sequelize from '../config/mysql.js';

// Import các model đã được định nghĩa trực tiếp
import User from './user.js';
import Student from './student.js';
import Course from './course.js';
import Lesson from './lesson.js';
import Lecture from './lecture.js';
import Quiz from './quiz.js';
import Question from './question.js';
import Progress from './progress.js';
import Result from './result.js';
import Response from './response.js';
import MyCourse from './myCourse.js';
import Comment from './comment.js';
import Lecturer from './lecturer.js';

// Gán vào db object
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Student = Student;
db.Course = Course;
db.Lesson = Lesson;
db.Lecture = Lecture;
db.Quiz = Quiz;
db.Question = Question;
db.Progress = Progress;
db.Result = Result;
db.Response = Response;
db.MyCourse = MyCourse;
db.Comment = Comment;
db.Lecturer = Lecturer;

// Thiết lập quan hệ nếu có
Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;
