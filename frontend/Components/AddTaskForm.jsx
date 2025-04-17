import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const AddTaskForm = () => {
  // Access the addTask function from context
  const { addTask } = useContext(TaskContext);
  // State to toggle the form's visibility
  const [showForm, setShowForm] = useState(false);
  // State for form input values
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
  });

  // State for submission and form error handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that title isn't empty
    if (!formData.title.trim()) {
      setFormError("Title is required");
      return;
    }

    setIsSubmitting(true);
    setFormError("");

    try {
      // Add the task using context method
      await addTask(formData);
      // Reset form after successful addition
      setFormData({
        title: "",
        description: "",
        priority: "medium",
        dueDate: "",
      });
      setShowForm(false);
    } catch (error) {
      setFormError("Failed to add task. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mb-6">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#f0f8ff] border-3 border-[#233c2f] rounded-[10px] ml-[15%] mr-[15%] w-[70%] h-[90%]  flex items-center justify-center"
        >
          📋 Add New Task 📋
        </button>
      ) : (
        <div className="bg-[#f0f8ff] border-3 border-[#233c2f] rounded-[10px] ml-[15%] mr-[15%] w-[70%] h-[90%] ml-[5%] mr-[5%] flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-4">Add New Task</h3>
          {formError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {formError}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#f5f5dc] border-3 border-[#233c2f] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <br />
            <br />
            <div className="mb-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 bg-[#f5f5dc] border-3 border-[#233c2f] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <br />
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="priority"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-3 border-[#233c2f] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <br />
              <br />
              <div>
                <label
                  htmlFor="dueDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#f5f5dc] border-3 border-[#233c2f] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <br />
            <br />
            <div className="flex-col justify-end space-x-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-[#233c2f] bg-gray-200 rounded-md hover:bg-gray-300"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-[#233c2f] rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                disabled={isSubmitting || !formData.title.trim()}
              >
                {isSubmitting ? "Adding..." : "Add Task"}
              </button>
              <br />
              <br />
            </div>
            <br />
            <br />
          </form>
        </div>
      )}
    </div>
  );
};

export default AddTaskForm;
