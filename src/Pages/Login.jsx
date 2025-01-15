import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
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
        {currentState === 'Login' ? '' : (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Name"
            required
          />
        )}

        {/* Email Input */}
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Email"
          required
        />

        {/* Password Input */}
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Password"
          required
        />

        {/* Forgot Password & State Toggle */}
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot your password?</p>
          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
              Create account
            </p>
          ) : (
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
              Login
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          className="bg-black text-white font-light px-8 py-2 mt-4 rounded-lg hover:bg-gray-800"
        >
          {currentState === 'Login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;