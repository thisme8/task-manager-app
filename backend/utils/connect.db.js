import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Fetch the database credentials from .env file
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = "tasks_manager_db";
const dbHost = "localhost";

//Creating a pool to maintain more connections together
const db = mysql.createPool({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
});

export default db;
