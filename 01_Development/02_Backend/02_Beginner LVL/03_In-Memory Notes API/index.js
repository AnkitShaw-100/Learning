// 1. Install Dependencies - Done
// 2. Create .env file - Done
// 3. Connect to MongoDB - Done
// 4. Create a Note Schema - Done - Schema are made and stored in models folder and in seperate file

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

//Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error", err));

// Importing Schema
const Note = require("./models/Note");

// Creating a note
app.post("/notes", async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required." });
    }

    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: "Filed to create note." });
  }
});

// Get the node by id
app.get("/notes/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        error: "Note not found",
      });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch note" });
  }
});

// Update the note by id
app.put("/notes/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({
        error: "Note not found",
      });
    }
    res.json(note);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update note" });
  }
});

// Delete the note
app.delete("/notes/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Note" });
  }
});

// Get all notes sorted by latest
app.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

// Server
app.listen(PORT, () => {
  console.log(`Notes API running at http://localhost:${PORT}`);
});
