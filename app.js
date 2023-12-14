import "dotenv/config";
import mongoose from "mongoose";

import express from "express";
import session from "express-session";
import UserRoutes from "./users/routes.js";
import LikesRoutes from "./likes/routes.js";
import FollowsRoutes from "./follows/routes.js";
import GallariesRoutes from "./gallaries/routes.js";
import cors from "cors";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
  })
);

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));


app.use(express.json());

FollowsRoutes(app);
LikesRoutes(app);
UserRoutes(app);
GallariesRoutes(app);

app.listen(process.env.PORT || 4000);