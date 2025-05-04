import db from "../models/index.js";

export const register = async (req, res) => {
  try {
    const user = req.body;

    // 1. Tạo user trước
    const userCreated = await db.User.create({
      firebase_user_id: user.firebase_user_id,
      role: "user",
    });

    // 2. Tạo student và liên kết với user vừa tạo
    const studentCreated = await db.Student.create({
      name: user.name,
      age: user.age,
      gender: user.gender,
      phone: user.phone,
      email: user.email,
      link_image: user.link_image,
      id_user: userCreated.id, // ✅ dùng id vừa tạo
    });

    return res.json({ status: true, student: studentCreated });
  } catch (error) {
    console.error("Đăng ký thất bại:", error);
    return res.status(500).json({ status: false, error: error.message });
  }
};
