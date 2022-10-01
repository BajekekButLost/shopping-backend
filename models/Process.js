const mongoose = require("mongoose")

const Process = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model("Process", Process)