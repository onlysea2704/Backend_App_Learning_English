import admin from "firebase-admin";

// Kiểm tra xem Firebase đã được khởi tạo chưa
if (!admin.apps.length) {
    let serviceAccount
    try {
        if (process.env.FIREBASE_PROJECT_ID &&
            process.env.FIREBASE_PRIVATE_KEY &&
            process.env.FIREBASE_CLIENT_EMAIL) {
            serviceAccount = {
                type: "service_account",
                project_id: process.env.FIREBASE_PROJECT_ID,
                private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
                private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                client_email: process.env.FIREBASE_CLIENT_EMAIL,
                client_id: process.env.FIREBASE_CLIENT_ID,
                auth_uri: "https://accounts.google.com/o/oauth2/auth",
                token_uri: "https://oauth2.googleapis.com/token",
                auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.FIREBASE_CLIENT_EMAIL}`,
                universe_domain: "googleapis.com"
            };
        } else {
            throw new Error('Firebase configuration not found. Please set FIREBASE_CONFIG_JSON or individual Firebase environment variables.');
        }

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
        })
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