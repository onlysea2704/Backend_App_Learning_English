import admin from "firebase-admin";

// Kiểm tra xem Firebase đã được khởi tạo chưa
if (!admin.apps.length) {
  try {
    // Kiểm tra biến môi trường
    if (!process.env.FIREBASE_CONFIG_JSON) {
      throw new Error('FIREBASE_CONFIG_JSON environment variable is not set');
    }

    // Parse service account từ biến môi trường
    const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG_JSON);
    console.log(serviceAccount);
    // Validate các field bắt buộc
    const requiredFields = ['type', 'project_id', 'private_key', 'client_email'];
    for (const field of requiredFields) {
      if (!serviceAccount[field]) {
        throw new Error(`Missing required field: ${field} in Firebase service account`);
      }
    }

    // Khởi tạo Firebase Admin
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      // Có thể thêm databaseURL nếu sử dụng Realtime Database
      // databaseURL: `https://${serviceAccount.project_id}-default-rtdb.firebaseio.com`
    });

    console.log('Firebase Admin initialized successfully');
  } catch (error) {
    console.error('Firebase initialization error:', error.message);
    throw error;
  }
}

// Export các service Firebase cần thiết
export const auth = admin.auth();
export const firestore = admin.firestore();
export const storage = admin.storage();
export { admin };

// Export default admin instance
export default admin;