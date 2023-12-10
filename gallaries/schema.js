import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    gallaryID: { type: String, unique: false, required: true },
    gallaryName: { type: String, unique: false, required: false },
    artworkID: String,

  },
  { collection: "gallaries" }
);

export default schema;