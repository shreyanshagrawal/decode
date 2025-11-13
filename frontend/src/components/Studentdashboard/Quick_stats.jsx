// QuickStats.jsx
import React from "react";
import { GitMerge, MessageSquare, AlertCircle, Wrench, BookOpen, Users, TrendingUp } from "lucide-react";

const stats = [
  { id: 1, label: "Reviews", value: "1,247", change: "+12%", icon: <GitMerge size={22} /> },
  { id: 2, label: "PR Comments", value: "3,892", change: "+8%", icon: <MessageSquare size={22} /> },
  { id: 3, label: "Issue Triage", value: "856", change: "+15%", icon: <AlertCircle size={22} /> },
  { id: 4, label: "CI Fixes", value: "342", change: "+5%", icon: <Wrench size={22} /> },
  { id: 5, label: "Docs", value: "218", change: "+22%", icon: <BookOpen size={22} /> },
  { id: 6, label: "Mentorship", value: "67", change: "+18%", icon: <Users size={22} /> },
];

const QuickStats = () => {
  return (
    <div className="bg-black text-white px-8 py-10 pb-50">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-6">Quick Stats</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between relative shadow-md"
          >
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg mb-4">
              {stat.icon}
            </div>

            {/* Value */}
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.label}</p>

            {/* Change Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-900/30 text-green-400 text-xs font-medium px-2 py-1 rounded-lg">
              <TrendingUp size={14} /> {stat.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStats;