import dotenv from 'dotenv';
import path from 'path';

const envFile = path.resolve(process.cwd(), '.env');
dotenv.config({ path: envFile });
