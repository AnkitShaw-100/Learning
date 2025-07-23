const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true, unique: true },
  price: { type: Number, required: true, min: 0 },
  discount: { type: Number, default: 0, min: 0, max: 100 },
  bgcolor: { type: String, default: "#ffffff" },
  panelColor: { type: String, default: "#f0f0f0" },
  textcolor: { type: String, default: "#000000" },
  description: { type: String, trim: true },
  category: { type: String, trim: true },
  stock: { type: Number, default: 0, min: 0 },
});

module.exports = mongoose.models("Product", productSchema);
