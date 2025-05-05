// node .\src\seed-data\seed-course.js
import db from '../models/index.js';

const seedCourses = async () => {
  try {
    const courses = [
      {
        name_course: 'Lập trình Python cơ bản',
        description: 'Khóa học giúp bạn bắt đầu với Python.',
        lecturer_id: 1,
        price: 120000,
      },
      {
        name_course: 'SQL cho người mới bắt đầu',
        description: 'Học cách truy vấn và quản lý cơ sở dữ liệu.',
        lecturer_id: 2,
        price: 90000,
      },
      {
        name_course: 'Node.js và Express',
        description: 'Xây dựng backend với Node.js.',
        lecturer_id: 1,
        price: 150000,
      },
      {
        name_course: 'HTML & CSS từ cơ bản đến nâng cao',
        description: 'Xây dựng giao diện web chuyên nghiệp.',
        lecturer_id: 3,
        price: 80000,
      },
      {
        name_course: 'Java OOP nâng cao',
        description: 'Học về lập trình hướng đối tượng với Java.',
        lecturer_id: 4,
        price: 110000,
      },
      {
        name_course: 'ReactJS chuyên sâu',
        description: 'Khóa học cho lập trình viên React trung cấp.',
        lecturer_id: 2,
        price: 180000,
      },
      {
        name_course: 'Lập trình C cho sinh viên năm nhất',
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
