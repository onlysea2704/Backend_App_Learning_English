import db from "../models/index.js";
import { faker } from '@faker-js/faker';

export const seedStudents = async () => {
    try {
        const users = await db.User.findAll(); // Lấy tất cả user

        if (!users || users.length === 0) {
            console.log("❌ Không tìm thấy user nào để tạo student.");
            return;
        }
        const students = users.map(user => ({
            name: faker.person.fullName(),
            age: faker.number.int({ min: 18, max: 30 }),
            gender: faker.helpers.arrayElement(['Nam', 'Nữ']),
            phone: faker.phone.number('090########'),
            email: faker.internet.email(),
            link_image: faker.image.avatar(),
            id_user: user.id_user
        }));

        await db.Student.bulkCreate(students);
        console.log('✅ Seed dữ liệu cho bảng students thành công từ user.');
    } catch (error) {
        console.error('❌ Lỗi khi seed dữ liệu cho students:', error);
    }
};
// seedStudents().then()