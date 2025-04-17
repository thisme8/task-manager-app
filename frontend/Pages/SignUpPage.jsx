import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Update the path if needed
import axios from "axios";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}user/signup`,
        { name, email, password },
        { withCredentials: true }
      );
      login(res.data.user);
      navigate("/dashboard");
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      alert("Signup failed. Please check your details and try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#152a1f] p-4">
      {/* Decorative circles */}
      <div className="fixed top-10 right-10 w-16 h-16 rounded-full bg-[#daa520] opacity-30"></div>
      <div className="fixed bottom-10 left-10 w-24 h-24 rounded-full bg-[#daa520] opacity-20"></div>

      <div className="w-[60%] h-[60vh]">
        <div className="bg-[#f0f8ff] rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="h-8 bg-[#daa520]"></div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-center text-[#152a1f] mb-6">
              Create Account
            </h2>

            <form
              className="w-[80%] flex flex-col items-center justify-center mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-4 w-full">
                <label
                  className="block text-[#152a1f] text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full p-3 border border-[#253a2f] rounded bg-white focus:outline-none focus:border-[#daa520]"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <br />
              <br />
              <div className="mb-4 w-full">
                <label
                  className="block text-[#152a1f] text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full p-3 border border-[#253a2f] rounded bg-white focus:outline-none focus:border-[#daa520]"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <br />

              <div className="mb-6 w-full">
                <label
                  className="block text-[#152a1f] text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full p-3 border border-[#253a2f] rounded bg-white focus:outline-none focus:border-[#daa520]"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <br />
              <div className="w-[50%] mb-6">
                <button
                  className="w-full bg-[#daa520] hover:bg-opacity-90 text-white font-bold py-3 px-4 rounded focus:outline-none"
                  type="button"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <br />
            <br />
            {/* Already have an account? */}
            <div className="text-center">
              <p className="text-[#253a2f] mb-2">Already have an account?</p>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-[#daa520] font-bold hover:underline focus:outline-none"
              >
                Login
              </button>
            </div>
            <br />
            <br />
          </div>
        </div>
        <br />
        <br />
        {/* Footer */}
        <p className="text-center mt-4 text-[#f0f8ff] text-sm">
          © 2025 Blys-Ful Tasks. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
