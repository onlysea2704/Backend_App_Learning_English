import db from "../models/index.js";

const readingQuestions = [
    {
        question: 'What does the word "ambitious" mean?',
        id_quiz: 1,
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
        id_quiz: 1,
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
        id_quiz: 1,
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
        id_quiz: 1,
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
        id_quiz: 1,
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
        question: 'Choose the correct meaning of the idiom "break the ice".',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'To freeze water',
        option_2: 'To start a conversation',
        option_3: 'To be angry',
        option_4: 'To travel',
        answer: 'To start a conversation',
        scale: 10,
        interpret: 'Tests knowledge of idioms.',
        type_question: 'reading'
    },
    {
        question: 'What does the prefix "un-" usually mean?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'Not',
        option_2: 'Before',
        option_3: 'After',
        option_4: 'Again',
        answer: 'Not',
        scale: 10,
        interpret: 'Tests understanding of word formation.',
        type_question: 'reading'
    },
    {
        question: 'Identify the main verb in the sentence: "She writes letters every day."',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'She',
        option_2: 'Writes',
        option_3: 'Letters',
        option_4: 'Every',
        answer: 'Writes',
        scale: 10,
        interpret: 'Tests verb identification.',
        type_question: 'reading'
    },
    {
        question: 'Which sentence uses the past tense correctly?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'He goed to school.',
        option_2: 'They watched a movie.',
        option_3: 'I runned fast.',
        option_4: 'She writed a book.',
        answer: 'They watched a movie.',
        scale: 10,
        interpret: 'Tests past tense usage.',
        type_question: 'reading'
    },
    {
        question: 'What does the word "fragile" mean?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'Strong',
        option_2: 'Delicate',
        option_3: 'Heavy',
        option_4: 'Fast',
        answer: 'Delicate',
        scale: 10,
        interpret: 'Tests vocabulary understanding.',
        type_question: 'reading'
    },
    {
        question: 'Choose the sentence that is a question.',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'She is happy.',
        option_2: 'Are you coming?',
        option_3: 'They play football.',
        option_4: 'We went home.',
        answer: 'Are you coming?',
        scale: 10,
        interpret: 'Tests sentence types.',
        type_question: 'reading'
    },
    {
        question: 'What is the plural form of "child"?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'Childs',
        option_2: 'Childes',
        option_3: 'Children',
        option_4: 'Child',
        answer: 'Children',
        scale: 10,
        interpret: 'Tests plural forms.',
        type_question: 'reading'
    },
    {
        question: 'Which word is an adjective?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'Quickly',
        option_2: 'Blue',
        option_3: 'Run',
        option_4: 'Friend',
        answer: 'Blue',
        scale: 10,
        interpret: 'Tests parts of speech.',
        type_question: 'reading'
    },
    {
        question: 'Find the correct sentence with subject-verb agreement.',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'They is happy.',
        option_2: 'She are tired.',
        option_3: 'He runs fast.',
        option_4: 'I goes home.',
        answer: 'He runs fast.',
        scale: 10,
        interpret: 'Tests subject-verb agreement.',
        type_question: 'reading'
    },
    {
        question: 'Choose the sentence with the correct preposition.',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'She is good at math.',
        option_2: 'He is good on math.',
        option_3: 'They are good in math.',
        option_4: 'I am good of math.',
        answer: 'She is good at math.',
        scale: 10,
        interpret: 'Tests preposition usage.',
        type_question: 'reading'
    },
    {
        question: 'What does "to borrow" mean?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'To lend something',
        option_2: 'To take something temporarily',
        option_3: 'To buy something',
        option_4: 'To give something',
        answer: 'To take something temporarily',
        scale: 10,
        interpret: 'Tests vocabulary understanding.',
        type_question: 'reading'
    },
    {
        question: 'Identify the correct sentence using future tense.',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'She will go to the party.',
        option_2: 'She goes to the party.',
        option_3: 'She went to the party.',
        option_4: 'She going to the party.',
        answer: 'She will go to the party.',
        scale: 10,
        interpret: 'Tests future tense usage.',
        type_question: 'reading'
    },
    {
        question: 'Which word is a verb?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'Apple',
        option_2: 'Run',
        option_3: 'Happy',
        option_4: 'Blue',
        answer: 'Run',
        scale: 10,
        interpret: 'Tests parts of speech.',
        type_question: 'reading'
    },
    {
        question: 'What is the meaning of "generous"?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'Selfish',
        option_2: 'Kind and giving',
        option_3: 'Angry',
        option_4: 'Quiet',
        answer: 'Kind and giving',
        scale: 10,
        interpret: 'Tests vocabulary understanding.',
        type_question: 'reading'
    },
    {
        question: 'Choose the correct form of the verb: "They ____ to the market yesterday."',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'go',
        option_2: 'went',
        option_3: 'gone',
        option_4: 'going',
        answer: 'went',
        scale: 10,
        interpret: 'Tests past tense usage.',
        type_question: 'reading'
    },
    {
        question: 'Which word is closest in meaning to "generous"?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'Mean',
        option_2: 'Kind',
        option_3: 'Greedy',
        option_4: 'Selfish',
        answer: 'Kind',
        scale: 10,
        interpret: 'Tests vocabulary knowledge.',
        type_question: 'reading'
    },
    {
        question: 'Which sentence is grammatically correct?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'She can sings well.',
        option_2: 'He going to school.',
        option_3: 'They was happy.',
        option_4: 'We are learning English.',
        answer: 'We are learning English.',
        scale: 10,
        interpret: 'Tests grammar recognition in reading.',
        type_question: 'reading'
    },
    {
        question: 'Which word fits best in the blank: "He is very ____ at math."',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'good',
        option_2: 'well',
        option_3: 'badly',
        option_4: 'quick',
        answer: 'good',
        scale: 10,
        interpret: 'Tests understanding of word usage.',
        type_question: 'reading'
    },
    {
        question: 'Choose the correct plural form of "child":',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'Childs',
        option_2: 'Childes',
        option_3: 'Children',
        option_4: 'Childrens',
        answer: 'Children',
        scale: 10,
        interpret: 'Tests knowledge of irregular plurals.',
        type_question: 'reading'
    },
    {
        question: 'What does the prefix "un-" usually mean?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'Again',
        option_2: 'Not',
        option_3: 'Very',
        option_4: 'With',
        answer: 'Not',
        scale: 10,
        interpret: 'Tests understanding of prefixes.',
        type_question: 'reading'
    },
    {
        question: 'Which sentence best shows cause and effect?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'She studied hard, so she passed the test.',
        option_2: 'She is wearing a blue shirt.',
        option_3: 'The sun is bright.',
        option_4: 'He likes chocolate.',
        answer: 'She studied hard, so she passed the test.',
        scale: 10,
        interpret: 'Tests recognition of logical relationships.',
        type_question: 'reading'
    },
    {
        question: 'Which word is an antonym of "noisy"?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'Quiet',
        option_2: 'Loud',
        option_3: 'Shout',
        option_4: 'Buzz',
        answer: 'Quiet',
        scale: 10,
        interpret: 'Tests vocabulary and opposites.',
        type_question: 'reading'
    },
    {
        question: 'Choose the best word to complete the sentence: "He ____ his homework every day."',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'do',
        option_2: 'does',
        option_3: 'doing',
        option_4: 'done',
        answer: 'does',
        scale: 10,
        interpret: 'Tests subject-verb agreement.',
        type_question: 'reading'
    },
    {
        question: 'Which word is a noun?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'Run',
        option_2: 'Happy',
        option_3: 'Quickly',
        option_4: 'Table',
        answer: 'Table',
        scale: 10,
        interpret: 'Tests ability to identify parts of speech.',
        type_question: 'reading'
    },
    {
        question: 'Which of the following is a complete sentence?',
        id_quiz: 1,
        link_mp3: null,
        link_image: null,
        option_1: 'Because she was late.',
        option_2: 'Running in the park.',
        option_3: 'The boy read a book.',
        option_4: 'Although tired and hungry.',
        answer: 'The boy read a book.',
        scale: 10,
        interpret: 'Tests understanding of sentence structure.',
        type_question: 'reading'
    }
];

