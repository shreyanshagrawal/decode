import mongoose from "mongoose";
import Students from "../models/students.model.js";

export const getStudents = async (req, res) => {
	try {
		const students = await Students.find({});
		res.status(200).json({ success: true, data: students });
	} catch (error) {
		console.log("error in fetching students:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const createStudents = async (req, res) => {
	const students = req.body; // user will send this data

	if ( !students.name || !students.email || !students.password) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	}

	const newStudents = new Students(students);

	try {
		await newStudents.save();
		res.status(201).json({ success: true, data: newStudents });
	} catch (error) {
		console.error("Error in Create students:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const updateStudents = async (req, res) => {
	const { id } = req.params;

	const students = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Students Id" });
	}

	try {
		const updatedMentors = await Students.findByIdAndUpdate(id, students, { new: true });
		res.status(200).json({ success: true, data: updatedMentors });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const deleteStudents = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Students Id" });
	}

	try {
		await Students.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Students deleted" });
	} catch (error) {
		console.log("error in deleting students:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};
