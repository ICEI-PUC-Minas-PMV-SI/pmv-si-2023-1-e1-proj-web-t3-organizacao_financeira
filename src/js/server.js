const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.json());

const server = app.listen(3000, () => {
    console.log('Servidor iniciado. Ouvindo na porta 3000');
  });

app.post('/enviar-email', (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    auth: {
      user: "11e61472ed9eab",
      pass: "1e0cc22cf6361f"
    }
  });

  const mailOptions = {
    from: 'economyplus.puc@gmail.com',
    to: email,
    subject: 'Recuperação de senha',
    text: 'Aqui está o link para redefinir sua senha: http://exemplo.com/redefinir-senha'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao enviar o email' });
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).json({ message: 'Email enviado com sucesso' });
    }
  });
});

module.exports = app;
