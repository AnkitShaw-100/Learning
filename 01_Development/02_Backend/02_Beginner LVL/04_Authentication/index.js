// Work to do :
// 1. User registration (POST /signup)
// 2. User login (POST /login)
// 3. Fetch all users (GET /users)
// 4. Fetch user by ID (GET /users/:id)
// 5. JWT-based authentication so protected routes can only be accessed by logged-in users.

// 1. Install Dependencies - Done
// 2. Create .env file - Done
// 3. Connect to MongoDB - Done
// 4. Create a User Schema - Done

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const auth = require("./middleware/auth");

const app = express();
app.use(express.json());

//Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error", err));

// Sign Up
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All filed are required" });
    }

    // Check if User exsists
    const exsistingUser = await User.findOne({ email });
    if (exsistingUser)
      return res.status(400).json({ error: "Email alredy in use." });

    // Hashing the Password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered Succeesfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Email and Password are required" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ error: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid email or password." });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
});

// Get all users (only logged-in users)
app.get("/users", auth, async (req, res) => {
  try {
    const users = await User.find().select("-password"); // exclude password
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Get single user by ID (only logged-in users)
app.get("/users/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
