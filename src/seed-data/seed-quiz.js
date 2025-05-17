import db from "../models/index.js";

const englishQuizzes = [
  {
    name_quiz: 'Quiz English Grammar Basics',
    description: 'Test your knowledge of basic English grammar rules.'
  },
  {
    name_quiz: 'Quiz Vocabulary - Daily Life',
    description: 'Assess your vocabulary related to everyday life situations.'
  },
  {
    name_quiz: 'Quiz English Tenses',
    description: 'Evaluate your understanding of different English tenses.'
  },
  {
    name_quiz: 'Quiz Reading Comprehension',
    description: 'Test your ability to understand written English passages.'
  },
  {
    name_quiz: 'Quiz Listening Skills',
    description: 'Check your English listening comprehension skills.'
  },
  {
    name_quiz: 'Quiz Speaking Practice',
    description: 'Practice and assess your English speaking abilities.'
  },
  {
    name_quiz: 'Quiz Writing Skills',
    description: 'Evaluate your English writing skills and sentence formation.'
  },
  {
    name_quiz: 'Quiz English Idioms',
    description: 'Test your knowledge of common English idioms and expressions.'
  },
  {
    name_quiz: 'Quiz Business English',
    description: 'Assess your English skills in a business context.'
  },
  {
    name_quiz: 'Quiz English Pronunciation',
    description: 'Evaluate your English pronunciation and accent.'
  },
  {
    name_quiz: 'Basic Vocabulary Quiz',
    description: 'Test your knowledge of everyday English words.'
  },
  {
    name_quiz: 'English Grammar Essentials',
    description: 'Check your understanding of basic English grammar rules.'
  },
  {
    name_quiz: 'Common Verbs Quiz',
    description: 'Identify and use common English verbs correctly.'
  },
  {
    name_quiz: 'Prepositions Practice',
    description: 'Test your ability to use prepositions in English sentences.'
  },
  {
    name_quiz: 'Synonyms and Antonyms',
    description: 'Match words with similar or opposite meanings.'
  },
  {
    name_quiz: 'Daily Conversations Quiz',
    description: 'Assess your familiarity with phrases used in everyday English conversations.'
  },
  {
    name_quiz: 'Pronouns and Articles',
    description: 'Test your knowledge of English pronouns and articles.'
  },
  {
    name_quiz: 'Tenses in English',
    description: 'Choose the correct verb tense in various contexts.'
  },
  {
    name_quiz: 'Question Forms Quiz',
    description: 'Practice forming and identifying different types of questions in English.'
  },
  {
    name_quiz: 'Listening Vocabulary Quiz',
    description: 'Check your understanding of words commonly used in listening exercises.'
  }
];

export const seedQuizes = async () => {
  try {
    let quizzes = []
    for (let i = 2; i <= 400; i += 2) {
      const randomNumber = Math.floor(Math.random() * 20);
      quizzes.push({
        ...englishQuizzes[randomNumber],
        id_lesson: i,
      })
    }
    await db.Quiz.bulkCreate(quizzes);
    console.log('✅ Đã thêm dữ liệu vào bảng quizes.');
  } catch (error) {
    console.log('❌ Lỗi khi thêm dữ liệu vào bảng quizes.', error);
  }
}
// seedQuizes().then()