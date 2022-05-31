const mongoose = require("mongoose");

const TextSchema = mongoose.Schema({
  title: String,
  text: String,
});
module.exports = mongoose.model("Text", TextSchema);
