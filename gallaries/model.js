import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("gallaries", schema);
export default model;