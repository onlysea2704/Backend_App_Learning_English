// node .\src\seed-data\seed-my-course.js
import db from '../models/index.js';

export const seedMyCourses = async () => {
  try {
    await db.MyCourse.bulkCreate([
      {
        id_student: 101,
        id_course: 2,
      },
      {
        id_student: 101,
        id_course: 3,
      },
      {
        id_student: 101,
        id_course: 4,
      },
      {
        id_student: 101,
        id_course: 5,
      },
    ]);

    console.log('✅ Đã seed MyCourse');
  } catch (error) {
    console.error('❌ Lỗi seed MyCourse:', error);
  }
};
seedMyCourses().then()