const Task = require("../models/Task");

// Add task
exports.addTask = async (req, res) => {
  const { title } = req.body;
  const task = await Task.create({ title });
  res.status(201).json(task);
};

// Get all tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// Update task
exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
};

// Delete task
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted successfully" });
};
