import mongoose from "mongoose";
import Mentors, { mentorsSchema } from "../models/mentors.model.js";
import { getClusterFromRequest, getConnection, getModel } from "../config/db.js";

export const getMentors = async (req, res) => {
	try {
        const clusterName = getClusterFromRequest(req);
        const conn = getConnection(clusterName);
        const MentorsModel = getModel(conn, "Mentors", mentorsSchema);
        const mentors = await MentorsModel.find({});
		res.status(200).json({ success: true, data: mentors });
	} catch (error) {
		console.log("error in fetching mentors:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const createMentors = async (req, res) => {
	const mentors = req.body; // user will send this data

	if ( !mentors.email || !mentors.password) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	}

    try {
        const clusterName = getClusterFromRequest(req);
        const conn = getConnection(clusterName);
        const MentorsModel = getModel(conn, "Mentors", mentorsSchema);
        const newMentors = new MentorsModel(mentors);

        await newMentors.save();
		res.status(201).json({ success: true, data: newMentors });
	} catch (error) {
		console.error("Error in Create mentors:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const updateMentors = async (req, res) => {
	const { id } = req.params;

	const mentors = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Mentors Id" });
	}

    try {
        const clusterName = getClusterFromRequest(req);
        const conn = getConnection(clusterName);
        const MentorsModel = getModel(conn, "Mentors", mentorsSchema);
        const updatedMentors = await MentorsModel.findByIdAndUpdate(id, mentors, { new: true });
		res.status(200).json({ success: true, data: updatedMentors });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const deleteMentors = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Mentors Id" });
	}

    try {
        const clusterName = getClusterFromRequest(req);
        const conn = getConnection(clusterName);
        const MentorsModel = getModel(conn, "Mentors", mentorsSchema);
        await MentorsModel.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Mentors deleted" });
	} catch (error) {
		console.log("error in deleting mentors:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};
