import React from "react";
import { FaUserPlus, FaSearch, FaComments, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <FaUserPlus size={24} />,
      title: "Create Your Profile",
      description:
        "Tell us about your skills, interests, and what you want to learn or teach",
    },
    {
      number: "02",
      icon: <FaSearch size={24} />,
      title: "Get Matched",
      description:
        "Our AI finds the perfect mentor-mentee pairs based on skills, goals, and availability",
    },
    {
      number: "03",
      icon: <FaComments size={24} />,
      title: "Connect & Learn",
      description:
        "Start chatting, join office hours, and get guidance on your first contributions",
    },
    {
      number: "04",
      icon: <FaCheckCircle size={24} />,
      title: "Make Impact",
      description:
        "Submit your first PR, get feedback, and grow into an active open source contributor",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-16 px-6">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
        How It <span className="text-lime-400">Works</span>
      </h2>
      <p className="text-gray-400 text-center mb-12">
        Four simple steps to start your open source journey
      </p>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl w-full relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative p-6 rounded-xl border border-gray-800 bg-zinc-900 hover:border-lime-400 transition"
          >
            {/* Step number */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-lime-400 text-black font-bold flex items-center justify-center shadow-lg shadow-lime-500/40">
              {step.number}
            </div>

            {/* Icon */}
            <div className="text-lime-400 mb-4">{step.icon}</div>

            {/* Title & description */}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;