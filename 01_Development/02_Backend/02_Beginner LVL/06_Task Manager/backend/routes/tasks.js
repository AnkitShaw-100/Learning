import express from "express";
import Task from "../models/Task.js";
import auth from "../middlewares/auth.js";
import { validateBody } from "../middlewares/validate.js";
import { createTaskSchema } from "../validators/taskValidator.js";

const router = express.Router();

// Add task
router.post("/", auth, validateBody(createTaskSchema), async (req, res) => {
  try {
    const { category, date, description } = req.body;

    const task = new Task({
      userId: req.user.id,
      category,
      date,
      description,
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a task
router.put("/:id", auth, async (req, res) => {
  try {
    const { category, date, description } = req.body;

    let task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Update fields if provided
    task.category = category || task.category;
    task.date = date || task.date;
    task.description = description || task.description;

    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a task
router.delete("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
