import bcrypt from "bcryptjs";

/**
 * Hashes a plain text password using bcrypt.
 *
 * the function takes a user's password and securely hashes it
 * using 10 salt rounds
 *
 */

const hashPassword = async (Password, saltRounds = 10) => {
  return await bcrypt.hash(Password, saltRounds);
};

export default hashPassword;
