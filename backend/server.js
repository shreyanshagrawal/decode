import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import { MentorDB } from "./config/db.js";

import mentorsRoutes from "./routes/mentors.route.js";
import studentsRoutes from "./routes/students.route.js";
import matchingRoutes from "./routes/matchingRoutes.js";




dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// Allow requests from your frontend
app.use(cors({
    origin: "http://localhost:5174", // your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/mentors", mentorsRoutes);
app.use("/api/students", studentsRoutes);
app.use("/api/matching", matchingRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	MentorDB();
	console.log("Server started at http://localhost:" + PORT);
});

