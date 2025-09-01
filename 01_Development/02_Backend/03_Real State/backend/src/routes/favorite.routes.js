import express from "express";
import { protect, authorize } from "../middleware/auth.js";
import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from "../controllers/favorite.controller.js";

const router = express.Router();

// Only buyers & admins can manage favorites
router.post("/:listingId", protect, authorize("buyer", "admin"), addFavorite);
router.delete(
  "/:listingId",
  protect,
  authorize("buyer", "admin"),
  removeFavorite
);
router.get("/", protect, authorize("buyer", "admin"), getFavorites);

export default router;
