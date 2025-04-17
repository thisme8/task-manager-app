import jwt from "jsonwebtoken";

/**
 * Generates a JWT token for a given user ID.
 *
 * The token contains the user's ID as the payload and is signed
 * using the secret defined in the environment variables.
 *
 * The token is set to expire in 10 days.
 *
 */

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
};

export default generateToken;
