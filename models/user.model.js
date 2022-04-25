const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
