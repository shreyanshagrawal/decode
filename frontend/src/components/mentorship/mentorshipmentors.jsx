// TopMentors.jsx
import React from "react";
import { FaStar, FaUserFriends, FaCheckCircle } from "react-icons/fa";

const mentors = [
  {
    initials: "DSC",
    name: "Dr. Sarah Chen",
    role: "AI Research Scientist at Google",
    skills: ["Machine Learning", "NLP", "Python"],
    rating: "4.9",
    mentees: 47,
  },
  {
    initials: "MR",
    name: "Michael Rodriguez",
    role: "Senior Full-Stack Engineer",
    skills: ["React", "Node.js", "AWS"],
    rating: "4.8",
    mentees: 62,
  },
  {
    initials: "ET",
    name: "Emma Thompson",
    role: "Lead Product Designer at Figma",
    skills: ["UI/UX", "Design Systems", "Figma"],
    rating: "5",
    mentees: 38,
  },
  {
    initials: "DK",
    name: "David Kim",
    role: "DevOps Engineer at Netflix",
    skills: ["Kubernetes", "CI/CD", "AWS"],
    rating: "4.9",
    mentees: 54,
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Product Manager at Microsoft",
    skills: ["Product Strategy", "Agile", "User Research"],
    rating: "4.8",
    mentees: 41,
  },
  {
    initials: "JW",
    name: "James Wilson",
    role: "ML Engineer at OpenAI",
    skills: ["Deep Learning", "PyTorch", "Computer Vision"],
    rating: "5",
    mentees: 36,
  },
];

const TopMentors = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Meet Our Top Mentors</h1>
        <p className="text-gray-400 mt-2">
          Learn from experienced professionals who are passionate about helping you grow
        </p>
      </div>

      {/* Mentor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {mentors.map((mentor, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col hover:shadow-lg hover:shadow-lime-400/20 transition"
          >
            {/* Avatar initials */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 text-lime-400 font-bold">
                {mentor.initials}
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold flex items-center gap-1">
                  {mentor.name}
                  <FaCheckCircle className="text-lime-400" />
                </h2>
                <p className="text-gray-400 text-sm">{mentor.role}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {mentor.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-lime-400/10 text-lime-400 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex justify-between text-gray-400 text-sm mb-6">
              <span className="flex items-center gap-1">
                <FaStar className="text-lime-400" /> {mentor.rating} rating
              </span>
              <span className="flex items-center gap-1">
                <FaUserFriends /> {mentor.mentees} mentees
              </span>
            </div>

            {/* Button */}
            <button className="w-full bg-zinc-800 text-white border border-zinc-700 py-2 rounded-lg hover:bg-lime-400 hover:text-black transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMentors;