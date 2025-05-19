// node .\src\seed-data\seed-course.js
import db from '../models/index.js';

const courses = [
  {
    name_course: "English for Beginners",
    description: "This course is designed specifically for new English learners. It covers fundamental vocabulary, essential grammar, and basic conversation patterns to help students confidently begin their journey in learning English. Interactive lessons and simple practice exercises ensure gradual but steady progress.",
    price: 1000000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail8_hqi58x.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 1,
    type_course: 'Listening'
  },
  {
    name_course: "Conversational English",
    description: "This course focuses on improving your spoken English through real-life conversation scenarios. Students will practice speaking on daily topics such as greetings, shopping, travel, and work situations. The course helps build confidence and fluency in everyday communication.",
    price: 1200000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail7_u7epnz.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 2,
    type_course: 'Listening'
  },
  {
    name_course: "English Grammar Essentials",
    description: "Learn essential English grammar rules and how to apply them in writing and conversation. This course covers sentence structure, verb tenses, punctuation, and common grammar mistakes. Ideal for those who want to improve their writing accuracy and overall language proficiency.",
    price: 1500000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail5_f6t66r.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 1,
    type_course: 'Writing'
  },
  {
    name_course: "Business English",
    description: "A practical course tailored for professionals and business students. Learn how to write professional emails, participate in meetings, make presentations, and handle workplace conversations in English. It also includes case studies and simulations of real business situations.",
    price: 2100000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail6_lpmrs0.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 3,
    type_course: 'Writing'
  },
  {
    name_course: "IELTS Preparation",
    description: "Comprehensive training for all four components of the IELTS exam: Listening, Reading, Writing, and Speaking. This course provides practice tests, strategies, and feedback to help students maximize their scores and feel fully prepared for the actual test day.",
    price: 1700000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail4_sv8jxr.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 4,
    type_course: 'Speaking'
  },
  {
    name_course: "TOEIC Practice Course",
    description: "A targeted preparation course for the TOEIC exam, focusing on both Listening and Reading sections. Students will go through realistic practice exams, learn time-management strategies, and review key vocabulary and grammar structures commonly found in the test.",
    price: 2560000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail3_gulrye.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 2,
    type_course: 'Speaking'
  },
  {
    name_course: "English Listening Skills",
    description: "Enhance your listening skills by engaging with real-world audio materials, such as conversations, interviews, and podcasts. This course helps students recognize different accents, understand natural speech patterns, and improve comprehension for everyday situations.",
    price: 1050000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail1_vklyyf.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 1,
    type_course: 'Reading'
  },
  {
    name_course: "Pronunciation Mastery",
    description: "Gain confidence in your speaking skills with targeted training in pronunciation. This course focuses on common pronunciation mistakes, intonation, stress, and rhythm to help you speak English more clearly and naturally like a native speaker.",
    price: 3000000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail2_ctdlnw.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 3,
    type_course: 'Reading'
  },
  {
    name_course: "Advanced Vocabulary Builder",
    description: "Expand your English vocabulary with high-level and topic-specific words that are essential for academic writing, presentations, and professional communication. Practice using advanced words in context through exercises and quizzes.",
    price: 2400000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail5_f6t66r.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 2,
    type_course: 'Listening + Reading'
  },
  {
    name_course: "English Writing Skills",
    description: "Learn how to write clear, structured, and professional English texts. This course covers different writing formats such as formal emails, academic essays, articles, and reports. Step-by-step guidance and practical tasks will sharpen your writing ability.",
    price: 1800000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail8_hqi58x.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 4,
    type_course: 'Listening + Reading'
  },
  {
    name_course: "English for Travel",
    description: "Prepare for international travel with essential English phrases and vocabulary. This course covers common scenarios like booking tickets, checking in at hotels, asking for directions, and social interactions during trips to help you travel with ease.",
    price: 1700000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail7_u7epnz.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 1,
    type_course: 'Speaking + Writing'
  },
  {
    name_course: "English for Kids",
    description: "Introduce children to the English language through fun, colorful, and interactive lessons. This course uses songs, stories, games, and videos to help young learners build vocabulary, pronunciation, and basic communication skills in an enjoyable way.",
    price: 1500000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail8_hqi58x.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 5,
    type_course: 'Speaking + Writing'
  },
  {
    name_course: "Everyday English Conversations",
    description: "Practice speaking English in daily situations such as shopping, ordering food, or making small talk. Build confidence and fluency through real-world dialogue and role-playing activities.",
    price: 1250000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail7_u7epnz.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 2,
    type_course: 'Speaking'
  },
  {
    name_course: "English for Job Interviews",
    description: "Master interview techniques and common questions in English. Learn how to present yourself professionally, highlight your skills, and respond to tricky questions with confidence.",
    price: 2000000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail6_lpmrs0.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 3,
    type_course: 'Speaking + Writing'
  },
  {
    name_course: "English Idioms and Phrasal Verbs",
    description: "Understand and use over 100 common idioms and phrasal verbs that native speakers use every day. Improve your speaking and listening by sounding more natural and fluent.",
    price: 1750000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail8_hqi58x.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 4,
    type_course: 'Listening + Speaking'
  },
  {
    name_course: "English for Academic Purposes",
    description: "Designed for students who want to study in English-speaking universities. Focuses on academic vocabulary, essay writing, note-taking, and reading scholarly articles.",
    price: 2200000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail4_sv8jxr.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 1,
    type_course: 'Reading + Writing'
  },
  {
    name_course: "TOEFL Preparation Course",
    description: "Get ready for the TOEFL exam with in-depth practice in reading, listening, speaking, and writing. Includes mock tests, tips, and personalized feedback to help you reach your target score.",
    price: 2600000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail1_vklyyf.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 2,
    type_course: 'All Skills'
  },
  {
    name_course: "English for Customer Service",
    description: "Ideal for people working in hospitality, sales, or support. Learn how to greet customers, handle complaints, and provide excellent service in English with polite and professional language.",
    price: 1400000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail8_hqi58x.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 3,
    type_course: 'Speaking + Listening'
  },
  {
    name_course: "English Reading Club",
    description: "Boost your reading comprehension through classic and modern English literature. Discuss stories, improve vocabulary, and analyze characters in a supportive group setting.",
    price: 1100000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail6_lpmrs0.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 5,
    type_course: 'Reading'
  },
  {
    name_course: "Email Writing in English",
    description: "Learn to write effective, clear, and professional emails for business and academic contexts. Topics include tone, structure, and common expressions.",
    price: 1300000,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail7_u7epnz.jpg",
    number_lesson: 20,
    number_student: 0,
    id_lecturer: 4,
    type_course: 'Writing'
  },
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

