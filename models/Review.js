const mongoose = require("mongoose")
const User = require("../structure/User")
const User = require("../structure/Product")

const Review = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  text: String,
  stars: {
    type: Number,
    required: true
  },
  creator: {
    type: User,
    required: true
  },
  product: Product,
  createdAt: {
    type: Date,
    required: true
  },
  reply: String
})

module.exports = mongoose.model("Review", Review)