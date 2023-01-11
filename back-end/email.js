const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-email', (req, res) => {
  const { nom, email, nomEntreprise, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'monadresse@example.com',
      pass: 'monmotdepasse'
    }
  });

  const mailOptions = {
    from: 'monadresse@example.com',
    to: 'destinataire@example.com',
    subject: `Nouveau message de ${nom}`,
    text: `De : ${nom} (${email})\nEntreprise : ${nomEntreprise}\n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      console.log('Email envoyé : ' + info.response);
      res.send('Email envoyé');
    }
  });
});

module.exports = router;
