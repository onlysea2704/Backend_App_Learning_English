// node .\src\seed-data\seed-course.js
import db from '../models/index.js';

const courses = [
  {
    name_course: "English for Beginners",
    description: "A basic course for new English learners.",
    price: 0.00,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail8_hqi58x.jpg",
    number_lesson: 0,
    number_student: 0,
    id_lecturer: 1,
    type_course: 'Listening'
  },
  {
    name_course: "Conversational English",
    description: "Focus on daily conversations and speaking practice.",
    price: 49.99,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail7_u7epnz.jpg",
    number_lesson: 0,
    number_student: 0,
    id_lecturer: 2,
    type_course: 'Listening'
  },
  {
    name_course: "English Grammar Essentials",
    description: "Master core grammar rules for effective writing and speaking.",
    price: 39.99,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail5_f6t66r.jpg",
    number_lesson: 0,
    number_student: 0,
    id_lecturer: 1,
    type_course: 'Writing'
  },
  {
    name_course: "Business English",
    description: "English for meetings, emails, and professional environments.",
    price: 59.99,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail6_lpmrs0.jpg",
    number_lesson: 0,
    number_student: 0,
    id_lecturer: 3,
    type_course: 'Writing'
  },
  {
    name_course: "IELTS Preparation",
    description: "Prepare for all 4 skills of the IELTS exam.",
    price: 79.99,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail4_sv8jxr.jpg",
    number_lesson: 0,
    number_student: 0,
    id_lecturer: 4,
    type_course: 'Speaking'
  },
  {
    name_course: "TOEIC Practice Course",
    description: "Boost your TOEIC score with practice tests and tips.",
    price: 69.99,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail3_gulrye.jpg",
    number_lesson: 0,
    number_student: 0,
    id_lecturer: 2,
    type_course: 'Speaking'
  },
  {
    name_course: "English Listening Skills",
    description: "Improve listening through real-world conversations.",
    price: 29.99,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail1_vklyyf.jpg",
    number_lesson: 0,
    number_student: 0,
    id_lecturer: 1,
    type_course: 'Reading'
  },
  {
    name_course: "Pronunciation Mastery",
    description: "Speak clearly and confidently with native-like pronunciation.",
    price: 34.99,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail2_ctdlnw.jpg",
    number_lesson: 0,
    number_student: 0,
    id_lecturer: 3,
    type_course: 'Reading'
  },
  {
    name_course: "Advanced Vocabulary Builder",
    description: "Learn high-level vocabulary for speaking and writing.",
    price: 44.99,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail5_f6t66r.jpg",
    number_lesson: 0,
    number_student: 0,
    id_lecturer: 2,
    type_course: 'Listening + Reading'
  },
  {
    name_course: "English Writing Skills",
    description: "Write emails, essays, and articles professionally.",
    price: 39.99,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail8_hqi58x.jpg",
    number_lesson: 0,
    number_student: 0,
    id_lecturer: 4,
    type_course: 'Listening + Reading'
  },
  {
    name_course: "English for Travel",
    description: "Useful English for trips, booking, and socializing abroad.",
    price: 19.99,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail7_u7epnz.jpg",
    number_lesson: 0,
    number_student: 0,
    id_lecturer: 1,
    type_course: 'Speaking + Writing'
  },
  {
    name_course: "English for Kids",
    description: "Fun and engaging English for young learners.",
    price: 14.99,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail5_f6t66r.jpg",
    number_lesson: 0,
    number_student: 0,
    id_lecturer: 5,
    type_course: 'Speaking + Writing'
  }
];

export const seedCourses = async () => {
  try {
    await db.Course.bulkCreate(courses);
    console.log('✅ Seed nhiều khóa học thành công');
  } catch (error) {
    console.error('❌ Lỗi khi seed Course:', error);
  }
};

// seedCourses();

