import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: String,
    role: {
      type: String,
      enum: ["ADMIN", "USER", "CREATER"],
      default: "USER",
    },
    doh: { type: Date, default: Date.now },
    firstName: String,
    lastName: String,
  },
  { collection: "users" }
);
export default schema;
