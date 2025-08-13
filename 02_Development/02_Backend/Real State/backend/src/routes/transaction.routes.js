import express from "express";
import { protect } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import {
  createTransaction,
  updateTransactionStatus,
  getMyTransactions
} from "../controllers/transaction.controller.js";

const router = express.Router();

// Buyer creates a buy request
router.post("/:listingId", protect, authorize("buyer"), createTransaction);

// Seller/Admin updates status
router.put("/:id", protect, authorize("seller", "admin"), updateTransactionStatus);

// Get my transactions
router.get("/", protect, getMyTransactions);

export default router;
