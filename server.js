import app from "./main.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 6969;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
