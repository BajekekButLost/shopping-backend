const mongoose = require("mongoose")
const User = require("../structure/User")

const File = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  user: {
    type: User,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  reviews: {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model("Product", File)