import React, { useState } from 'react';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-stone-950 text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md border-white bg-gray-800 rounded-lg shadow-lg p-8 ">
        {/* Header */}
        <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
          Join the Fastest Growing Developer Community
        </h2>

        {/* GitHub Sign Up */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mb-4">
          Sign up with GitHub
        </button>

        {/* Separator */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-700" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        {/* Form Fields */}
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400 cursor-pointer"
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center mb-6">
            <input type="checkbox" className="mr-2 accent-green-500" />
            <span className="text-sm text-gray-300">
              I accept the{' '}
              <a href="#" className="text-green-400 underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-green-400 underline">
                Privacy Policy
              </a>
            </span>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Create Account
          </button>
        </form>

        {/* Sign In Prompt */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{' '}
          <a href="#" className="text-green-400 underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;