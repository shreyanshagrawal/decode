import mongoose from "mongoose";

// Export schema to allow model creation per-connection
export const mentorsSchema = new mongoose.Schema(
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

// Backwards-compatible default export bound to the default mongoose connection.
// In multi-cluster usage, prefer creating models per-connection via getModel().
const Mentors = mongoose.model("Mentors", mentorsSchema);
export default Mentors;
