import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    from: { type: String, required: true }, // sender's email
    to: { type: String, required: true }, // recipient's email
    subject: { type: String, required: true },
    body: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Email = mongoose.model("Email", emailSchema);
export default Email;
