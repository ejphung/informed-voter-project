const express = require('express');
const path = require('path');
const router = require('./router');
const db = require('./db');

const app = express();

const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
