// node .\src\seed-data\seed-my-course.js
import db from '../models/index.js';

const baseDate = new Date();

const getDate = (daysAgo, hour) => {
  const d = new Date(baseDate);
  d.setDate(d.getDate() - daysAgo);
  d.setHours(hour, 0, 0, 0);
  return d.toISOString().slice(0, 19).replace('T', ' ');
};

const transactions = [
  { id_student: 45, id_course: 2, time_transaction: getDate(0, 9) },
  { id_student: 5, id_course: 3, time_transaction: getDate(0, 12) },
  { id_student: 12, id_course: 4, time_transaction: getDate(1, 9) },
  { id_student: 13, id_course: 1, time_transaction: getDate(1, 12) },
  { id_student: 14, id_course: 2, time_transaction: getDate(2, 9) },
  { id_student: 13, id_course: 3, time_transaction: getDate(2, 12) },
  { id_student: 19, id_course: 4, time_transaction: getDate(3, 9) },
  { id_student: 7, id_course: 5, time_transaction: getDate(3, 12) },
  { id_student: 9, id_course: 1, time_transaction: getDate(4, 9) },
  { id_student: 10, id_course: 3, time_transaction: getDate(4, 12) },
];


export const seedMyCourses = async () => {
  try {
    await db.MyCourse.bulkCreate(transactions);
    console.log('✅ Đã seed MyCourse');
  } catch (error) {
    console.error('❌ Lỗi seed MyCourse:', error);
  }
};

// seedMyCourses().then()