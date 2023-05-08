const express = require('express');
const cors = require('cors');
const morganLogger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const booksRouter = require('./routes/api/books');
// const contactsRouter = require('./routes/api/contacts');
const { booksRouter, contactsRouter } = require('./routes/api');

dotenv.config();
const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Connection to the database was successful');
    app.listen(8080, () => {
      console.log('Server is run on PORT: 8080');
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(morganLogger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/books', booksRouter);
app.use('/api/contacts', contactsRouter);
// app.use('/api/contacts', booksRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = err.message } = err;
  res.status(status).json({ message });
});

module.exports = app;
