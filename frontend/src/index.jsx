import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import "./index.css";
import { AuthProvider } from "../context/AuthContext.jsx";
import React from "react";
import { TaskProvider } from "../context/TaskContext.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </AuthProvider>
  </React.StrictMode>
);
