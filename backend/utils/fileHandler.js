import { promises as fs } from "fs"; //for file operations with promises
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid"; // to generate unique identifiers for tasks

// defining paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, "..", "data");
const DATA_FILE = path.join(DATA_DIR, "tasks.json");

// Ensures data directory exists(create if it doesn't)
export const ensureDataDirExists = async () => {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    if (error.code !== "EEXIST") {
      console.error("Error creating data directory:", error);
      throw error;
    }
  }
};

// Reading tasks from JSON file
export const readTasks = async () => {
  try {
    await ensureDataDirExists();
    const data = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      // If file doesn't exist, return empty array
      return [];
    }
    console.error("Error reading tasks:", error);
    throw new Error(`Failed to read tasks: ${error.message}`);
  }
};

// Writes tasks to the JSON file
export const writeTasks = async (tasks) => {
  try {
    await ensureDataDirExists();
    await fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing tasks:", error);
    throw new Error(`Failed to write tasks: ${error.message}`);
  }
};

// Initialize data directory and file with sample data (if needed)
export const initializeDataDir = async () => {
  try {
    await ensureDataDirExists();

    try {
      // Checks if the tasks file already exists
      await fs.access(DATA_FILE);
      console.log("Data file exists");
    } catch (error) {
      if (error.code === "ENOENT") {
        console.log("Creating initial data file");
        const initialTasks = [
          {
            id: uuidv4(), // Generates a unique ID for the task
            title: "Complete project proposal",
            description: "Draft the proposal for the new client project",
            priority: "high",
            dueDate: "2025-04-20",
            createdAt: new Date().toISOString(),
          },
          {
            id: uuidv4(), // Generates a unique ID for the task
            title: "Review team progress",
            description: "Check in with team members on their weekly tasks",
            priority: "medium",
            dueDate: "2025-04-15",
            createdAt: new Date().toISOString(),
          },
          {
            id: uuidv4(), // Generates a unique ID for the task
            title: "Schedule client meeting",
            description: "Set up a follow-up meeting with the client",
            priority: "low",
            dueDate: "2025-04-18",
            createdAt: new Date().toISOString(),
          },
        ];
        await writeTasks(initialTasks);
      } else {
        console.error("Error checking data file:", error);
        throw error;
      }
    }
  } catch (error) {
    console.error("Error initializing data:", error);
    throw error;
  }
};
