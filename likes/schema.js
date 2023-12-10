import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    artworkID: String,
    artworkTitle: String,
  },
  { collection: "likes" }
);

export default schema;
