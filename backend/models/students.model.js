
import mongoose from "mongoose";

const StudentsSchema = new mongoose.Schema(
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

const Students = mongoose.model("Students", StudentsSchema);

export default Students;
