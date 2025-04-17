/**
 * Validates whether a given email string is in a proper email format.
 *
 * Uses a regular expression to check if the email has the typical structure:
 * (e.g., user@example.com)
 *
 */

const validateEmail = (email) => {
  // Email regular expression pattern for format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default validateEmail;
