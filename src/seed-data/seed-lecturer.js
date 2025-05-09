import db from "../models/index.js";

export const seedLectureres = async () => {
    try {
        await db.Lecturer.bulkCreate(lectureres)
        console.log('✅ Đã seed Lecturers');
    } catch (error) {
        console.error('❌ Lỗi seed Lecturers:', error);
    }
}

const lectureres = [
    {
        name: 'Nguyen Van A',
        experience: '5 năm',
        link_image: 'https://example.com/images/a.jpg',
        email: 'a@example.com',
        id_user: 1
    },
    {
        name: 'Tran Thi B',
        experience: '3 năm',
        link_image: 'https://example.com/images/b.jpg',
        email: 'b@example.com',
        id_user: 2
    },
    {
        name: 'Le Van C',
        experience: '10 năm',
        link_image: 'https://example.com/images/c.jpg',
        email: 'c@example.com',
        id_user: 3
    }
]