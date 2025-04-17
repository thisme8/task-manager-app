import express from "express";

// Middleware to validate task data before creation
import validateTaskData from "../middleware/task.middleware.js";

// importing the controllers from task.controller.js for task handling
import {
  createTask,
  deleteTask,
  getAllTasks,
} from "../controller/task.controller.js";

// Initialize a new router for task-related routes
const taskRoutes = express.Router();

// routing for the task actions with router as taskRoutes
taskRoutes.get("/", getAllTasks);
taskRoutes.post("/", validateTaskData, createTask);
taskRoutes.delete("/:id", deleteTask);

export default taskRoutes;
