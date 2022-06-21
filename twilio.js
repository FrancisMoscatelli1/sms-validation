import twilio from 'twilio';
import { accountSid, authToken } from './config.js';

const client = new twilio(accountSid, authToken);

export default client;
