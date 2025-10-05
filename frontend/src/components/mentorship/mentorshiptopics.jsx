// MentorCategories.jsx
import React from "react";
import { FaBrain, FaCode, FaCloud, FaPalette, FaCube } from "react-icons/fa";

const categories = [
  {
    icon: <FaBrain className="text-lime-400 text-3xl" />,
    title: "AI & Machine Learning",
    description: "Deep learning, neural networks, NLP, and data science expertise",
    mentors: 156,
  },
  {
    icon: <FaCode className="text-lime-400 text-3xl" />,
    title: "Web Development",
    description: "Frontend, backend, full-stack, and modern frameworks",
    mentors: 243,
  },
  {
    icon: <FaCloud className="text-lime-400 text-3xl" />,
    title: "Cloud & DevOps",
    description: "AWS, Azure, GCP, CI/CD, and infrastructure automation",
    mentors: 128,
  },
  {
    icon: <FaPalette className="text-lime-400 text-3xl" />,
    title: "Design & UI/UX",
    description: "Product design, user research, prototyping, and design systems",
    mentors: 97,
  },
  {
    icon: <FaCube className="text-lime-400 text-3xl" />,
    title: "Product Management",
    description: "Strategy, roadmapping, user stories, and agile methodologies",
    mentors: 84,
  },
];

const MentorCategories = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Explore Mentor Categories
        </h1>
        <p className="text-gray-400 mt-2">
          Find experts in your area of interest
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:shadow-lime-400/20 transition"
          >
            <div>
              <div className="mb-4">{cat.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{cat.title}</h2>
              <p className="text-gray-400 text-sm mb-6">{cat.description}</p>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>{cat.mentors} mentors</span>
              <button className="text-lime-400 hover:underline flex items-center gap-1">
                View Mentors →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorCategories;