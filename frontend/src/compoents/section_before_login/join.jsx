// Join.jsx
import React from 'react';

const Join = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-12 py-16">
      <div className="max-w-screen-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12">Join as a Student or Mentor</h2>
        <div className="grid grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded shadow-xl">
            <h3 className="text-3xl font-semibold mb-4">I'm a Student</h3>
            <p className="text-lg mb-6 text-gray-700">
              Looking to make my first open source contribution with guidance from experienced mentors
            </p>
            <ul className="text-left list-disc list-inside text-gray-600 text-lg mb-6">
              <li>Get matched with mentors in your areas of interest</li>
              <li>Discover beginner-friendly issues</li>
              <li>Build your portfolio and confidence</li>
            </ul>
            <button className="bg-blue-600 text-white text-xl px-8 py-4 rounded hover:bg-blue-700">Start Learning</button>
          </div>
          <div className="bg-white p-10 rounded shadow-xl">
            <h3 className="text-3xl font-semibold mb-4">I'm a Mentor</h3>
            <p className="text-lg mb-6 text-gray-700">
              Ready to guide newcomers and help grow the next generation of contributors
            </p>
            <ul className="text-left list-disc list-inside text-gray-600 text-lg mb-6">
              <li>Share your expertise with eager learners</li>
              <li>Scale your impact with group sessions</li>
              <li>Build a stronger open source community</li>
            </ul>
            <button className="bg-green-600 text-white text-xl px-8 py-4 rounded hover:bg-green-700">Become a Mentor</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join