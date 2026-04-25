import express from "express";
import moviesRouter from "./routes/movies.route.js";
import connectDB from "./lib/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6969;

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use(express.json());
app.use("/", moviesRouter);

// APP listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
