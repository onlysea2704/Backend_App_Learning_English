import db from "../models/index.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs"

export const register = async (req, res) => {
  try {
    const userInform = JSON.parse(req.body.userInform);
    let url
    if (req.file) {
      const filePath = req.file.path;
      const result = await cloudinary.uploader.upload(filePath, {
        resource_type: 'image'
      });
      url = result.url
      fs.unlinkSync(filePath);
    }

    // 1. Tạo user trước
    const userCreated = await db.User.create({
      firebase_user_id: userInform.firebase_user_id,
      role: "user",
    });

    // 2. Tạo student và liên kết với user vừa tạo
    const studentCreated = await db.Student.create({
      name: userInform.name,
      age: userInform.age,
      gender: userInform.gender,
      phone: userInform.phone,
      email: userInform.email,
      link_image: url || '',
      id_user: userCreated.id, // ✅ dùng id vừa tạo
    });

    return res.json({ status: true, student: studentCreated });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: false, error: error.message });
  }
};
