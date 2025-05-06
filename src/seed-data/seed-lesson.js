// node .\src\seed-data\seed-lesson.js
import db from "../models/index.js";

export const seedLessons = async () => {
  try {
    await db.Lesson.bulkCreate([
      { id_course: 1, order_lesson: 1, type_lesson: 'video' },
      { id_course: 1, order_lesson: 2, type_lesson: 'quiz' },
      { id_course: 1, order_lesson: 3, type_lesson: 'video' },
      { id_course: 1, order_lesson: 4, type_lesson: 'quiz' },
      { id_course: 1, order_lesson: 5, type_lesson: 'video' },

      { id_course: 2, order_lesson: 1, type_lesson: 'video' },
      { id_course: 2, order_lesson: 2, type_lesson: 'quiz' },
      { id_course: 2, order_lesson: 3, type_lesson: 'quiz' },
      { id_course: 2, order_lesson: 4, type_lesson: 'video' },
      { id_course: 2, order_lesson: 5, type_lesson: 'quiz' },

      { id_course: 3, order_lesson: 1, type_lesson: 'video' },
      { id_course: 3, order_lesson: 2, type_lesson: 'video' },
      { id_course: 3, order_lesson: 3, type_lesson: 'quiz' },
      { id_course: 3, order_lesson: 4, type_lesson: 'video' },
      { id_course: 3, order_lesson: 5, type_lesson: 'quiz' },

      { id_course: 4, order_lesson: 1, type_lesson: 'video' },
      { id_course: 4, order_lesson: 2, type_lesson: 'video' },
      { id_course: 4, order_lesson: 3, type_lesson: 'quiz' },
      { id_course: 4, order_lesson: 4, type_lesson: 'video' },
      { id_course: 4, order_lesson: 5, type_lesson: 'quiz' },
    ]);
    console.log('✅ Đã seed Lesson');
  } catch (error) {
    console.error('❌ Lỗi seed MyCourse:', error);
  }
}

seedLessons().then()