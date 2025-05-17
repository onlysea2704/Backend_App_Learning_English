import { admin } from "../config/firebase.js";
import db from "../models/index.js";

export const seedUsers = async () => {

    try {
        const results = await admin.auth().listUsers()
        const users = results.users
        const firebaseUserIds = users.map((user) => user.uid)

        firebaseUserIds.map((firebaseUserId) => {
            db.User.create({ firebase_user_id: firebaseUserId, role: 'user' })
        })
        console.log("✅ Đã seed dữ liệu vào bảng user")
    } catch (error) {

    }

}
// seedUsers().then()