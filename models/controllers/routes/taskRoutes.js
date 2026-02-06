const express = require("express");
const {
  addTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const router = express.Router();

router.post("/", addTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
