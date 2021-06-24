// Require modules
const mongoose = require("mongoose");

// Create schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  married: {
    type: Boolean,
  },
});

module.exports = mongoose.model("User", userSchema);
