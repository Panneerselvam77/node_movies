import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovieById,
  moviesInfo,
  updateMovie,
} from "./movies.controllers.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();
// CRUD operations for movies

// Create a new movie
router.post("/movies", authMiddleware, createMovie);

// Read all movies
router.get("/allmovies", moviesInfo);

// Get a movie by ID
router.get("/movies/:id", authMiddleware, getMovieById);
// Update a movie by ID
router.put("/movies/:id", authMiddleware, updateMovie);

// Delete a movie by ID
router.delete("/movies/:id", authMiddleware, deleteMovie);

export default router;
