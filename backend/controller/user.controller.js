import comparePassword from "../utils/comparePassword.js";
import validateEmail from "../utils/validateEmail.js";
import hashPassword from "../utils/hashPassword.js";
import db from "../utils/connect.db.js";
import generateToken from "../utils/generateToken.js";

// SignUp Controller
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  // Checking for required fields
  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields are required" });

  // Validation email format using a utility function
  if (!validateEmail(email))
    return res.status(400).json({ error: "Invalid email format" });

  try {
    // querying data base to check user
    const [existingUser] = await db.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    // user already exists, return error
    if (existingUser.length > 0)
      return res.status(409).json({ error: "Email already registered" });

    // Hashing the password
    const hashedPassword = await hashPassword(password);

    // Inserting the new user data into the database
    const [result] = await db.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    // Generate a JWT token for the newly registered user, using util function
    const token = generateToken(result.insertId);

    // Set the token as a cookie in the response with options
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days expiry for tokens
    });

    return res.status(201).json({
      message: "SignUp successful",
      userId: result.insertId,
    });
  } catch (err) {
    console.error("SignUp error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// Login Controller
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Checking if both email and password are provided
  if (!email || !password)
    return res.status(400).json({ error: "Email and password are required" });

  try {
    // Querying the database for the user with the entered email
    const [users] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (users.length === 0)
      return res.status(404).json({ error: "User not found" });

    const user = users[0]; // to get the first (and only) user from the result

    // to compare the provided password with the stored password hash
    const match = await comparePassword(password, user.password);

    if (!match)
      return res.status(401).json({ error: "Invalid email or password" });

    // Generate a JWT token for the logged-in user
    const token = generateToken(user.id);

    // Set the token as a cookie in the response
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 10 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// LogOut Controller
export const logout = (req, res) => {
  // Clear the token cookie to log the user out
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false,
  });

  return res.status(200).json({ message: "Logged out successfully" });
};

export const getMe = async (req, res) => {
  // Disable caching to ensure fresh data is always fetched
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Pragma", "no-cache");

  try {
    // Check if user data is available in the request (from the authentication middleware - auth.js)
    if (!req.user) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const userId = req.user.id;

    // Fetch user from the database using the user ID from the token
    const [users] = await db.execute(
      "SELECT id, name, email FROM users WHERE id = ?",
      [userId]
    );

    // If no user is found with the given ID, return a 404 error
    if (users.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = users[0];

    return res.status(200).json({ user });
  } catch (err) {
    console.error("GetMe error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};
