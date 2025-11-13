// JoinAsStudentOrMentor.jsx
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const JoinAsStudentOrMentor = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Join as a <span className="text-lime-400">Student</span> or{" "}
          <span className="text-lime-400">Mentor</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Choose your path and start making an impact in open source
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Student Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-lime-400/20 transition">
          <div className="flex justify-center mb-6">
            <div className="bg-lime-400/10 p-4 rounded-full">
              <FaGraduationCap className="text-lime-400 text-3xl" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center mb-4">I'm a Student</h2>
          <p className="text-gray-400 text-center mb-6">
            Looking to make my first open source contribution with guidance from
            experienced mentors
          </p>
          <ul className="text-gray-300 space-y-3 mb-8">
            <li>✅ Get matched with mentors in your areas of interest</li>
            <li>✅ Discover beginner-friendly issues</li>
            <li>✅ Build your portfolio and confidence</li>
          </ul>
          <button className="w-full bg-lime-400 text-black font-semibold py-3 rounded-xl hover:bg-lime-500 transition">
            <Link to="/studentLogin">Start Learning</Link>
          </button>
        </div>

        {/* Mentor Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-lime-400/20 transition">
          <div className="flex justify-center mb-6">
            <div className="bg-lime-400/10 p-4 rounded-full">
              <FaHeart className="text-lime-400 text-3xl" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center mb-4">I'm a Mentor</h2>
          <p className="text-gray-400 text-center mb-6">
            Ready to guide newcomers and help grow the next generation of
            contributors
          </p>
          <ul className="text-gray-300 space-y-3 mb-8">
            <li>✅ Share your expertise with eager learners</li>
            <li>✅ Scale your impact with group sessions</li>
            <li>✅ Build a stronger open source community</li>
          </ul>
          <button className="w-full border border-lime-400 text-lime-400 font-semibold py-3 rounded-xl hover:bg-lime-400 hover:text-black transition">
            <Link to="/mentorLogin">Become a Mentor</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinAsStudentOrMentor;