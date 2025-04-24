const mongoose = require("mongoose");

const HologramsSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: [true, "Origin is required"],
    minlength: [3, "Origin must be at least 3 characters long"],
  },
  tone: {
    type: String,
    required: [true, "Tone is required"],
    minlength: [2, "Tone must be at least 2 characters long"],
  },
  clarity: {
    type: Number,
    required: [true, "Clarity is required"],
    min: [1, "Clarity must be at least 1"],
    max: [10, "Clarity cannot be more than 10"], // Optional, adds range
  },
});

module.exports = mongoose.model("Holograms", HologramsSchema);
