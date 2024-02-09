const express = require('express');
const cors = require('cors');

const startServer = (port, location) => {
  const app = express();

  app.use(
    cors({
      origin: '*',
      methods: 'GET, POST, OPTIONS',
      credentials: true,
      optionsSuccessStatus: 200,
    }),
  );

  app.post('/endpoint', (req, res) => {
    res.status(302);
    res.header('Location', `http://localhost:4000${location}`);
    res.header('Access-Control-Allow-Origin', '*'); // Добавленная строка
    res.header('Access-Control-Allow-Credentials', 'true'); // Добавленная строка
    res.end();
  });

  app.post('/', (req, res) => {
    res.status(200);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true'); // Добавленная строка
    res.end();
  });

  app.get('/', (req, res) => {
    res.status(200);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true'); // Добавленная строка
    res.end();
  });

  app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
  });
};

const location = process.argv[2];
const port = process.argv[3] || 4000;

if (!location) {
  console.error(
    'Не указано значение Location. Пример: node server.js /new-location.json [port]',
  );
} else {
  startServer(port, location);
}
