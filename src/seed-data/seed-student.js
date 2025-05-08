import db from "../models/index.js";

export const seedStudents = async () => {
    try {
        await db.Student.bulkCreate([
            {
                name: 'Nguyễn Văn A',
                age: 20,
                gender: 'Nam',
                phone: '0901234567',
                email: 'nguyenvana@example.com',
                link_image: 'https://example.com/images/a.jpg',
                id_user: 1
            },
            {
                name: 'Trần Thị B',
                age: 22,
                gender: 'Nữ',
                phone: '0902345678',
                email: 'tranthib@example.com',
                link_image: 'https://example.com/images/b.jpg',
                id_user: 2
            },
            {
                name: 'Lê Văn C',
                age: 19,
                gender: 'Nam',
                phone: '0903456789',
                email: 'levanc@example.com',
                link_image: 'https://example.com/images/c.jpg',
                id_user: 3
            }
        ]);
        console.log('✅ Seed dữ liệu cho bảng students thành công.');
    } catch (error) {
        console.error('❌ Lỗi khi seed dữ liệu cho students:', error);
    }
}