import mongoose from "mongoose";

const mentorsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
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
