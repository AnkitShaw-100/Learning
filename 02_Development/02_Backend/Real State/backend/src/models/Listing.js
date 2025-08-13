import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  bedrooms: { type: Number, default: 0 },
  bathrooms: { type: Number, default: 0 },
  location: { type: String, required: true },
  propertyType: { type: String, enum: ["apartment", "house", "land", "villa", "office"], default: "house" },
  status: { type: String, enum: ["available", "sold"], default: "available" },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export default mongoose.model("Listing", listingSchema);