const listeningQuestions = [
    {
        question: 'What time does the speaker say the meeting will start?',
        id_quiz: 1,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747675062/cowbavssxgwrhlhk0dtb.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail8_hqi58x.jpg',
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
        id_quiz: 1,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747634862/xhrpe87aoqx1gvyndsnz.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail7_u7epnz.jpg',
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
        id_quiz: 1,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747586340/bouioeiedeplurxdznmz.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail1_vklyyf.jpg',
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
        id_quiz: 1,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747675062/cowbavssxgwrhlhk0dtb.mp3',
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
        id_quiz: 1,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747634862/xhrpe87aoqx1gvyndsnz.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail8_hqi58x.jpg',
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
        question: 'What problem does the speaker mention?',
        id_quiz: 1,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747586340/bouioeiedeplurxdznmz.mp3',
        link_image: null,
        option_1: 'Late delivery',
        option_2: 'Technical issue',
        option_3: 'Budget cut',
        option_4: 'Staff shortage',
        answer: 'Technical issue',
        scale: 10,
        interpret: 'Tests recognition of specific details.',
        type_question: 'listening'
    },
    {
        question: 'What is the speaker’s suggestion?',
        id_quiz: 1,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747675062/cowbavssxgwrhlhk0dtb.mp3',
        link_image: null,
        option_1: 'Postpone the deadline',
        option_2: 'Hire more staff',
        option_3: 'Use new software',
        option_4: 'Cancel the meeting',
        answer: 'Use new software',
        scale: 10,
        interpret: 'Tests understanding of recommendations.',
        type_question: 'listening'
    },
    {
        question: 'When is the deadline mentioned by the speaker?',
        id_quiz: 1,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747634862/xhrpe87aoqx1gvyndsnz.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail7_u7epnz.jpg',
        option_1: 'Next Monday',
        option_2: 'Tomorrow',
        option_3: 'End of the month',
        option_4: 'Next year',
        answer: 'End of the month',
        scale: 10,
        interpret: 'Tests ability to understand deadlines.',
        type_question: 'listening'
    },
    {
        question: 'Who is the speaker talking to?',
        id_quiz: 1,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747586340/bouioeiedeplurxdznmz.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail4_sv8jxr.jpg',
        option_1: 'A customer',
        option_2: 'A colleague',
        option_3: 'A manager',
        option_4: 'A friend',
        answer: 'A colleague',
        scale: 10,
        interpret: 'Tests understanding of speaker-listener relationship.',
        type_question: 'listening'
    },
    {
        question: 'What does the speaker want to confirm?',
        id_quiz: 1,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747675062/cowbavssxgwrhlhk0dtb.mp3',
        link_image: null,
        option_1: 'The meeting time',
        option_2: 'The project budget',
        option_3: 'The venue address',
        option_4: 'The delivery date',
        answer: 'The meeting time',
        scale: 10,
        interpret: 'Tests attention to detail.',
        type_question: 'listening'
    },
    {
        question: 'What does the speaker want to order?',
        id_quiz: 2,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747634862/xhrpe87aoqx1gvyndsnz.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail4_sv8jxr.jpg',
        option_1: 'A salad',
        option_2: 'A hamburger',
        option_3: 'A pizza',
        option_4: 'A sandwich',
        answer: 'A pizza',
        scale: 10,
        interpret: 'Tests listening for specific information in everyday situations.',
        type_question: 'listening'
    },
    {
        question: 'Where is the speaker going?',
        id_quiz: 2,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747586340/bouioeiedeplurxdznmz.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail7_u7epnz.jpg',
        option_1: 'To the airport',
        option_2: 'To the hospital',
        option_3: 'To the supermarket',
        option_4: 'To school',
        answer: 'To the airport',
        scale: 10,
        interpret: 'Tests ability to identify locations from listening.',
        type_question: 'listening'
    },
    {
        question: 'What time is the meeting?',
        id_quiz: 2,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747675062/cowbavssxgwrhlhk0dtb.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail5_f6t66r.jpg',
        option_1: '9:30 AM',
        option_2: '10:00 AM',
        option_3: '11:15 AM',
        option_4: '2:00 PM',
        answer: '10:00 AM',
        scale: 10,
        interpret: 'Tests listening for time expressions.',
        type_question: 'listening'
    },
    {
        question: 'What is the woman’s favorite hobby?',
        id_quiz: 2,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747634862/xhrpe87aoqx1gvyndsnz.mp3',
        link_image: null,
        option_1: 'Reading',
        option_2: 'Swimming',
        option_3: 'Cooking',
        option_4: 'Painting',
        answer: 'Cooking',
        scale: 10,
        interpret: 'Tests comprehension of personal information.',
        type_question: 'listening'
    },
    {
        question: 'How does the man feel about his job?',
        id_quiz: 2,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747586340/bouioeiedeplurxdznmz.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail6_lpmrs0.jpg',
        option_1: 'He enjoys it',
        option_2: 'He is bored',
        option_3: 'He is stressed',
        option_4: 'He wants to quit',
        answer: 'He enjoys it',
        scale: 10,
        interpret: 'Tests ability to identify opinions or feelings.',
        type_question: 'listening'
    },
    {
        question: 'What is the weather like today?',
        id_quiz: 2,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747675062/cowbavssxgwrhlhk0dtb.mp3',
        link_image: null,
        option_1: 'Sunny',
        option_2: 'Rainy',
        option_3: 'Cloudy',
        option_4: 'Snowy',
        answer: 'Rainy',
        scale: 10,
        interpret: 'Tests listening for weather descriptions.',
        type_question: 'listening'
    },
    {
        question: 'What did the speaker forget to bring?',
        id_quiz: 2,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747634862/xhrpe87aoqx1gvyndsnz.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail6_lpmrs0.jpg',
        option_1: 'Her phone',
        option_2: 'Her keys',
        option_3: 'Her wallet',
        option_4: 'Her bag',
        answer: 'Her keys',
        scale: 10,
        interpret: 'Tests listening for actions and details.',
        type_question: 'listening'
    },
    {
        question: 'Who is the speaker talking to?',
        id_quiz: 2,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747586340/bouioeiedeplurxdznmz.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail5_f6t66r.jpg',
        option_1: 'Her brother',
        option_2: 'Her teacher',
        option_3: 'Her friend',
        option_4: 'Her boss',
        answer: 'Her friend',
        scale: 10,
        interpret: 'Tests ability to identify relationships.',
        type_question: 'listening'
    },
    {
        question: 'What is the speaker planning for the weekend?',
        id_quiz: 2,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747675062/cowbavssxgwrhlhk0dtb.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail6_lpmrs0.jpg',
        option_1: 'Going to a concert',
        option_2: 'Staying home',
        option_3: 'Traveling to the beach',
        option_4: 'Studying for exams',
        answer: 'Going to a concert',
        scale: 10,
        interpret: 'Tests comprehension of future plans.',
        type_question: 'listening'
    },
    {
        question: 'What kind of transportation is being discussed?',
        id_quiz: 2,
        link_mp3: 'https://res.cloudinary.com/dggpj05f2/video/upload/v1747634862/xhrpe87aoqx1gvyndsnz.mp3',
        link_image: 'https://res.cloudinary.com/dggpj05f2/image/upload/v1746986294/thumbnail5_f6t66r.jpg',
        option_1: 'Bus',
        option_2: 'Train',
        option_3: 'Taxi',
        option_4: 'Bicycle',
        answer: 'Train',
        scale: 10,
        interpret: 'Tests vocabulary and listening in travel contexts.',
        type_question: 'listening'
    }
];

