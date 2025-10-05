// RepositoriesImpact.jsx
import React from "react";
import { Star, GitMerge, MessageSquare, Users } from "lucide-react";

const repos = [
  { id: 1, name: "awesome-project", contributions: 342, stars: "24,500" },
  { id: 2, name: "dev-tools/library", contributions: 218, stars: "18,200" },
  { id: 3, name: "react-components", contributions: 156, stars: "12,800" },
  { id: 4, name: "build-system", contributions: 124, stars: "9,400" },
];

const impactful = [
  {
    id: 1,
    title: "Performance optimization reducing bundle size by 40%",
    desc: "Improved load times for 100K+ users",
    icon: <GitMerge size={20} />,
  },
  {
    id: 2,
    title: "Critical security vulnerability fix in auth system",
    desc: "Protected 250K+ applications",
    icon: <GitMerge size={20} />,
  },
  {
    id: 3,
    title: "Comprehensive TypeScript migration guide",
    desc: "Helped 500+ projects migrate",
    icon: <MessageSquare size={20} />,
  },
];

const RepositoriesImpact = () => {
  return (
    <div className="pb-50 bg-black">
        <div className="bg-black text-white px-8 py-6">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold">Community Impact</h2>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>
    </div>
    <div className="bg-black  text-white px-8 py-10 flex flex-col lg:flex-row gap-6">
      {/* Left: Top Repositories */}
      <div className="flex-1 bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-6">
          <GitMerge size={20} /> Top Repositories
        </h2>
        <div className="flex flex-col gap-4">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-neutral-900 rounded-xl p-4 flex items-center justify-between"
            >
              <div>
                <h3 className="font-medium text-sm truncate">{repo.name}</h3>
                <p className="text-gray-400 text-xs">
                  {repo.contributions} contributions
                </p>
              </div>
              <div className="flex items-center gap-1 bg-neutral-800 px-3 py-1 rounded-lg text-sm">
                <Star size={16} className="text-yellow-400" /> {repo.stars}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Most Impactful */}
      <div className="flex-1 bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-6">
          <MessageSquare size={20} /> Most Impactful
        </h2>
        <div className="flex flex-col gap-4">
          {impactful.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900 rounded-xl p-4 flex gap-3"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-medium leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Mentorship Box */}
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl p-4 flex gap-3 items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-lg">
              <Users size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold">67</h3>
              <p className="text-gray-400 text-sm">Developers Mentored</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RepositoriesImpact;