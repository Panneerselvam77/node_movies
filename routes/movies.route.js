import express from "express";

const router = express.Router();
// CRUD operations for movies

// Create a new movie
router.post("/movies", (req, res) => {
  // Logic to create a new movie

  res.send({ message: "Hello World!" });
});

// Read all movies
router.get("/allmovies", (req, res) => {
  // Logic to get all movies
  res.json({ message: "Movies retrieved successfully!" });
});

// Update a movie by ID
router.put("/movies/:id", (req, res) => {
  // Logic to update a movie by ID
  res.json({ message: "Movie updated successfully!" });
});

// Delete a movie by ID
router.delete("/movies/:id", (req, res) => {
  // Logic to delete a movie by ID
  res.json({ message: "Movie deleted successfully!" });
});

export default router;