const speakingQuestions = [
    {
        question: 'Can you describe your daily routine?',
        id_quiz: 3,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'speaking'
    },
    {
        question: 'What do you usually do on weekends?',
        id_quiz: 3,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'speaking'
    },
    {
        question: 'Talk about your favorite food and why you like it.',
        id_quiz: 3,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'speaking'
    },
    {
        question: 'Describe a place you have visited and enjoyed.',
        id_quiz: 3,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'speaking'
    },
    {
        question: 'What kind of music do you like and why?',
        id_quiz: 3,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'speaking'
    },
    {
        question: 'Do you prefer studying alone or with others? Explain your answer.',
        id_quiz: 3,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'speaking'
    },
    {
        question: 'Talk about a book or movie that you really liked.',
        id_quiz: 3,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'speaking'
    },
    {
        question: 'Describe your ideal holiday destination.',
        id_quiz: 3,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'speaking'
    },
    {
        question: 'What are your goals for learning English?',
        id_quiz: 3,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'speaking'
    },
    {
        question: 'Describe your favorite subject at school and explain why you like it.',
        id_quiz: 3,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'speaking'
    }
];

const writingQuestions = [
    {
        question: 'Write about your favorite season and explain why you like it.',
        id_quiz: 4,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'writing'
    },
    {
        question: 'Describe a person who has influenced your life.',
        id_quiz: 4,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'writing'
    },
    {
        question: 'Write about a memorable event from your childhood.',
        id_quiz: 4,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'writing'
    },
    {
        question: 'Do you prefer living in the city or the countryside? Explain your choice.',
        id_quiz: 4,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'writing'
    },
    {
        question: 'Write a letter to a friend inviting them to your birthday party.',
        id_quiz: 4,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'writing'
    },
    {
        question: 'What are the advantages of learning a second language?',
        id_quiz: 4,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'writing'
    },
    {
        question: 'Describe your dream job and why it suits you.',
        id_quiz: 4,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'writing'
    },
    {
        question: 'Write about a hobby you enjoy and how it benefits you.',
        id_quiz: 4,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'writing'
    },
    {
        question: 'Explain how technology has changed our lives.',
        id_quiz: 4,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'writing'
    },
    {
        question: 'What would you do if you won a million dollars? Explain your plan.',
        id_quiz: 4,
        link_mp3: null,
        link_image: null,
        scale: 10,
        type_question: 'writing'
    }
];

export const seedQuestions = async () => {
    try {
        let questions = []
        for (let i = 1; i <= 200; i++) {
            Array.from({ length: 3 }).map(() => {
                const randomNumber = Math.floor(Math.random() * 30);
                questions.push({
                    ...readingQuestions[randomNumber],
                    id_quiz: i
                })
            });
            Array.from({ length: 2 }).map(() => {
                const randomNumber = Math.floor(Math.random() * 20);
                questions.push({
                    ...listeningQuestions[randomNumber],
                    id_quiz: i
                })
            });
            const randomNumber = Math.floor(Math.random() * 10);
            if (i % 2 === 1) {
                questions.push({
                    ...writingQuestions[randomNumber],
                    id_quiz: i
                });
                questions.push({
                    ...speakingQuestions[randomNumber],
                    id_quiz: i
                });
            }
        }
        await db.Question.bulkCreate(questions);
        console.log('✅ Đã thêm dữ liệu vào bảng quizes')
    } catch (error) {
        console.log(error.message)
    }
}

// seedQuestions().then();

