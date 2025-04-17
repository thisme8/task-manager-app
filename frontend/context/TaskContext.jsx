import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

// Create a context to hold task-related state and functions
export const TaskContext = createContext();

/**
 * TaskProvider component that wraps around components needing task state.
 * It provides tasks, loading and error state, and functions to fetch, add, and delete tasks.
 */
export const TaskProvider = ({ children }) => {
  // Holds the list of tasks
  const [tasks, setTasks] = useState([]);
  // Tracks if data is being loaded
  const [isLoading, setIsLoading] = useState(false);
  // Tracks any errors that occur during API calls
  const [error, setError] = useState(null);

  // Fetching all tasks from the backend
  const fetchTasks = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_URL}task`
      );
      setTasks(response.data);
    } catch (err) {
      setError(err.message || "Failed to fetch tasks");
      console.error("Error fetching tasks:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Add new task to the backend and update local state
  const addTask = useCallback(async (taskData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}task`,
        taskData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const newTask = response.data;
      setTasks((prevTasks) => [...prevTasks, newTask]);
      return newTask;
    } catch (err) {
      setError(err.message || "Failed to add task");
      console.error("Error adding task:", err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Delete a task from the backend and remove it from local state
  const deleteTask = useCallback(async (taskId) => {
    setIsLoading(true);
    setError(null);
    try {
      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_API_URL}task/${taskId}`
      );
      // Remove task from state
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (err) {
      setError(err.message || "Failed to delete task");
      console.error("Error deleting task:", err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Automatically fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // Provide all task state and operations to children components
  return (
    <TaskContext.Provider
      value={{ tasks, isLoading, error, fetchTasks, addTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
