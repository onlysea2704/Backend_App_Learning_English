// import admin from "firebase-admin";
import { admin } from "../config/firebase.js";
import db from "../models/index.js";

export const checkAdminRole = async (req, res, next) => {

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: Token missing' });
  }

  const token = req.headers.authorization.split(" ")[1]
  try {
    // Xác thực ID Token bằng Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;

    // Lấy user từ database
    const [user] = await db.findOne({ where: { firebase_user_id: uid } })

    console.log(user)
    if (!user) return res.status(404).send("User not found");

    if (user[0].role !== requiredRole) {
      return res.status(403).send("Forbidden");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
};

export const checkUser = async (req, res, next) => {

  const token = req.headers.authorization.split(" ")[1]
  
  const decodedToken = await admin.auth().verifyIdToken(token);
  const uid = decodedToken.uid;
  console.log('****************')
  console.log(uid)

  try {
    // Xác thực ID Token bằng Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;

    // Lấy user từ database
    const user = await db.User.findOne({ where: { firebase_user_id: uid } })

    console.log(user)
    if (!user) return res.status(404).send("User not found");

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
};
