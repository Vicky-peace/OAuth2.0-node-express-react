import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();


const {PORT, GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,GOOGLE_OAUTH_URL} = process.env;