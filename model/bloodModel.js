const mongoose = require("mongoose");

const BloodSchema = new mongoose.Schema({
    group: {
      type: String,
      required: [true]
    },
    count: {
      type: Number,
      required: [true]
    },
  });
  
  module.exports = mongoose.model("Blood", BloodSchema);