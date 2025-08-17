import express from "express";
import { protect } from "../middleware/auth.js";
import { sendMessage, getMessages } from "../controllers/message.controller.js";

const router = express.Router();

// Buyer sends message to seller
router.post("/", protect, sendMessage);

// Buyer or seller fetches messages for a property
router.get("/", protect, getMessages);

export default router;
