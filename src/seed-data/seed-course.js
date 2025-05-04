// node .\src\seed-data\seed-course.js
import db from '../models/index.js';

const seedCourses = async () => {
  try {
    const courses = [
      {
        title: 'Lập trình Python cơ bản',
        description: 'Khóa học giúp bạn bắt đầu với Python.',
        lecturer_id: 1,
        price: 120000,
      },
      {
        title: 'SQL cho người mới bắt đầu',
        description: 'Học cách truy vấn và quản lý cơ sở dữ liệu.',
        lecturer_id: 2,
        price: 90000,
      },
      {
        title: 'Node.js và Express',
        description: 'Xây dựng backend với Node.js.',
        lecturer_id: 1,
        price: 150000,
      },
      {
        title: 'HTML & CSS từ cơ bản đến nâng cao',
        description: 'Xây dựng giao diện web chuyên nghiệp.',
        lecturer_id: 3,
        price: 80000,
      },
      {
        title: 'Java OOP nâng cao',
        description: 'Học về lập trình hướng đối tượng với Java.',
        lecturer_id: 4,
        price: 110000,
      },
      {
        title: 'ReactJS chuyên sâu',
        description: 'Khóa học cho lập trình viên React trung cấp.',
        lecturer_id: 2,
        price: 180000,
      },
      {
        title: 'Lập trình C cho sinh viên năm nhất',
        description: 'Khóa học nền tảng về ngôn ngữ C.',
        lecturer_id: 5,
        price: 75000,
      },
    ];

    await db.Course.bulkCreate(courses);
    console.log('✅ Seed nhiều khóa học thành công');
  } catch (error) {
    console.error('❌ Lỗi khi seed Course:', error);
  }
};

seedCourses();
