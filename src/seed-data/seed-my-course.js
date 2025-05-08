// node .\src\seed-data\seed-my-course.js
import db from '../models/index.js';

export const seedMyCourses = async () => {
  try {
    await db.MyCourse.bulkCreate([
      {
        id_student: 1,
        id_course: 1,
      },
      {
        id_student: 1,
        id_course: 2,
      },
    ]);

    console.log('✅ Đã seed MyCourse');
  } catch (error) {
    console.error('❌ Lỗi seed MyCourse:', error);
  }
};
// seedMyCourses().then()