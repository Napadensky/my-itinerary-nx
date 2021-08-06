const { Schema, model } = require('mongoose');

const UserModel = Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  userPic: { type: String, required: true },
  country: { type: String, required: true },
})

module.exports = model('user', UserModel);
