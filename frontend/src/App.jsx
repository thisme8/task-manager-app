import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "../Pages/HomePage.jsx";
import LoginPage from "../Pages/LoginPage.jsx";
import SignUpPage from "../Pages/SignUpPage.jsx";
import Dashboard from "../Pages/Dashboard.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

/**
 * A wrapper component to protect the private route-Dashboard.
 * If the user is logged in, they can access the route.
 * If not, they are redirected to the login page.
 */
const PrivateRoute = ({ element }) => {
  const { user, loading } = useContext(AuthContext); // Access user auth state
  if (loading) return <div>Loading...</div>; // Show loading while checking auth
  return user ? element : <Navigate to="/login" />; // Redirect if not authenticated
};

/**
 * The main App component defines all the routes in the application.
 * It uses React Router to map URLs to respective pages.
 */
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
