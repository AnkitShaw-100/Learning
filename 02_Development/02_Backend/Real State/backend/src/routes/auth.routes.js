

import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();




// Get current user info (name and email only, with user not found check)
router.get("/me-simple", async (req, res) => {
	try {
		const token = req.headers.authorization?.split(" ")[1];
		if (!token) {
			return res.status(401).json({ message: "No token provided" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const user = await User.findById(decoded.id).select("-password");
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		res.json({
			name: user.name,
			email: user.email,
		});
	} catch (err) {
		res.status(401).json({ message: "Invalid token" });
	}
});



router.post("/register", registerUser);
router.post("/login", loginUser);

// Get current user info
router.get("/me", async (req, res) => {
	try {
		const token = req.headers.authorization?.split(" ")[1];
		if (!token) return res.status(401).json({ message: "No token provided" });

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const user = await User.findById(decoded.id).select("-password");
		res.json(user);
	} catch (err) {
		res.status(401).json({ message: "Invalid token" });
	}
});

export default router;
