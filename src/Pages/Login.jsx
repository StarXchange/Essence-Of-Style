import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const navigate = useNavigate();

  // Handles form submission for both Login and Sign Up
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const username = formData.get("username");

    try {
      const endpoint =
        currentState === "Sign Up"
          ? `${import.meta.env.VITE_API_BASE_URL}/register`
          : `${import.meta.env.VITE_API_BASE_URL}/login`;

      const body =
        currentState === "Sign Up"
          ? JSON.stringify({ username, email, password })
          : JSON.stringify({ email, password });

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      const data = await response.json();

      if (response.ok) {
        const message = currentState === "Sign Up" ? "Registration successful!" : "Login successful!";
        toast.success(message, { position: "top-right" });
        navigate("/home")
        if (data.token) localStorage.setItem("token", data.token);
      } else {
        toast.error(`Error: ${data.message || "Request failed"}`, { position: "top-right" });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.", { position: "top-right" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-400">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center sm:max-w-[320px] w-full p-6 rounded-lg shadow-lg bg-white gap-6 text-gray-800"
      >
        {/* Title with Divider */}
        <div className="inline-flex items-center gap-2 mb-6">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {/* Conditional Input for Name */}
        {currentState === "Sign Up" && (
          <input
            name="username"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Name"
            required
          />
        )}

        {/* Email Input */}
        <input
          name="email"
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Email"
          required
        />

        {/* Password Input */}
        <input
          name="password"
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Password"
          required
        />

        {/* Forgot Password & State Toggle */}
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot your password?</p>
          {currentState === "Login" ? (
            <p onClick={() => setCurrentState("Sign Up")} className="cursor-pointer">
              Create account
            </p>
          ) : (
            <p onClick={() => setCurrentState("Login")} className="cursor-pointer">
              Login
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white font-light px-8 py-2 mt-4 rounded-lg hover:bg-gray-800"
        >
          {currentState === "Login" ? "Login" : "Sign Up"}
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
