import express from "express";
import moviesRouter from "./modules/movies/movies.route.js";
import authRouter from "./modules/auth/auth.routes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/", moviesRouter);
app.use("/api/auth", authRouter);

export default app;
