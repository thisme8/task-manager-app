import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

// TaskCard receives a single task as a prop
const TaskCard = ({ task }) => {
  // Extract the deleteTask function from context
  const { deleteTask } = useContext(TaskContext);
  // State to track whether the task is currently being deleted
  const [isDeleting, setIsDeleting] = useState(false);

  // Function to handle deletion of the task
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      // Attempt to delete the task by its ID
      await deleteTask(task.id);
    } catch (error) {
      // You can log or display error here if desired
    } finally {
      // Regardless of success or error, stop the loading state
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-[#f0f8ff] border-3 border-[#233c2f] rounded-[10px] ml-[15%] mr-[15%]  my-[%] w-[70%]  pl-[5%] shadow-md p-4 mb-4">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-gray-600 mt-1">{task.description}</p>
          {task.dueDate && (
            <p className="text-sm text-gray-500 mt-2">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </p>
          )}
          <br />
          <div>
            {task.priority && (
              <div className="mt-3">
                <span
                  className={`inline-block px-2 py-1 text-xs rounded-full ${
                    task.priority === "high"
                      ? "bg-red-100 text-red-800"
                      : task.priority === "medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {task.priority.charAt(0).toUpperCase() +
                    task.priority.slice(1)}
                </span>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 disabled:text-gray-400"
          aria-label="Delete task"
          disabled={isDeleting}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
