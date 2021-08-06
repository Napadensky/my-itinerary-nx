const { Schema, model } = require('mongoose');

const ItineraryModel = Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  activities: [{ name: String, img: String }],
  authorName: { type: String, required: true },
  authorPic: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  likes: { type: Number, required: true },
  hashtags: { type: [String], required: true },
  comments: [ { userId: { type: ObjectID, ref: 'user' }, text: String, userName: String, userPic: String } ],
  usersLike: { type: [String], required: true },
  cityId: { type: ObjectID, ref: 'city' },
})

module.exports = model('itinerary', ItineraryModel);