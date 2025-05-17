import db from "../models/index.js";

const commonLectures = [
    {
        name_lecture: 'Introduction to Basic English',
        description: 'This lecture provides a comprehensive overview of the fundamental English skills that every beginner needs to master. You will learn essential vocabulary, simple sentence structures, and common expressions to help you start communicating effectively in English.',
        id_lesson: 1,
        link_material: 'https://example.com/english-basics-intro'
    },
    {
        name_lecture: 'Common Vocabulary for Daily Conversations',
        description: 'In this lesson, you will explore frequently used words and phrases that are essential for everyday conversations. The focus will be on practical vocabulary that can help you interact confidently in various daily situations such as shopping, dining, and socializing.',
        id_lesson: 2,
        link_material: 'https://example.com/daily-vocabulary'
    },
    {
        name_lecture: 'Grammar: Present Simple Tense',
        description: 'This lecture explains the rules and usage of the present simple tense in English. You will learn how to construct positive, negative, and interrogative sentences, along with common time expressions that are used with this tense in everyday communication.',
        id_lesson: 3,
        link_material: 'https://example.com/present-simple-tense'
    },
    {
        name_lecture: 'Basic English Pronunciation',
        description: 'Improve your pronunciation skills by learning how to produce basic English sounds accurately. This lesson covers important pronunciation tips, common mistakes to avoid, and exercises to help you speak more clearly and be better understood by native speakers.',
        id_lesson: 4,
        link_material: 'https://example.com/basic-pronunciation'
    },
    {
        name_lecture: 'Listening Skills: Understanding Simple Dialogues',
        description: 'Enhance your listening comprehension through practice with common conversational dialogues. This lecture focuses on recognizing key vocabulary, understanding the context, and responding appropriately in everyday situations like greetings, asking for directions, and making plans.',
        id_lesson: 5,
        link_material: 'https://example.com/listening-practice-1'
    },
    {
        name_lecture: 'Writing Short Paragraphs in English',
        description: 'Learn how to write clear, concise, and well-organized short paragraphs in English. This lesson teaches you how to develop a main idea, support it with details, and use appropriate linking words to make your writing flow smoothly and logically.',
        id_lesson: 6,
        link_material: 'https://example.com/short-writing'
    },
    {
        name_lecture: 'Using Prepositions in English',
        description: 'Master the use of common English prepositions such as in, on, at, by, and with. This lecture explains their meanings, how to use them correctly in sentences, and provides exercises to help you avoid typical errors and improve your grammatical accuracy.',
        id_lesson: 7,
        link_material: 'https://example.com/prepositions'
    },
    {
        name_lecture: 'Asking and Answering Questions',
        description: 'This lesson focuses on forming different types of questions in English and providing natural, accurate answers. You will practice question words, intonation patterns, and strategies to keep conversations flowing smoothly in various contexts.',
        id_lesson: 8,
        link_material: 'https://example.com/questions-and-answers'
    },
    {
        name_lecture: 'Linking Words for Speaking and Writing',
        description: 'Discover a range of linking words and phrases that will help you connect ideas clearly and logically when speaking or writing. This lecture covers connectors for addition, contrast, cause and effect, and sequencing to make your English more coherent and fluent.',
        id_lesson: 9,
        link_material: 'https://example.com/linking-words'
    },
    {
        name_lecture: 'Building Confidence in English Speaking',
        description: 'Gain confidence in your English speaking abilities through targeted practice and useful tips. This lesson includes strategies for overcoming fear of making mistakes, techniques to improve fluency, and activities designed to boost your motivation and speaking skills in real-life situations.',
        id_lesson: 10,
        link_material: 'https://example.com/speaking-confidence'
    }
]

export const seedLectures = async () => {
    try {
        // await db.Lecture.bulkCreate(lectures.map((lecture) => ({
        //     ...lecture,
        //     id_lesson: random()
        // })) );
        let lectures = commonLectures.flatMap((commonLecture, index) => {
            let lectures = []
            for (let i = 1; i <= 20; i++) {
                lectures.push({
                    ...commonLecture,
                    id_lesson: index*2+1 +(i-1)*2 + (i-1)*20
                })
                console.log(index*2+1 +(i-1)*2 + (i-1)*20)
            }
            return lectures
        })
        // await db.Lecture.bulkCreate(lectures);

        console.log('✅ Đã thêm dữ liệu mẫu vào bảng lectures.');
    } catch (error) {
        console.log('Thêm dữ liệu vào bảng bị lỗi', error);
    }
}
seedLectures().then()