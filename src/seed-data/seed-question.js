import db from "../models/index.js";

export const seedQuestions = async () => {
    try {
        await db.Question.bulkCreate(questions);
        console.log('Đã thêm dữ liệu vào bảng quizes')
    } catch (error) {
        console.log('')
    }
}

seedQuestions().then();

const questions = [
    // Listening
    {
        question: 'Listen to the audio and choose the correct answer.',
        id_quiz: 1,
        link_mp3: 'https://example.com/audio/listen1.mp3',
        link_image: null,
        option_1: 'Apple',
        option_2: 'Banana',
        option_3: 'Orange',
        option_4: 'Grape',
        answer: 'Apple',
        scale: 1,
        interpret: 'This question checks basic listening comprehension.',
        type_question: 'listening'
    },
    // Speaking
    {
        question: 'Describe the image in detail.',
        id_quiz: 1,
        link_mp3: null,
        link_image: 'https://example.com/images/picture1.jpg',
        option_1: null,
        option_2: null,
        option_3: null,
        option_4: null,
        answer: null,
        scale: 2,
        interpret: 'This task evaluates speaking fluency and vocabulary.',
        type_question: 'speaking'
    },
    // Reading
    {
        question: 'What is the main idea of the passage?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'Technology trends',
        option_2: 'Health benefits of yoga',
        option_3: 'Travel tips',
        option_4: 'Financial planning',
        answer: 'Health benefits of yoga',
        scale: 2,
        interpret: 'Tests ability to understand written texts.',
        type_question: 'reading'
    },
    // Writing
    {
        question: 'Write an essay about the importance of time management.',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: null,
        option_2: null,
        option_3: null,
        option_4: null,
        answer: null,
        scale: 3,
        interpret: 'Assesses writing structure, coherence, and grammar.',
        type_question: 'writing'
    },
    // Listening
    {
        question: 'Listen and identify the number mentioned.',
        id_quiz: 2,
        link_mp3: 'https://example.com/audio/listen2.mp3',
        option_1: 'Fifteen',
        option_2: 'Fifty',
        option_3: 'Five',
        option_4: 'Fifty-five',
        answer: 'Fifty',
        scale: 1,
        interpret: 'Check for number recognition in audio.',
        type_question: 'listening'
    },
    {
        question: 'Listen to the conversation and choose the topic.',
        id_quiz: 2,
        link_mp3: 'https://example.com/audio/listen3.mp3',
        option_1: 'Weather',
        option_2: 'Shopping',
        option_3: 'Traveling',
        option_4: 'Cooking',
        answer: 'Traveling',
        scale: 1,
        interpret: 'Test understanding of general conversation.',
        type_question: 'listening'
    },
    // Speaking
    {
        question: 'Talk about your favorite hobby.',
        id_quiz: 2,
        link_image: null,
        answer: null,
        scale: 2,
        interpret: 'Test fluency and vocabulary range.',
        type_question: 'speaking'
    },
    {
        question: 'Describe your last holiday.',
        id_quiz: 2,
        link_image: null,
        answer: null,
        scale: 2,
        interpret: 'Assess ability to narrate past events.',
        type_question: 'speaking'
    },
    {
        question: 'Give your opinion on online learning.',
        id_quiz: 2,
        link_image: null,
        answer: null,
        scale: 2,
        interpret: 'Evaluate opinion expression and reasoning.',
        type_question: 'speaking'
    },
    // Reading
    {
        question: 'What can be inferred from the passage?',
        id_quiz: 2,
        option_1: 'The author dislikes technology.',
        option_2: 'Technology improves daily life.',
        option_3: 'People avoid using tech devices.',
        option_4: 'Tech is irrelevant in modern times.',
        answer: 'Technology improves daily life.',
        scale: 2,
        interpret: 'Inference based on short passage.',
        type_question: 'reading'
    },
    {
        question: 'Which of the following is a supporting detail?',
        id_quiz: 2,
        option_1: 'Topic of the text',
        option_2: 'Main idea',
        option_3: 'Date of publication',
        option_4: 'Example used in paragraph two',
        answer: 'Example used in paragraph two',
        scale: 2,
        interpret: 'Test detail recognition in reading.',
        type_question: 'reading'
    },
    {
        question: 'Find the meaning of the word "sustainable" in context.',
        id_quiz: 2,
        option_1: 'Temporary',
        option_2: 'Able to be maintained',
        option_3: 'Difficult to explain',
        option_4: 'Expensive',
        answer: 'Able to be maintained',
        scale: 2,
        interpret: 'Check vocabulary in context.',
        type_question: 'reading'
    },
    // Writing
    {
        question: 'Write a paragraph about your favorite season.',
        id_quiz: 2,
        scale: 3,
        interpret: 'Check descriptive writing and grammar.',
        type_question: 'writing'
    },
    {
        question: 'Write an email to your teacher explaining your absence.',
        id_quiz: 2,
        scale: 3,
        interpret: 'Test functional writing skills.',
        type_question: 'writing'
    }
]