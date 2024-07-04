const express = require('express');
const bodyParser = require('body-parser');
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/generate-secret', (req, res) => {
  const secret = speakeasy.generateSecret({ length: 20 });
  qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to generate QR code' });
    }
    res.json({ secret: secret.base32, qrCode: data_url });
  });
});

app.post('/verify-token', (req, res) => {
  const { token, secret } = req.body;
  const verified = speakeasy.totp.verify({
    secret,
    encoding: 'base32',
    token
  });
  res.json({ verified });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
