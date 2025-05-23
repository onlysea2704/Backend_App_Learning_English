import multer from "multer";
import fs from "fs";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import 'dotenv/config';
import path from "path";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_KEY);

const schemaForScore = {
  type: SchemaType.OBJECT,
  properties: {
    score: { type: SchemaType.INTEGER, nullable: false },
    comment: { type: SchemaType.STRING, nullable: false },
    suggest: { type: SchemaType.STRING, nullable: false },
  },
};

const schemaForCreateQuestionListeningReading = {
  type: SchemaType.OBJECT,
  properties: {
    question: { type: SchemaType.STRING, nullable: false },
    option_1: { type: SchemaType.STRING, nullable: false },
    option_2: { type: SchemaType.STRING, nullable: false },
    option_3: { type: SchemaType.STRING, nullable: false },
    option_4: { type: SchemaType.STRING, nullable: false },
    answer: { type: SchemaType.STRING, nullable: false },
    interpret: { type: SchemaType.STRING, nullable: false },
  },
};

const modelAIForScore = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    // responseSchema: schemaForScore,
  },
});

const modelAIForCreateQuestionListeningReading = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    // responseSchema: schemaForCreateQuestionListeningReading,
  },
});

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

export const scoreSpeakingAI = async (topic, pathFile) => {
  if (!pathFile) {
    return;
  }
  const prompt = `
      Tôi có 1 bài nói sau về chủ đề "${topic}":
      Hãy giúp tôi chấm điểm và nhận xét bài nói trên.
      **Yêu cầu đầu ra JSON:**
      Đầu ra của bạn phải là một đối tượng JSON duy nhất có cấu trúc sau:
      {
        "score": number, // Điểm số bài nói trên thang 10. Chấm thật chặt chẽ, khách quan dựa trên ngữ pháp, từ vựng, độ lưu loát và phát âm.
        "comment": string, // Nhận xét tổng thể về nội dung, chỉ ra các lỗi sai phát âm (nếu có) và cách sửa, cùng các lỗi ngữ pháp/từ vựng (bằng tiếng Việt).
        "suggest": string // Phần hoàn thiện lại bài nói trên (bằng tiếng Anh), sửa các lỗi và cải thiện cách diễn đạt để đạt điểm cao hơn.
      }
      **Lưu ý quan trọng:**
      * Đảm bảo đầu ra chỉ là JSON hợp lệ và không chứa bất kỳ văn bản giải thích nào khác ngoài cấu trúc JSON được yêu cầu.`;

  const audioPart = fileToGenerativePart(pathFile, "audio/mp3");
  console.log(1234567)
  try {
    const result = await modelAIForScore.generateContent([prompt, audioPart]);
    const responseText = result.response.text();
    const jsonResponse = JSON.parse(responseText);
    return jsonResponse;
  } catch (error) {
    console.error("Lỗi xử lý AI:", error);
  } finally {
    fs.unlinkSync(pathFile); // Xóa file tạm sau khi xử lý
  }
};

export const ScoreWritingAI = async (topic, response) => {
  // const prompt = `Tôi có 1 bài writing về chủ đề \"${topic}\". Hãy giúp tôi 3 việc sau: đầu tiên là chấm điểm (chấm thật chặt chẽ trên thang 10), thứ 2 là nhận xét (bằng tiếng việt) về nội dung, đưa ra lỗi sai ngữ pháp (nếu có) và thứ 3 là hoàn thiện bài writing trên (bằng tiếng anh) tốt hơn. Dưới đây là nội dung bài viết: ${response}`;
  const prompt = `
        Tôi có một bài viết sau đây về chủ đề "${topic}":
        Đây là nội dung bài viết: ${response}
        Hãy giúp tôi chấm điểm và nhận xét bài viết trên.
        **Yêu cầu đầu ra JSON:**
        Đầu ra của bạn phải là một đối tượng JSON duy nhất có cấu trúc sau:
        {
          "score": number, // Điểm số bài viết trên thang 10. Chấm thật chặt chẽ, khách quan dựa trên các tiêu chí như ngữ pháp, từ vựng, cấu trúc bài viết, tính mạch lạc, và sự phát triển ý.
          "comment": string, // Nhận xét tổng thể về nội dung, cấu trúc, chỉ ra các lỗi sai ngữ pháp, từ vựng, hoặc các điểm yếu về diễn đạt (bằng tiếng Việt).
          "suggest": string // Phần hoàn thiện lại bài viết trên (bằng tiếng Anh), sửa các lỗi và cải thiện cách diễn đạt, cấu trúc, và phát triển ý để đạt điểm cao hơn.
        }
        **Lưu ý quan trọng:**
        * Đảm bảo đầu ra chỉ là JSON hợp lệ và không chứa bất kỳ văn bản giải thích nào khác ngoài cấu trúc JSON được yêu cầu.`;
  const result = await modelAIForScore.generateContent(prompt);
  const responseText = result.response.text();
  const jsonResponse = JSON.parse(responseText);
  return jsonResponse;
}

