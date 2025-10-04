import Mentors from "../models/mentors.model.js";
import Students from "../models/students.model.js";

// Find suitable mentors for a student
export const findMatchingMentors = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Students.findById(studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    const repoNames = student.reposWorkedOn.map(r => r.name);
    const repoTypes = student.reposWorkedOn.map(r => r.type);

    const mentors = await Mentors.aggregate([
      {
        $match: {
          $or: [
            { "repos.name": { $in: repoNames } },
            { "repos.type": { $in: repoTypes } },
          ],
        },
      },
      {
        $addFields: {
          totalStudents: { $sum: "$repos.studentsCount" },
        },
      },
      { $sort: { totalStudents: 1 } }, // mentors with fewer students first
    ]);

    res.json(mentors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Assign a student to a mentor for a specific repo
export const assignStudentToMentor = async (req, res) => {
  try {
    const { mentorId, studentId, repoName, repoType } = req.body;

    const mentor = await Mentors.findById(mentorId);
    const student = await Students.findById(studentId);

    if (!mentor || !student) {
      return res.status(404).json({ message: "Mentor or Student not found" });
    }

    // Add student to mentor repo
    let repo = mentor.repos.find(r => r.name === repoName);
    if (!repo) {
      repo = { name: repoName, type: repoType, students: [] };
      mentor.repos.push(repo);
    }

    repo.students.push(student._id);
    repo.studentsCount = repo.students.length;
    await mentor.save();

    // Add mentor to student repo
    let studentRepo = student.reposWorkedOn.find(r => r.name === repoName);
    if (!studentRepo) {
      studentRepo = { name: repoName, type: repoType, mentors: [] };
      student.reposWorkedOn.push(studentRepo);
    }

    studentRepo.mentors.push(mentor._id);
    await student.save();

    res.json({ message: "Student assigned to mentor successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

