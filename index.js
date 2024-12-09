const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', (req, res) => {
  const { fullName, phone, email, password, captchaInput, captcha } = req.body;

  if (captchaInput !== captcha) {
    return res.status(400).send('Ошибка: капча введена неверно.');
  }

  const userData = `ФИО: ${fullName}, Телефон: ${phone}, Почта: ${email}, Пароль: ${password}\n`;

  fs.appendFile('users.txt', userData, (err) => {
    if (err) {
      console.error('Ошибка записи в файл:', err);
      return res.status(500).send('Ошибка сервера.');
    }
    res.send('Данные успешно сохранены.');
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
