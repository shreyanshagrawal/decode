import mongoose from "mongoose";
import Mentors from "../models/mentors.model.js";

export const getMentors = async (req, res) => {
	try {
		const mentors = await Mentors.find({});
		res.status(200).json({ success: true, data: mentors });
	} catch (error) {
		console.log("error in fetching mentors:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const createMentors = async (req, res) => {
	const mentors = req.body; // user will send this data

	if ( !mentors.name ||!mentors.email || !mentors.password) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	}

	const newMentors = new Mentors(mentors);

	try {
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
		const updatedMentors = await Mentors.findByIdAndUpdate(id, mentors, { new: true });
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
		await Mentors.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Mentors deleted" });
	} catch (error) {
		console.log("error in deleting mentors:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};
