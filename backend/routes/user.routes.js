import express from "express";
import { signup, login, getMe, logout } from "../controller/user.controller.js";
import authMiddleware from "../middleware/auth.js";
const userRoutes = express.Router();

// routing for the user actions ith router as userRoutes
userRoutes.post("/signup", signup);
userRoutes.post("/login", login);
userRoutes.post("/logout", logout);

// adding authentication middleware to the route
userRoutes.get("/me", authMiddleware, getMe);

export default userRoutes;
