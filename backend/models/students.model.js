import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // Projects or problem statements student works on
    reposWorkedOn: [
      {
        name: { type: String, required: true },
        type: { type: String }, // repo type like "AI", "Web", etc.
        mentors: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Mentors",
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Students = mongoose.model("Students", studentsSchema);
export default Students;

