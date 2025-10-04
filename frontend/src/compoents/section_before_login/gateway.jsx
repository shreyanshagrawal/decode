// Gateway.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Gateway = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-12 py-16">
      <div className="max-w-screen-3xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6">Your Gateway to Open Source Contribution</h1>
        <p className="text-2xl mb-10">
          Connect with mentors, discover perfect first issues, and start your open source journey with confidence
        </p>
        <div className="flex justify-center gap-10 mb-12">
          <button className="bg-blue-600 text-white text-xl px-8 py-4 rounded hover:bg-blue-700"><Link to="/mentorLogin">Mentor</Link></button>
          <button className="bg-green-600 text-white text-xl px-8 py-4 rounded hover:bg-green-700"><Link to="/studentLogin">Student</Link></button>
        </div>
        <div className="grid grid-cols-3 gap-12 text-center text-2xl">
          <div>
            <h2 className="text-4xl font-semibold">1000+</h2>
            <p>Active Mentors</p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">5000+</h2>
            <p>First PRs</p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">500+</h2>
            <p>Projects</p>
          </div>
        </div>
        <p className="mt-10 text-lg text-gray-500">Integrated with GitHub · Free Forever</p>
      </div>
    </section>
  );
};

export default Gateway