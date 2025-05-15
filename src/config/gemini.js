import multer from "multer";
import fs from "fs";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import 'dotenv/config';
import path from "path";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_KEY);

const schema = {
  type: SchemaType.OBJECT,
  properties: {
    score: { type: SchemaType.INTEGER, nullable: false },
    comment: { type: SchemaType.STRING, nullable: false },
    suggest: { type: SchemaType.STRING, nullable: false },
  },
};

const modelAI = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: schema,
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
    return res.status(400).json({ error: "No file uploaded" });
  }

  topic = topic || "Describe a difficult decision you had to make";
  const prompt = `Tôi có 1 file speaking sau về chủ đề \"${topic}\". Hãy giúp tôi 3 việc sau: đầu tiên là chấm điểm, thứ 2 là nhận xét (bằng tiếng việt) về nội dung, đưa ra lỗi sai phát âm (nếu có) và thứ 3 là hoàn thiện bài speaking trên (bằng tiếng anh) tốt hơn`;

  const audioPart = fileToGenerativePart(pathFile, "audio/mp3");

  try {
    const result = await modelAI.generateContent([prompt, audioPart]);
    const responseText = result.response.text();
    const jsonResponse = JSON.parse(responseText);
    console.log(jsonResponse)
    return jsonResponse;
  } catch (error) {
    console.error("Lỗi xử lý AI:", error);
  } finally {
    fs.unlinkSync(pathFile); // Xóa file tạm sau khi xử lý
  }
};

export const ScoreWritingAI = async (topic, response) => {
    const prompt = `Tôi có 1 bài writing về chủ đề \"${topic}\". Hãy giúp tôi 3 việc sau: đầu tiên là chấm điểm, thứ 2 là nhận xét (bằng tiếng việt) về nội dung, đưa ra lỗi sai ngữ pháp (nếu có) và thứ 3 là hoàn thiện bài writing trên (bằng tiếng anh) tốt hơn. Dưới đây là nội dung bài viết: ${response}`;
    const result = await modelAI.generateContent(prompt);
    const responseText = result.response.text();
    const jsonResponse = JSON.parse(responseText);
    console.log(jsonResponse);
    return jsonResponse;
}
