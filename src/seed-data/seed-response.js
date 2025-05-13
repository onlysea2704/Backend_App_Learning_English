import db from "../models/index.js";

const responsesData = [
    {
      id_student: 49,
      id_question: 101,
      link_mp3: 'https://example.com/audio1.mp3',
      response: 'This is the student\'s response 1.',
      type_response: 'speaking',
      score: 85,
      comment: 'Good pronunciation.',
      id_result: 1
    },
    {
      id_student: 49,
      id_question: 102,
      link_mp3: 'https://example.com/audio2.mp3',
      response: 'This is the student\'s response 2.',
      type_response: 'writing',
      score: 70,
      comment: 'Needs improvement in grammar.',
      id_result: 1
    },
    {
      id_student: 49,
      id_question: 103,
      link_mp3: 'https://example.com/audio3.mp3',
      response: 'This is the student\'s response 3.',
      type_response: 'speaking',
      score: 92,
      comment: 'Excellent clarity.',
      id_result: 1
    },
    {
      id_student: 49,
      id_question: 104,
      link_mp3: 'https://example.com/audio4.mp3',
      response: 'This is the student\'s response 4.',
      type_response: 'writing',
      score: 60,
      comment: 'Short answer.',
      id_result: 2
    },
    {
      id_student: 49,
      id_question: 105,
      link_mp3: 'https://example.com/audio5.mp3',
      response: 'This is the student\'s response 5.',
      type_response: 'speaking',
      score: 78,
      comment: 'Some hesitation.',
      id_result: 3
    },
    {
      id_student: 49,
      id_question: 106,
      link_mp3: 'https://example.com/audio6.mp3',
      response: 'This is the student\'s response 6.',
      type_response: 'writing',
      score: 88,
      comment: 'Well structured.',
      id_result: 1
    },
    {
      id_student: 49,
      id_question: 107,
      link_mp3: 'https://example.com/audio7.mp3',
      response: 'This is the student\'s response 7.',
      type_response: 'speaking',
      score: 81,
      comment: 'Good pace.',
      id_result: 2
    },
    {
      id_student: 49,
      id_question: 108,
      link_mp3: 'https://example.com/audio8.mp3',
      response: 'This is the student\'s response 8.',
      type_response: 'writing',
      score: 90,
      comment: 'Very descriptive.',
      id_result: 2
    },
    {
      id_student: 49,
      id_question: 109,
      link_mp3: 'https://example.com/audio9.mp3',
      response: 'This is the student\'s response 9.',
      type_response: 'speaking',
      score: 76,
      comment: 'Lacks confidence.',
      id_result: 3
    },
    {
      id_student: 49,
      id_question: 110,
      link_mp3: 'https://example.com/audio10.mp3',
      response: 'This is the student\'s response 10.',
      type_response: 'writing',
      score: 84,
      comment: 'Nice vocabulary usage.',
      id_result: 2
    }
  ];
  
export const seedResponses = async() => {
    try {
        await db.Response.bulkCreate(responsesData)
        console.log('✅ Đã seed dữ liệu vào bảng responses')
    } catch (error) {
        console.log('', error.message)
        console.log('❌ Lỗi khi seed dữ liệu vào bảng responses')
    }
}

seedResponses().then()
