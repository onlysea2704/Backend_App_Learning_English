// node .\src\seed-data\seed-lesson.js
import db from "../models/index.js";

export const seedLessons = async () => {
  try {

    // await db.Lesson.bulkCreate([
    //   { id_course: 1, order_lesson: 1, type_lesson: 'video' },
    //   { id_course: 1, order_lesson: 2, type_lesson: 'quiz' },
    //   { id_course: 1, order_lesson: 3, type_lesson: 'video' },
    //   { id_course: 1, order_lesson: 4, type_lesson: 'quiz' },
    //   { id_course: 1, order_lesson: 5, type_lesson: 'video' },
    //   { id_course: 1, order_lesson: 6, type_lesson: 'quiz' },
    //   { id_course: 1, order_lesson: 7, type_lesson: 'video' },
    //   { id_course: 1, order_lesson: 8, type_lesson: 'quiz' },
    //   { id_course: 1, order_lesson: 9, type_lesson: 'video' },
    //   { id_course: 1, order_lesson: 10, type_lesson: 'quiz' },

    //   { id_course: 2, order_lesson: 1, type_lesson: 'video' },
    //   { id_course: 2, order_lesson: 2, type_lesson: 'quiz' },
    //   { id_course: 2, order_lesson: 3, type_lesson: 'quiz' },
    //   { id_course: 2, order_lesson: 4, type_lesson: 'video' },
    //   { id_course: 2, order_lesson: 5, type_lesson: 'quiz' },

    //   { id_course: 3, order_lesson: 1, type_lesson: 'video' },
    //   { id_course: 3, order_lesson: 2, type_lesson: 'video' },
    //   { id_course: 3, order_lesson: 3, type_lesson: 'quiz' },
    //   { id_course: 3, order_lesson: 4, type_lesson: 'video' },
    //   { id_course: 3, order_lesson: 5, type_lesson: 'quiz' },

    //   { id_course: 4, order_lesson: 1, type_lesson: 'video' },
    //   { id_course: 4, order_lesson: 2, type_lesson: 'video' },
    //   { id_course: 4, order_lesson: 3, type_lesson: 'quiz' },
    //   { id_course: 4, order_lesson: 4, type_lesson: 'video' },
    //   { id_course: 4, order_lesson: 5, type_lesson: 'quiz' },
    // ]);

    const lessons = [];
    for (let id_course = 1; id_course <= 20; id_course++) {
      for (let order_lesson = 1; order_lesson <= 20; order_lesson++) {
        lessons.push({
          id_course,
          order_lesson,
          type_lesson: order_lesson % 2 === 1 ? 'video' : 'quiz'
        });
      }
    }
    await db.Lesson.bulkCreate(lessons);
    console.log('✅ Đã seed Lesson');
  } catch (error) {
    console.error('❌ Lỗi seed MyCourse:', error);
  }
}
