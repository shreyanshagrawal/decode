import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!name.trim()) return "Full name is required.";
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return "Please provide a valid email.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return "";
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/students/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed. Please try again.");
        setLoading(false);
        return;
      }

      const student = data.data || data.student || data; // be defensive about API shape
      if (student?._id) localStorage.setItem("studentId", student._id);
      if (student?.name) localStorage.setItem("studentName", student.name);

      // success -> navigate to dashboard
      navigate("/mainstudentdashboard");
    } catch (err) {
      console.error("Signup error:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignup = () => {
    // replace path with your backend OAuth endpoint if different
    window.location.href = "http://localhost:3001/auth/github";
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white px-4">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Join the Fastest Growing Online Community
        </h2>

        <button
          type="button"
          onClick={handleGithubSignup}
          className="w-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded mb-4"
          aria-label="Sign up with GitHub"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt=""
            className="w-5 h-5 mr-2"
            aria-hidden
          />
          Sign up with GitHub
        </button>

        <div className="text-center text-gray-400 mb-4">or</div>

        <form onSubmit={handleSignup} noValidate>
          {error && (
            <div className="mb-4 text-sm text-red-400 bg-red-900/20 p-2 rounded">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
              required
              autoComplete="name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
              required
              autoComplete="email"
            />
          </div>

          <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none pr-10"
              required
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? "bg-green-400" : "bg-green-500 hover:bg-green-600"} text-white py-2 px-4 rounded`}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-green-400 hover:underline">
            Forgot your password?
          </a>
        </div>

        <div className="text-center mt-6 text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

