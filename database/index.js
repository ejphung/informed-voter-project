const mongoose = require('mongoose');
const config = require('./configdb');

mongoose.connect(
  `mongodb://localhost:27017/ivp?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: config.user,
    pass: config.pass,
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('connected to mongodb!');
});

module.exports = db;
