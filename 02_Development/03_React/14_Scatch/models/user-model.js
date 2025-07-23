const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true, minLength: 3, trim: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  cart: { type: Array, default: [] },
  isadmin: { type: Boolean, default: false },
  orders: { type: Array, default: [] },
  contact: { type: Number },
  picture: { type: String },
});

module.exports = mongoose.model("User", userSchema);
