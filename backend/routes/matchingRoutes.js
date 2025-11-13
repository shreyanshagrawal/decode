import express from "express";
import {
    findMatchingMentors,
    assignStudentToMentor,
} from "../controllers/matchingControllers.js";

const router = express.Router();

router.get("/find/:studentId", findMatchingMentors);
router.post("/assign", assignStudentToMentor);

export default router;
