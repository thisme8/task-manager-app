import express from "express"; // Framework for building the server
import dotenv from "dotenv"; // For loading environment variables
import cookieParser from "cookie-parser"; // To parse cookies in incoming requests
import cors from "cors"; // To handle Cross-Origin Resource Sharing (CORS)
import db from "./utils/connect.db.js"; // Database connection utility
import userRoutes from "./routes/user.routes.js"; // User-related API routes
import taskRoutes from "./routes/task.routes.js"; // Task-related API routes
import errorHandling from "./utils/errorHandling.js"; // Centralized error handler

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();
// Define the port number, fallback to 8080 if not in env
const PORT = Number(process.env.PORT) || 8080;

// Enable CORS with specific configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend origin
    credentials: true, // Allow cookies and credentials
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Middleware to parse cookies from requests
app.use(cookieParser());
// Middleware to parse JSON bodies from requests
app.use(express.json());

// explicitly allow credentials in headers for every request
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// user-related routes under /api/user
app.use("/api/user", userRoutes);

// task-related routes under /api/task
app.use("/api/task", taskRoutes);

// Middleware for handling errors (after error handling is passed from other middlewares)
app.use(errorHandling);

// Start server function with DB connection check
const startServer = async () => {
  try {
    // Verify DB connection
    await db.query("SELECT 1");
    console.log("Connected to MySQL Database");

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`App is listening on PORT ${PORT}`);
    });
  } catch (err) {
    // Log error if DB or server startup fails
    console.error("Failed to connect to DB or start server:", err.message);
    process.exit(1); // Exit process with failure
  }
};

// Invoke the server start function
startServer();
