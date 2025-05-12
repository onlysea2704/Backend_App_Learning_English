import db from "../models/index.js";

export const seedLectures = async () => {
    try {
        await db.Lecture.bulkCreate([
            {
                name_lecture: 'Giới thiệu về HTML 123',
                description: 'Bài giảng tổng quan về HTML và các thẻ cơ bản.',
                id_lesson: 1,
                link_material: 'https://example.com/html-intro'
            },
            {
                name_lecture: 'CSS Cơ bản',
                description: 'Tìm hiểu về cách áp dụng CSS vào trang web.',
                id_lesson: 3,
                link_material: 'https://example.com/css-basic'
            },
            {
                name_lecture: 'Lập trình JavaScript',
                description: 'Giới thiệu về cú pháp, biến và hàm trong JS.',
                id_lesson: 5,
                link_material: 'https://example.com/js-intro'
            },
            {
                name_lecture: 'DOM và Sự kiện',
                description: 'Tương tác với HTML bằng JavaScript và sự kiện người dùng.',
                id_lesson: 7,
                link_material: 'https://example.com/dom-events'
            },
            {
                name_lecture: 'ReactJS cơ bản',
                description: 'Tạo component, props và state trong React.',
                id_lesson: 9,
                link_material: 'https://example.com/react-basic'
            }
        ]);

        console.log('✅ Đã thêm dữ liệu mẫu vào bảng lectures.');
    } catch (error) {
        console.log('Thêm dữ liệu vào bảng bị lỗi', error);
    }
}
