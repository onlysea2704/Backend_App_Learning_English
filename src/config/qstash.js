import dotenv from 'dotenv';
import { Client } from '@upstash/qstash';

dotenv.config();

export const qstash = new Client({
    token: process.env.QSTASH_TOKEN,
});