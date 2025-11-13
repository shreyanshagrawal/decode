// MentorDashboard.jsx
import React from "react";
import { Bell, MessageSquare, Plus, Github, Linkedin, Globe } from "lucide-react";

const MentorDashboard = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-neutral-950">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center font-bold">
            DPK
          </div>
          <div>
            <h1 className="text-sm font-semibold">Dr. Priya Kumar</h1>
            <p className="text-xs text-gray-400">
              Empowering the next generation of developers
            </p>
          </div>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-green-400 border-b-2 border-green-400 pb-1">
            Overview
          </a>
          <a href="#" className="hover:text-gray-400">
            Expertise
          </a>
          <a href="#" className="hover:text-gray-400">
            Sessions
          </a>
          <a href="#" className="hover:text-gray-400">
            Mentees
          </a>
          <a href="#" className="hover:text-gray-400">
            Feedback
          </a>
          <a href="#" className="hover:text-gray-400">
            Settings
          </a>
        </div>

        {/* Right: Notifications */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell size={18} />
            <span className="absolute -top-2 -right-2 bg-green-600 text-xs px-1.5 py-0.5 rounded-full">
              3
            </span>
          </div>
          <div className="relative">
            <MessageSquare size={18} />
            <span className="absolute -top-2 -right-2 bg-green-600 text-xs px-1.5 py-0.5 rounded-full">
              5
            </span>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="px-6 py-10 bg-gradient-to-r from-neutral-950 to-black border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Welcome back, Dr. Priya!</h2>
            <p className="text-gray-400 text-sm mt-1">
              Here's your mentorship impact this month
            </p>
            <p className="text-green-400 font-medium mt-2">
              You’ve mentored 27 developers this quarter 🎯
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-green-600 text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-500 transition">
              <Plus size={16} /> Add New Session
            </button>
            <button className="border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              Update Expertise
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Profile */}
      <section className="px-6 py-8">
        <div className="bg-neutral-950 border border-gray-800 rounded-2xl p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Expertise Profile</h3>
            <button className="flex items-center gap-1 text-gray-400 text-sm hover:text-white">
              <Plus size={14} /> Add Skill
            </button>
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left skills */}
            <div>
              <h4 className="text-sm text-gray-400 mb-3">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-600 text-black px-3 py-1 rounded-md text-sm">
                  Machine Learning
                </span>
                <span className="bg-green-600 text-black px-3 py-1 rounded-md text-sm">
                  UI/UX Design
                </span>
                <span className="bg-green-600 text-black px-3 py-1 rounded-md text-sm">
                  React
                </span>
              </div>
            </div>

            {/* Right skills */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="bg-green-600 text-black px-3 py-1 rounded-md text-sm">
                  DevOps
                </span>
                <span className="text-green-400">★★★★★</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="bg-green-600 text-black px-3 py-1 rounded-md text-sm">
                  Cloud Architecture
                </span>
                <span className="text-green-400">★★★★☆</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="bg-green-600 text-black px-3 py-1 rounded-md text-sm">
                  Node.js
                </span>
                <span className="text-green-400">★★★★☆</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8">
            <h4 className="text-sm text-gray-400 mb-3">Certifications</h4>
            <div className="flex flex-wrap gap-6 text-sm">
              <span>AWS Solutions Architect</span>
              <span>Google Cloud Professional</span>
              <span>Certified Scrum Master</span>
            </div>
          </div>

          {/* Links */}
          <div className="mt-8">
            <h4 className="text-sm text-gray-400 mb-3">Professional Links</h4>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="flex items-center gap-1 hover:text-green-400">
                <Github size={16} /> GitHub
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-green-400">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-green-400">
                <Globe size={16} /> Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorDashboard;