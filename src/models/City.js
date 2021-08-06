const { Schema, model } = require('mongoose');

const CityModel = Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  img: { type: String, required: true },
})

module.exports = model('city', CityModel);