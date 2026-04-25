import express from "express";
import moviesRouter from "./routes/movies.route.js";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use(express.json());
app.use("/", moviesRouter);

// APP listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
