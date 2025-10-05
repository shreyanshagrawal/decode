import React from "react";
import { FaBullseye, FaComments, FaCodeBranch, FaUserGraduate, FaChartLine, FaChartBar } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaBullseye size={28} />,
      title: "Smart Matching",
      description:
        "AI-powered matching connects you with mentors who share your interests and can guide you effectively",
    },
    {
      icon: <FaComments size={28} />,
      title: "1:1 & Group Chat",
      description:
        "Private mentorship sessions or join office hours with multiple mentors and learners",
    },
    {
      icon: <FaCodeBranch size={28} />,
      title: "Issue Discovery",
      description:
        "Find curated 'good first issues' tailored to your skill level and learning goals",
    },
    {
      icon: <FaUserGraduate size={28} />,
      title: "Skill-Based Profiles",
      description:
        "Showcase your expertise or learning path with detailed profiles that match you intelligently",
    },
    {
      icon: <FaChartBar size={28} />,
      title: "Feedback & Growth",
      description:
        "Track your progress with session notes, ratings, and measurable contribution outcomes",
    },
    {
      icon: <FaChartLine size={28} />,
      title: "Retention Support",
      description:
        "Structured onboarding ensures first contribution leads to long-term engagement",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-16 px-6">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Everything You Need to{" "}
        <span className="text-lime-400">Succeed</span>
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        We remove the barriers to open source contribution with powerful
        features designed for learners and mentors
      </p>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border border-gray-800 bg-zinc-900 hover:border-lime-400 transition 
              ${feature.highlight ? "ring-2 ring-lime-400" : ""}`}
          >
            <div className="text-lime-400 mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;