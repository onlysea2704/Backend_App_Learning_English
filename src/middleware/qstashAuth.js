import { Receiver } from "@upstash/qstash";
import "dotenv/config";

const receiver = new Receiver({
  currentSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY, // Lấy từ env
  nextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY, // (Tùy chọn) cho key tiếp theo
});

export const qstashAuth = async (req, res, next) => {
  try {
    const signature = req.headers["upstash-signature"];
    if (!signature) {
      return res.status(400).json({ error: "Missing signature" });
    }

    // Xác thực request
    await receiver.verify({
      signature,
      body: JSON.stringify(req.body),
    });

    console.log("✅ Request is valid");
    next(); // Cho phép request tiếp tục
  } catch (error) {
    console.error("❌ Invalid request:", error.message);
    return res.status(401).json({ error: "Invalid signature" });
  }
};
