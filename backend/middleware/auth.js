import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // For allowing cross-origin requests from the frontend although cors config also in index.js
  res.header(`Access-Control-Allow-Origin`, `http://localhost:5173`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(
    `Access-Control-Allow-Headers`,
    `Content-Type, Authorization, Cookie`
  );
  res.header(`Access-Control-Allow-Credentials`, `true`);

  // Taking token from the cookies for incoming request
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    // Verification using JWT and the secret key (JWT_SECRET in .env file)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid token" });
  }
};

export default authMiddleware;
