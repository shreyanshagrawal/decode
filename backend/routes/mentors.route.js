import express from "express";

import { createMentors, deleteMentors, getMentors, updateMentors } from "../controllers/mentors.controller.js";

const router = express.Router();

router.get("/", getMentors);
router.post("/", createMentors);
router.put("/:id", updateMentors);
router.delete("/:id", deleteMentors);

export default router;
