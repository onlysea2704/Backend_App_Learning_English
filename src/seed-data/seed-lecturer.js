import db from "../models/index.js";
import { faker } from '@faker-js/faker';


export const seedLectureres = async () => {
    try {
        await db.Lecturer.bulkCreate(lectureres)
        console.log('✅ Đã seed Lecturers');
    } catch (error) {
        console.error('❌ Lỗi seed Lecturers:', error);
    }
}

const lectureres =[
  {
    name: 'Nguyễn Văn An',
    experience: '5 năm',
    link_image: faker.image.avatar(),
    email: 'an.nguyen@example.com',
    phone_number: '0918297377',
    age: 30,
    id_user: 1
  },
  {
    name: 'Trần Thị Bích Ngọc',
    experience: '7 năm',
    link_image: faker.image.avatar(),
    email: 'bngoc.tran@example.com',
    phone_number: '0919307388',
    age: 32,
    id_user: 2
  },
  {
    name: 'Lê Minh Tuấn',
    experience: '6 năm',
    link_image: faker.image.avatar(),
    email: 'tuan.le@example.com',
    phone_number: '08888897377',
    age: 40,
    id_user: 3
  },
  {
    name: 'Phạm Quang Huy',
    experience: '4 năm',
    link_image: faker.image.avatar(),
    email: 'quhuy.pham@example.com',
    phone_number: '0918123456',
    age: 37,
    id_user: 4
  },
  {
    name: 'Nguyễn Thị Thu Trang',
    experience: '8 năm',
    link_image: faker.image.avatar(),
    email: 'trang.nguyen@example.com',
    phone_number: '09182975377',
    age: 36,
    id_user: 5
  },
  {
    name: 'Đỗ Anh Dũng',
    experience: '5 năm',
    link_image: faker.image.avatar(),
    email: 'anhdung.do@example.com',
    phone_number: '09789456457',
    age: 33,
    id_user: 6
  },
  {
    name: 'Hoàng Bảo Châu',
    experience: '3 năm',
    link_image: faker.image.avatar(),
    email: 'chau.hoang@example.com',
    phone_number: '091987654377',
    age: 34,
    id_user: 7
  },
  {
    name: 'Võ Thị Kim Ngân',
    experience: '6 năm',
    link_image: faker.image.avatar(),
    email: 'kimngan.vo@example.com',
    phone_number: '091829245678',
    age: 32,
    id_user: 8
  },
  {
    name: 'Nguyễn Thành Đạt',
    experience: '4 năm',
    link_image: faker.image.avatar(),
    email: 'thdat.nguyen@example.com',
    phone_number: '09876543214',
    age: 33,
    id_user: 9
  },
  {
    name: 'Bùi Thị Lan Hương',
    experience: '9 năm',
    link_image: faker.image.avatar(),
    email: 'lhuong.bui@example.com',
    phone_number: '012365789',
    age: 30,
    id_user: 10
  }
]
