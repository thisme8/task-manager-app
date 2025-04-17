import { createContext, useState, useEffect } from "react";
import axios from "axios";

// to enable cookies and credentials to be sent with every axios request
axios.defaults.withCredentials = true;

// creating a context for authentication state
export const AuthContext = createContext(undefined);

/**
 * AuthProvider component wraps around the app to provide
 * user authentication state and functions (login, logout) globally.
 */
export const AuthProvider = ({ children }) => {
  // State to hold the current authenticated user
  const [user, setUser] = useState(null);

  // State to manage the loading state while checking authentication
  const [loading, setLoading] = useState(true);

  //Logs the user in by setting the user data.
  const login = (userData) => {
    setUser(userData);
  };

  //Logs the user out by calling the logout endpoint
  const logout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}user/logout`,
        {},
        { withCredentials: true }
      );
      setUser(null);
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout failed:", err.response?.data || err.message);
    }
  };

  /**
   * When component is first mounted, the function checks
   * if the user is already authenticated
   * by making a request to the /user/me endpoint.
   * If authenticated, set the user; otherwise, leave as null.
   */
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}user/me`,
          {
            withCredentials: true,
          }
        );
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false); // Finish loading whether success or error
      }
    };
    checkAuth();
  }, []);

  // Provide the user, login, logout, and loading state to globally
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
