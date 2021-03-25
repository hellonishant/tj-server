const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const middlewares = require('./middleware');
const api = require('./api');
const books = require('./api/books');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.set('views', path.join(__dirname, 'assets'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', api);
app.use('/book', books);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
