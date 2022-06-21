import dotenv from 'dotenv';
dotenv.config();

export const TwilioServiceSID = process.env.TWILIO_SERVICE_SID;
export const accountSid = process.env.TWILIO_ACCOUNT_SID;
export const authToken = process.env.TWILIO_AUTH_TOKEN;
