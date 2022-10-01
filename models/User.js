const mongoose = require("mongoose")
const Review = require("../structure/Review")

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  isSeller: {
    type: Boolean,
    default: false
  },
  reviews: {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model("User", User)