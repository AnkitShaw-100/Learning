const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const ownerSchema = new mongoose.Schema({
  fullname: { type: String, required: true, minLength: 3, trim: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  products: { type: Array, default: [] },
  picture: { type: String },
  gstin: { type: String },
});

module.exports = mongoose.model("User", ownerSchema);
