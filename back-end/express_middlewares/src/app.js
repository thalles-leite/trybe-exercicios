const express = require('express');
const morgan = require('morgan');

const app = express();
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');

app.use(express.json());
app.use(morgan('dev'));

app.post(
  '/activities',
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,

  (_req, res) => {
    res.status(201).json({ 'message:': 'Atividade cadastrada com sucesso.' });
  },
);

module.exports = app;
