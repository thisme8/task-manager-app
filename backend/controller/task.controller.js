import { readTasks, writeTasks } from "../utils/fileHandler.js";
import { v4 as uuidv4 } from "uuid";

//  Getting all tasks
export const getAllTasks = async (req, res, next) => {
  try {
    // Reading tasks from the file using the "readTasks" util function
    const tasks = await readTasks();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// Creating a new task
export const createTask = async (req, res, next) => {
  try {
    // separating each field from the request
    const { title, description, priority, dueDate } = req.body;

    const tasks = await readTasks();

    // Assigning the following data to any new task
    const newTask = {
      id: uuidv4(),
      title,
      description: description || "",
      priority: priority || "medium",
      dueDate: dueDate || null,
      createdAt: new Date().toISOString(),
    };

    // Adding new task to task list
    tasks.push(newTask);
    // using "writeTasks" utl function to write
    await writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

// Deleting a task by id
export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    let tasks = await readTasks();

    // Checking with given id task exists
    const taskExists = tasks.some((task) => task.id === id);
    if (!taskExists) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Filtering out the task with the matching ID
    tasks = tasks.filter((task) => task.id !== id);

    // task list after deleted task
    await writeTasks(tasks);

    res.status(200).json({ message: "Task deleted successfully" }); // <-- Needed
  } catch (error) {
    next(error);
  }
};
