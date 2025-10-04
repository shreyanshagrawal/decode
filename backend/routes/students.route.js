import express from "express";

import { createStudents, deleteStudents, getStudents, updateStudents } from "../controllers/students.controller.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudents);
router.put("/:id", updateStudents);
router.delete("/:id", deleteStudents);

export default router;
