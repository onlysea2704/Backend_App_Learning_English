import { admin } from "../config/firebase.js";
import db from "../models/index.js";

export const checkAdminRole = async (req, res, next) => {

  try {

    const token = req.headers.authorization.split(" ")[1]
    // Xác thực ID Token bằng Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;
    // Lấy user từ database
    const user = await db.User.findOne({ where: { firebase_user_id: uid } })

    if (!user) return res.status(404).send("User not found");

    if (user.role !== 'admin') {
      return res.status(403).send("Forbidden");
    }
    req.user = user;
    next();
  } catch (error) {
    console.log('error:', error.message);
    res.status(401).send("Unauthorized");
  }
};

export const checkUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    // Xác thực ID Token bằng Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;
    const user = await db.User.findOne({ where: { firebase_user_id: uid } })
    if (!user) return res.status(404).send("User not found");

    req.user = user;
    next();
  } catch (error) {
    res.status(200).send({ status: "Unauthorized" });
  }
};
