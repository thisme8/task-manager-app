// src/components/TaskList.js
import React, { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { tasks, isLoading, error, fetchTasks } = useContext(TaskContext);

  // refresh function to manually reload tasks
  const handleRefresh = () => {
    fetchTasks();
  };

  // Automatically refresh when component mounts
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  if (isLoading && tasks.length === 0) {
    return (
      <div className="text-center py-8 flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p>Loading tasks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {error}
        </div>
        <button
          onClick={handleRefresh}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p className="mb-4">No tasks yet. Add a task to get started!</p>
        <button
          onClick={handleRefresh}
          className="text-blue-500 hover:text-blue-600 underline"
        >
          Refresh
        </button>
        <br />
        <br />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={handleRefresh}
          className="text-blue-500 hover:text-blue-600 flex items-center"
          disabled={isLoading}
        ></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <button
        onClick={handleRefresh}
        className="text-blue-500 hover:text-blue-600 underline"
      >
        Refresh
      </button>
    </div>
  );
};

export default TaskList;
