import express from "express";
import { protect } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import {
  createListing,
  getListings,
  getListing,
  updateListing,
  deleteListing
} from "../controllers/listing.controller.js";

const router = express.Router();

// Public: Anyone can view listings
router.get("/", getListings);
router.get("/:id", getListing);

// Private: Sellers & Admins can create listings
router.post("/", protect, authorize("seller", "admin"), createListing);

// Private: Only listing owner (seller) or admin can update/delete
router.put("/:id", protect, authorize("seller", "admin"), updateListing);
router.delete("/:id", protect, authorize("seller", "admin"), deleteListing);

export default router;
