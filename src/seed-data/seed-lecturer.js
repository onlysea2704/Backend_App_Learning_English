import db from "../models/index.js";

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
    link_image: 'https://example.com/images/an.jpg',
    email: 'an.nguyen@example.com',
    id_user: 1
  },
  {
    name: 'Trần Thị Bích Ngọc',
    experience: '7 năm',
    link_image: 'https://example.com/images/ngoc.jpg',
    email: 'bichngoc.tran@example.com',
    id_user: 2
  },
  {
    name: 'Lê Minh Tuấn',
    experience: '6 năm',
    link_image: 'https://example.com/images/tuan.jpg',
    email: 'tuan.le@example.com',
    id_user: 3
  },
  {
    name: 'Phạm Quang Huy',
    experience: '4 năm',
    link_image: 'https://example.com/images/huy.jpg',
    email: 'quanghuy.pham@example.com',
    id_user: 4
  },
  {
    name: 'Nguyễn Thị Thu Trang',
    experience: '8 năm',
    link_image: 'https://example.com/images/trang.jpg',
    email: 'thutrang.nguyen@example.com',
    id_user: 5
  },
  {
    name: 'Đỗ Anh Dũng',
    experience: '5 năm',
    link_image: 'https://example.com/images/dung.jpg',
    email: 'anhdung.do@example.com',
    id_user: 6
  },
  {
    name: 'Hoàng Bảo Châu',
    experience: '3 năm',
    link_image: 'https://example.com/images/baochau.jpg',
    email: 'chau.hoang@example.com',
    id_user: 7
  },
  {
    name: 'Võ Thị Kim Ngân',
    experience: '6 năm',
    link_image: 'https://example.com/images/ngan.jpg',
    email: 'kimngan.vo@example.com',
    id_user: 8
  },
  {
    name: 'Nguyễn Thành Đạt',
    experience: '4 năm',
    link_image: 'https://example.com/images/dat.jpg',
    email: 'thanhdat.nguyen@example.com',
    id_user: 9
  },
  {
    name: 'Bùi Thị Lan Hương',
    experience: '9 năm',
    link_image: 'https://example.com/images/huong.jpg',
    email: 'lanhuong.bui@example.com',
    id_user: 10
  }
]
