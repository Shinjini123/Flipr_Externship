const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // Assuming you have a Task model for interacting with the database

// Create a new task
router.post('/', async (req, res) => {
  try {
    const { description, type, startTime, timeTaken } = req.body;
    const newTask = new Task({
      description,
      type,
      startTime,
      timeTaken,
    });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
