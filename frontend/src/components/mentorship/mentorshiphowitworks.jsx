// HowItWorks.jsx
import React from "react";
import { FaSearch, FaCalendarAlt, FaChartLine } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch className="text-3xl text-lime-400" />,
    title: "Discover Mentors",
    description:
      "Browse or search by domain to find the perfect mentor for your goals",
  },
  {
    id: 2,
    icon: <FaCalendarAlt className="text-3xl text-lime-400" />,
    title: "Connect & Schedule",
    description:
      "Book 1:1 mentorship sessions or join group learning experiences",
  },
  {
    id: 3,
    icon: <FaChartLine className="text-3xl text-lime-400" />,
    title: "Grow Together",
    description:
      "Track progress, gain insights, and build your professional network",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-black text-white px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        <p className="text-gray-400 mt-2">
          Start your mentorship journey in three simple steps
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            {/* Icon with step number */}
            <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-zinc-900 mb-4">
              {step.icon}
              <span className="absolute -top-2 -right-2 bg-lime-400 text-black text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                {step.id}
              </span>
            </div>
            {/* Title & Description */}
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
