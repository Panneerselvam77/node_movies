import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovieById,
  moviesInfo,
  updateMovie,
} from "./movies.controllers.js";

const router = express.Router();
// CRUD operations for movies

// Create a new movie
router.post("/movies", createMovie);

// Read all movies
router.get("/allmovies", moviesInfo);

// Get a movie by ID
router.get("/movies/:id", getMovieById);
// Update a movie by ID
router.put("/movies/:id", updateMovie);

// Delete a movie by ID
router.delete("/movies/:id", deleteMovie);

export default router;
