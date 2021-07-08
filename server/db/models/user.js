const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
}, { _id: false });

const User = mongoose.model('User', userSchema);

module.exports = User;
