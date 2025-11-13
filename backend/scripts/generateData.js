import axios from "axios";

const BASE_URL = "http://localhost:3001/api"; // adjust if your server URL changes

// Random data sources
const fields = ["Web Development", "AI", "Blockchain", "Cybersecurity", "IoT", "DevOps"];
const repos = [
  "smart-vehicle-system",
  "chatbot-platform",
  "ecommerce-dashboard",
  "data-visualizer",
  "social-connect",
  "iot-monitor",
];

// Utility to pick random elements
const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

async function generateAndPostData() {
  try {
    console.log("🚀 Generating and posting sample data...");

    // Generate 100 mentors
    const mentors = Array.from({ length: 100 }, (_, i) => ({
      name: `Mentor ${i + 1}`,
      email: `mentor${i + 1}@example.com`,
      password: "password123",
      repo: [randomFrom(repos)],
      field: [randomFrom(fields)],
      students: [],
    }));

    // Generate 100 students
    const students = Array.from({ length: 100 }, (_, i) => ({
      name: `Student ${i + 1}`,
      email: `student${i + 1}@example.com`,
      password: "password123",
      reposWorkedOn: [
        {
          repoName: randomFrom(repos),
          type: randomFrom(fields),
        },
      ],
    }));

    console.log("🧑‍🏫 Posting mentors...");
    for (const mentor of mentors) {
      await axios.post(`${BASE_URL}/mentors`, mentor);
    }
    console.log("✅ Mentors added successfully!");

    console.log("🎓 Posting students...");
    for (const student of students) {
      await axios.post(`${BASE_URL}/students`, student);
    }
    console.log("✅ Students added successfully!");

  } catch (err) {
    console.error("❌ Error posting data:", err.response?.data || err.message);
  }
}

generateAndPostData();

