import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    gallaryID: { type: String, unique: false, required: true },
    artworkID: { type: String, unique: false, required: true },

  },
  { collection: "gallaries" }
);

export default schema;