export const createQuestionReading = async () => {
  const prompt = `
      Tạo 1 câu hỏi ngắn dạng reading part 5 toeic.
      Dữ liệu đầu ra cần ở dạng object (JSON) gồm các trường:
      - question (chuỗi)
      - option_1 (chuỗi)
      - option_2 (chuỗi)
      - option_3 (chuỗi)
      - option_4 (chuỗi)
      - answer (giá trị cụ thể của option_1 đến option_4)
      - interpret (chuỗi giải thích ngắn gọn)
      Đảm bảo đầu ra chỉ là JSON hợp lệ, không kèm theo bất kỳ văn bản giải thích nào khác.`;

  const result = await modelAIForCreateQuestionListeningReading.generateContent(prompt);
  const responseText = result.response.text();
  const jsonResponse = JSON.parse(responseText);
  console.log(jsonResponse);
  return jsonResponse;
}

export const createQuestionListenging = async (pathFile) => {
  const prompt = `
      Tôi có một đoạn hội thoại dạng file mp3 sau đây.
      Hãy giúp tôi tạo một câu hỏi trắc nghiệm dạng listening comprehension (hiểu nội dung) dựa trên đoạn văn bản trên.
      Dữ liệu đầu ra cần ở dạng object (JSON) gồm các trường:
      - question (chuỗi: câu hỏi liên quan đến nội dung đoạn hội thoại)
      - option_1 (chuỗi: lựa chọn A)
      - option_2 (chuỗi: lựa chọn B)
      - option_3 (chuỗi: lựa chọn C)
      - option_4 (chuỗi: lựa chọn D)
      - answer (chuỗi, giá trị cụ thể của option_1 đến option_4)
      - interpret (chuỗi: giải thích tại sao đáp án đó đúng, dựa trên nội dung audio)
      Đảm bảo đầu ra chỉ là JSON hợp lệ, không kèm theo bất kỳ văn bản giải thích nào khác
      Đảm bảo câu hỏi có thể được trả lời trực tiếp từ thông tin trong đoạn văn bản.
      Câu hỏi là tiếng anh`;

  const result = await modelAIForCreateQuestionListeningReading.generateContent(prompt);
  const responseText = result.response.text();
  const jsonResponse = JSON.parse(responseText);
  console.log(jsonResponse);
  return jsonResponse;
}

export const createQuestionSpeaking = async () => {
  const prompt = `
    Hãy tạo một câu hỏi cho phần Speaking trong một bài kiểm tra tiếng Anh như trong đề thi Ielts.
    Câu hỏi cần rõ ràng chủ đề đa dạng trong cuộc sống.
    Đảm bảo đầu ra là một đối tượng JSON duy nhất có cấu trúc:
    {
      "question": "Your generated speaking question here."
    }
    Không kèm theo bất kỳ văn bản giải thích nào khác ngoài JSON.`;
  const result = await modelAIForCreateQuestionListeningReading.generateContent(prompt);
  const responseText = result.response.text();
  const jsonResponse = JSON.parse(responseText);
  console.log(jsonResponse);
  return jsonResponse;
}

export const createQuestionWriting = async () => {
  const prompt = `
      Hãy tạo một câu hỏi duy nhất cho phần Writing trong một bài kiểm tra tiếng Anh.
      Câu hỏi cần yêu cầu người viết phát triển một bài luận ngắn hoặc đoạn văn, thể hiện khả năng lập luận hoặc mô tả.
      Đảm bảo đầu ra là một đối tượng JSON duy nhất có cấu trúc:
      {
        "question": "Your generated writing question here."
      }
      Không kèm theo bất kỳ văn bản giải thích nào khác ngoài JSON.`;
  const result = await modelAIForCreateQuestionListeningReading.generateContent(prompt);
  const responseText = result.response.text();
  const jsonResponse = JSON.parse(responseText);
  console.log(jsonResponse);
  return jsonResponse;
}
