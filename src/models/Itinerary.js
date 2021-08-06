const { Schema, model, Types } = require('mongoose');

const ItineraryModel = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  activities: [{ name: String, img: String }],
  authorName: { type: String, required: true },
  authorPic: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  likes: { type: Number, required: true },
  hashtags: { type: [String], required: true },
  comments: [{ userId: { type: Types.ObjectId , ref: 'user' }, text: String, userName: String, userPic: String }],
  usersLike: { type: [String], required: true },
  cityId: { type: Types.ObjectId, ref: 'city' },
})

module.exports = model('itinerary', ItineraryModel);