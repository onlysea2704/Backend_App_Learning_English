import dotenv from "dotenv";

dotenv.config();

// ZALO INFO
export const configZaloPay = {
    appid: process.env.ZALOPAY_APP_ID,
    key1: process.env.ZALOPAY_KEY_1,
    key2: process.env.ZALOPAY_KEY_2,
    endpoint: process.env.ZALOPAY_END_POINT
};