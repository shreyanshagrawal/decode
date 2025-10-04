import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectClusters, getClusterNames } from "./config/db.js";

import mentorsRoutes from "./routes/mentors.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/mentors", mentorsRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, async () => {
    try {
        await connectClusters();
        console.log("DB clusters initialized:", getClusterNames());
    } catch (err) {
        console.error("Failed to initialize DB clusters:", err.message);
        process.exit(1);
    }
    console.log("Server started at http://localhost:" + PORT);
});

