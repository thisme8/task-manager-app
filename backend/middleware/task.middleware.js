const validateTaskData = (req, res, next) => {
  const { title } = req.body;

  // Validate required fields
  if (!title || title.trim() === "") {
    return res.status(400).json({ message: "Title is required" });
  }

  // Validate priority if provided
  const { priority } = req.body;
  if (priority && !["low", "medium", "high"].includes(priority)) {
    return res
      .status(400)
      .json({ message: "Priority must be low, medium, or high" });
  }

  const { dueDate } = req.body;

  // Validate dueDate if provided
  if (dueDate) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    // Check if dueDate matches the format and is a valid date
    if (!dateRegex.test(dueDate) || isNaN(new Date(dueDate).getTime())) {
      return res
        .status(400)
        .json({ message: "Due date must be in YYYY-MM-DD format" });
    }
  }
  // If all validations pass, proceed to the next middleware
  next();
};

export default validateTaskData;
