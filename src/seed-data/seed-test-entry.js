// node .\src\seed-data\seed-course.js
import db from '../models/index.js';

const testCourse = {
    id_course: 21,
    name_course: "Placement Test Course",
    description: "This course helps evaluate your current English level in Listening, Speaking, Reading, and Writing.",
    price: 0,
    link_image: "https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail8_hqi58x.jpg",
    number_lesson: 5,
    number_student: 0,
    id_lecturer: 5,
    type_course: 'All Level'
}

const testLessons = [
    {
        id_lesson: 401,
        id_course: 21,
        order_lesson: 1,
        type_lesson: 'quiz'
    },
    {
        id_lesson: 402,
        id_course: 21,
        order_lesson: 2,
        type_lesson: 'quiz'
    },
    {
        id_lesson: 403,
        id_course: 21,
        order_lesson: 3,
        type_lesson: 'quiz'
    }, {
        id_lesson: 404,
        id_course: 21,
        order_lesson: 4,
        type_lesson: 'quiz'
    },
    {
        id_lesson: 405,
        id_course: 21,
        order_lesson: 5,
        type_lesson: 'video'
    }

]

const testQuiz = [
    {
        "id_quiz": 201,
        "id_lesson": 401,
        "name_quiz": "Reading Placement Test",
        "description": "Test your English reading comprehension."
    },
    {
        "id_quiz": 202,
        "id_lesson": 402,
        "name_quiz": "Listening Placement Test",
        "description": "Evaluate your English listening skills."
    },
    {
        "id_quiz": 203,
        "id_lesson": 403,
        "name_quiz": "Writing Placement Test",
        "description": "Review your English writing skills."
    },
    {
        "id_quiz": 204,
        "id_lesson": 404,
        "name_quiz": "Speaking Placement Test",
        "description": "Assess your spoken English ability."
    },
]

const testLecture = {
    "id_lecture": 201,
    "id_lesson": 405,
    "name_lecture": "Course Orientation",
    "link_material": "https://example.com/orientation.mp4",
    "description": "Watch this video to understand how to choose the right course after completing your placement test."
}

const testQuestions = [
    {
        question: 'What does the word "ambitious" mean?',
        id_quiz: 201,
        link_mp3: null,
        link_image: null,
        option_1: 'Lazy',
        option_2: 'Determined',
        option_3: 'Confused',
        option_4: 'Friendly',
        answer: 'Determined',
        scale: 10,
        interpret: 'Tests understanding of vocabulary.',
        type_question: 'reading'
    },
    {
        question: 'Which sentence is grammatically correct?',
        id_quiz: 201,
        link_mp3: null,
        link_image: null,
        option_1: 'She don’t like apples.',
        option_2: 'He goes to school every day.',
        option_3: 'They is playing football.',
        option_4: 'I has a cat.',
        answer: 'He goes to school every day.',
        scale: 10,
        interpret: 'Tests knowledge of grammar.',
        type_question: 'reading'
    },
    {
        question: 'What is the synonym of "happy"?',
        id_quiz: 201,
        link_mp3: null,
        link_image: null,
        option_1: 'Sad',
        option_2: 'Angry',
        option_3: 'Joyful',
        option_4: 'Tired',
        answer: 'Joyful',
        scale: 10,
        interpret: 'Tests vocabulary knowledge.',
        type_question: 'reading'
    },
    {
        question: 'What is the opposite of "increase"?',
        id_quiz: 201,
        link_mp3: null,
        link_image: null,
        option_1: 'Grow',
        option_2: 'Reduce',
        option_3: 'Rise',
        option_4: 'Expand',
        answer: 'Reduce',
        scale: 10,
        interpret: 'Tests understanding of antonyms.',
        type_question: 'reading'
    },
    {
        question: 'Which word is a noun?',
        id_quiz: 201,
        link_mp3: null,
        link_image: null,
        option_1: 'Run',
        option_2: 'Beautiful',
        option_3: 'Happiness',
        option_4: 'Quickly',
        answer: 'Happiness',
        scale: 10,
        interpret: 'Tests parts of speech.',
        type_question: 'reading'
    },
    {
        question: 'What time does the speaker say the meeting will start?',
        id_quiz: 202,
        link_mp3: null,
        link_image: null,
        option_1: '9:00 AM',
        option_2: '10:00 AM',
        option_3: '11:00 AM',
        option_4: '12:00 PM',
        answer: '10:00 AM',
        scale: 10,
        interpret: 'Tests ability to understand spoken time information.',
        type_question: 'listening'
    },
    {
        question: 'What is the main topic discussed by the speaker?',
        id_quiz: 202,
        link_mp3: null,
        link_image: null,
        option_1: 'Travel plans',
        option_2: 'Health advice',
        option_3: 'Weather forecast',
        option_4: 'New technology',
        answer: 'Health advice',
        scale: 10,
        interpret: 'Tests comprehension of spoken topic.',
        type_question: 'listening'
    },
    {
        question: 'What does the speaker ask the listener to do?',
        id_quiz: 202,
        link_mp3: null,
        link_image: null,
        option_1: 'Call back later',
        option_2: 'Send an email',
        option_3: 'Attend a meeting',
        option_4: 'Prepare a report',
        answer: 'Send an email',
        scale: 10,
        interpret: 'Tests understanding of instructions.',
        type_question: 'listening'
    },
    {
        question: 'Where will the event take place?',
        id_quiz: 202,
        link_mp3: null,
        link_image: null,
        option_1: 'Conference Room A',
        option_2: 'Main Hall',
        option_3: 'Auditorium',
        option_4: 'Outdoor Park',
        answer: 'Main Hall',
        scale: 10,
        interpret: 'Tests ability to catch location details.',
        type_question: 'listening'
    },
    {
        question: 'How does the speaker feel about the project?',
        id_quiz: 202,
        link_mp3: null,
        link_image: null,
        option_1: 'Excited',
        option_2: 'Worried',
        option_3: 'Indifferent',
        option_4: 'Confused',
        answer: 'Excited',
        scale: 10,
        interpret: 'Tests ability to infer speaker’s emotion.',
        type_question: 'listening'
    },
    {
        question: 'Write about your favorite season and explain why you like it.',
        id_quiz: 203,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'writing'
    },
    {
        question: 'Describe a person who has influenced your life.',
        id_quiz: 203,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'writing'
    },
    {
        question: 'Can you describe your daily routine?',
        id_quiz: 204,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'speaking'
    },
    {
        question: 'What do you usually do on weekends?',
        id_quiz: 204,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'speaking'
    },
]

export const seedCourseTest = async () => {
    try {
        await db.Course.create(testCourse);
        await db.Lesson.bulkCreate(testLessons);
        await db.Quiz.bulkCreate(testQuiz);
        await db.Lecture.create(testLecture);
        await db.Question.bulkCreate(testQuestions);

        const students = await db.Student.findAll();
        await db.MyCourse.bulkCreate(students.map((student) => ({ id_student: student.id_student, id_course: 21 })));
        await db.Course.update({
            number_student: db.Sequelize.literal(`number_student + ${students.length}`),
        }, {
            where: { id_course: 21 }
        })
        console.log('✅ Seed dữ liệu kiểm tra đầu vào thành công');
    } catch (error) {
        console.error('❌ Lỗi khi seed dữ liệu kiểm tra đầu vào thành công:', error.message);
    }
};
