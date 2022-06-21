import express from 'express';
import client from './twilio.js';
import { TwilioServiceSID } from './config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/createVerificationSMS', (req, res) => {
  const { areaCode, phoneNumber } = req.body;
  console.log(areaCode, phoneNumber);
  client.verify
    .services(TwilioServiceSID)
    .verifications.create({ to: `+${areaCode}${phoneNumber}`, channel: 'sms' })
    .then((verification) => res.send(verification.status))
    .catch((e) => {
      res.send(e);
    });
});

app.get('/verifySMS', (req, res) => {
  const { areaCode, phoneNumber, code } = req.body;
  client.verify
    .services(TwilioServiceSID)
    .verificationChecks.create({ to: `+${areaCode}${phoneNumber}`, code })
    .then((verification_check) => res.send(verification_check.status))
    .catch((e) => {
      res.send(e);
    });
});
// respuestas
// pending
// approved

app.listen(3000, () => {
  console.log('listening on port 3000');
});
