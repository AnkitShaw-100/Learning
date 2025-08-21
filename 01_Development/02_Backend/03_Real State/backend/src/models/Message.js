import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  property: { type: mongoose.Schema.Types.ObjectId, ref: "Listing", required: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Message", messageSchema);
