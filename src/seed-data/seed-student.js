import db from "../models/index.js";
import { faker } from '@faker-js/faker';

const hoList = ['Nguyễn', 'Trần', 'Lê', 'Phạm', 'Hoàng', 'Phan', 'Vũ', 'Đặng', 'Bùi', 'Đỗ'];
const tenList = ['Anh', 'Bình', 'Châu', 'Dũng', 'Hà', 'Hạnh', 'Hùng', 'Khoa', 'Lan', 'Linh', 'Minh', 'Nga', 'Ngọc', 'Phong', 'Phương', 'Quang', 'Sơn', 'Thảo', 'Trang', 'Tú'];
const tenDemList = ['Duy', 'Văn', 'Thị', 'Như', 'Anh', 'Hoàng', 'Mai']

const getRandomVietnameseName = () => {
  const ho = faker.helpers.arrayElement(hoList);
  const ten = faker.helpers.arrayElement(tenList);
  const dem = faker.helpers.arrayElement(tenDemList); // tên đệm cũng từ danh sách
  return `${ho} ${dem} ${ten}`;
};

export const seedStudents = async () => {
  try {
    const users = await db.User.findAll(); // Lấy tất cả user

    if (!users || users.length === 0) {
      console.log("❌ Không tìm thấy user nào để tạo student.");
      return;
    }
    const students = users.map(user => ({
      name: getRandomVietnameseName(),
      age: faker.number.int({ min: 18, max: 30 }),
      gender: faker.helpers.arrayElement(['Nam', 'Nữ']),
    //   phone: faker.phone.number('090########'),
      phone: '09' + faker.string.numeric(8),
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
seedStudents().then()