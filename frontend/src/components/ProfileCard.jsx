import React, { useEffect, useState } from "react";

const ProfileCard = () => {
    const [name, setName] = useState("");
    // On another page

    useEffect(() => {
        // Retrieve the name from localStorage
        const storedName = localStorage.getItem("studentName");
        const stored= localStorage.getItem("student");
        if (storedName) setName(storedName);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center p-6 rounded-2xl max-w-md">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center">
                        <img
                            src="/avatar.png"
                            alt="avatar"
                            className="w-20 h-20 rounded-full"
                        />
                    </div>
                </div>

                {/* Name */}
                <h1 className="text-3xl font-bold">{name || "Guest User"}</h1>

                {/* Role Tag */}
                <div className="mt-3 inline-block bg-gray-900 border border-gray-700 px-4 py-1 rounded-full text-sm font-medium">
                    🚀 Student
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                    Welcome to your dashboard! Here you can see your assigned mentors,
                    your projects, and your progress.
                </p>

                {/* Button */}
                <button className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-lg shadow-md hover:bg-gray-200 transition">
                    ⬇ Generate Shareable CV
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
