import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3001/api/students/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Login failed");
            return;
        }

        // Access the student object correctly
        const student = data.data;

        if (student?._id) localStorage.setItem("studentId", student._id);
        if (student?.name) localStorage.setItem("studentName", student.name);

        alert("Login successful!");
        console.log("User ID saved:", localStorage.getItem("studentId"));
        try {
            window.location.href = "/mainstudentdashboard";
        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Welcome Back to the Fastest Growing Online Community
                </h2>

                <button className="w-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded mb-4">
                    <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub"
                        className="w-5 h-5 mr-2"
                    />
                    Sign Up with GitHub
                </button>

                <div className="text-center text-gray-400 mb-4">or</div>

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter you name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4 relative">
                        <label className="block mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
                            required
                        />
                    </div>


                    <div className="mb-4 relative">
                        <label className="block mb-1">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
                            required
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-9 cursor-pointer text-gray-400"
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="text-center mt-4">
                    <a href="#" className="text-green-400 hover:underline">
                        Forgot your password?
                    </a>
                </div>

                <div className="text-center mt-6 text-gray-400">
                    I have an account?{" "}
                    {/* <a href="#" className="text-green-400 hover:underline"> */}
                    <Link to="/mainstudentdashboard">Sign In</Link>
                    {/* </a> */}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
