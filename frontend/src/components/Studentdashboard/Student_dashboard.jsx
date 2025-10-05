// Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (

    <div className=" flex items-center justify-center bg-black text-white pb-70">
      <div className="text-center p-6 rounded-2xl max-w-md">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center">
            <img
              src= "./Images/src/components/Images/girldashboardpfp.jpg" // replace with actual avatar image path
              alt="avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold">Alex Rodriguez</h1>

        {/* Role Tag */}
        <div className="mt-3 inline-block bg-gray-900 border border-gray-700 px-4 py-1 rounded-full text-sm font-medium">
          🚀 Open Source Maintainer & Core Contributor
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-xl leading-relaxed">
          Passionate about building developer tools and fostering inclusive
          communities. Core maintainer of 12+ projects with 50K+ stars.
          Mentoring the next generation of open-source contributors.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-lg shadow-md hover:bg-gray-200 transition">
          <Link to="/mainstudentdashboard/mainmentorship">⬇ Mentorship</Link>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

