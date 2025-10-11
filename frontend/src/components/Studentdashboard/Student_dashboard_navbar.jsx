import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const nameFromStorage = localStorage.getItem("studentName");
    if (nameFromStorage) setUsername(nameFromStorage);
  }, []);

  return (
    <nav className="w-full bg-black text-white flex items-center justify-between px-6 py-3 pb-50">
      {/* Left section: Avatar + username */}
      <div className="flex items-center gap-3">
        <img
          src="./avatar.jpg" // replace with actual avatar image path
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="font-medium">{username || "Guest"}</span>
      </div>

      {/* Center: Search bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search contribution"
          className="w-full max-w-md bg-gray-900 text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>

      {/* Right section: Menu links */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <button className="hover:text-gray-400">Overview</button>
        <button className="hover:text-gray-400">Insights</button>
        <button className="hover:text-gray-400">Repositories</button>
        <button className="hover:text-gray-400">Settings</button>
      </div>
    </nav>
  );
};

export default Navbar;
