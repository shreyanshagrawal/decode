import mongoose from "mongoose";

const mentorsSchema = new mongoose.Schema(
  {
    repo: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  },
);

const Mentors = mongoose.model("Mentors", mentorsSchema);

export default Mentors;
