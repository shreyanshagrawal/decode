import React from "react";
import { FaSearch, FaUserFriends } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-8 border-b border-gray-800">
        <div className="text-2xl font-bold text-lime-400">MentorConnect</div>
        <ul className="hidden md:flex space-x-8 text-gray-300">
          <li className="hover:text-white cursor-pointer">Categories</li>
          <li className="hover:text-white cursor-pointer">Find Mentors</li>
          <li className="hover:text-white cursor-pointer">How It Works</li>
        </ul>
        <div className="flex space-x-4">
          <button className="text-gray-300 hover:text-white">Log In</button>
          <button className="bg-lime-400 text-black px-4 py-2 rounded-md font-medium hover:bg-lime-500">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center flex-1 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Connect. Learn. <span className="text-lime-400">Grow</span>.
        </h1>
        <p className="text-lg text-gray-400 mb-3">
          Find the Right Mentor for Your Journey
        </p>
        <p className="text-gray-500 max-w-2xl mb-8">
          Explore expert mentors across domains like AI, Web Development,
          Design, and more
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-2xl mb-8">
          <div className="flex items-center bg-zinc-900 border border-gray-700 rounded-l-md px-3 flex-1">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search Repo"
              className="bg-transparent w-full py-3 px-3 focus:outline-none text-gray-200 placeholder-gray-500"
            />
          </div>
        </div>

        <div className="flex w-full max-w-2xl mb-8">
          <div className="flex items-center bg-zinc-900 border border-gray-700 rounded-l-md px-3 flex-1">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search by Field"
              className="bg-transparent w-full py-3 px-3 focus:outline-none text-gray-200 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-6">
          <button className="flex items-center gap-2 bg-lime-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-lime-500">
            <FaUserFriends /> Find Mentors
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
