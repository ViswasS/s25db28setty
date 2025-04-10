const mongoose = require("mongoose")
const HologramsSchema= mongoose.Schema({
origin: String,
tone: String,
clarity: Number});
module.exports = mongoose.model("Holograms",
HologramsSchema)