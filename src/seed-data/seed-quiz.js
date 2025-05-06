import db from "../models/index.js";

export const seedQuizes = async() => {
    try {
        await db.Quiz.bulkCreate([
            {
              name_quiz: 'Quiz HTML Cơ bản',
              description: 'Kiểm tra kiến thức về các thẻ HTML cơ bản.',
              id_lesson: 1,
              score: 10
            },
            {
              name_quiz: 'Quiz CSS',
              description: 'Câu hỏi về cách định dạng giao diện bằng CSS.',
              id_lesson: 1,
              score: 15
            },
            {
              name_quiz: 'Quiz JavaScript cơ bản',
              description: 'Câu hỏi về cú pháp, biến và hàm trong JavaScript.',
              id_lesson: 2,
              score: 20
            },
            {
              name_quiz: 'Quiz DOM & Events',
              description: 'Kiểm tra kiến thức về thao tác DOM và sự kiện JS.',
              id_lesson: 2,
              score: 25
            },
            {
              name_quiz: 'Quiz ReactJS',
              description: 'Quiz về component, props, state trong React.',
              id_lesson: 3,
              score: 30
            }
          ]);
          console.log('Đã thêm dữ liệu vào bảng quizes.');
    } catch (error) {
        console.log('Lỗi khi thêm dữ liệu vào bảng quizes.', error);
    }
}
seedQuizes().then()