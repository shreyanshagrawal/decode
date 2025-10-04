import mongoose from "mongoose";

const mentorsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },

        // Mentor's area of expertise
        fields: { type: [String], default: [] },

        // Repositories the mentor supervises
        repos: [
            {
                name: { type: String, required: true },
                type: { type: String }, // e.g. "AI", "Web", "Blockchain"
                students: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Students",
                    },
                ],
                studentsCount: { type: Number, default: 0 },
            },
        ],
    },
    { timestamps: true },
);

const Mentors = mongoose.model("Mentors", mentorsSchema);
export default Mentors;
