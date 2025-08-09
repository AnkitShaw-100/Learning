// const express = require("express");
// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON
// app.use(express.json());

// // In-memory notes array
// let notes = [];
// let idCounter = 1;

// // Creating a note
// app.post("/notes", (req, res) => {
//   const { title, content } = req.body;

//   if (!title || !content) {
//     return res
//       .status(400)
//       .json({ error: "Title and content both are required." });
//   }

//   const newNote = {
//     id: idCounter++,
//     title,
//     content,
//   };

//   notes.push(newNote);
//   res.status(201).json(newNote);
// });

// // Get the node by id
// app.get("/notes/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const note = notes.find((n) => n.id === id);

//   if (!note) {
//     return res.status(404).json({ error: "Note not found." });
//   }
//   res.json(note);
// });

// // Update the note by id
// app.put("/notes/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const { title, content } = req.body;
//   const note = notes.find((n) => n.id === id);

//   if (!note) {
//     return res.status(404).json({ error: "Note not found" });
//   }

//   if (title) note.title = title;
//   if (content) note.content = content;

//   res.json(note);
// });

// // Delete the note
// app.delete("/notes/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const index = notes.findIndex((n) => n.id === id);

//   if (index === -1) {
//     return res.status(404).json({ error: "Note not found" });
//   }

//   notes.splice(index, 1);
//   res.json({ message: "Note deleted Successfully" });
// });

// // Server
// app.listen(PORT, () => {
//   console.log(`Notes API running at http://localhost:${PORT}`);
// });
