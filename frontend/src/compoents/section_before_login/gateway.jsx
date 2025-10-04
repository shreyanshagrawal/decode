// Gateway.jsx
import React from "react";
import { Link } from 'react-router-dom';
import { Users, Code } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-hidden px-6">
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,100,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-20 pointer-events-none" />

      {/* Tagline */}
      <div className="mb-4 flex items-center space-x-2 bg-gray-900/60 px-4 py-2 rounded-full border border-gray-800 text-sm">
        <div className="h-2 w-2 bg-lime-400 rounded-full"></div>
        <span>Building Tomorrow's Open Source</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center leading-tight">
        Your Gateway to{" "}
        <span className="text-lime-400">Open Source Contribution</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-400 max-w-2xl text-center">
        Connect with mentors, discover perfect first issues, and start your open
        source journey with confidence.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="flex items-center gap-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-xl hover:bg-lime-300 transition">
          <Users className="w-5 h-5" />
          <Link to="/mentorLogin">Mentor</Link>
        </button>
        <button className="flex items-center gap-2 px-6 py-3 border border-lime-400 text-lime-400 rounded-xl hover:bg-lime-400 hover:text-black transition">
          <Code className="w-5 h-5" />
          <Link to="/studentLogin">Student</Link>
        </button>
      </div>

      {/* Stats */}
      <div className="mt-16 flex flex-wrap justify-center gap-10 text-center">
        <div>
          <h3 className="text-3xl font-bold text-lime-400">1000+</h3>
          <p className="text-gray-400 text-sm">Active Mentors</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-lime-400">5000+</h3>
          <p className="text-gray-400 text-sm">First PRs</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-lime-400">500+</h3>
          <p className="text-gray-400 text-sm">Projects</p>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-10 text-gray-500 text-sm">
        ⚙️ Integrated with GitHub · Free Forever
      </p>
    </section>
  );
};

export default HeroSection;