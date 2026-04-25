import express from "express";
import Movie from "../models/movies.models.js";

export const moviesInfo = async (req, res) => {
  try {
    const movies = await Movie.find();
    return res
      .status(200)
      .json({ message: "Movies retrieved successfully!", movies });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createMovie = async (req, res) => {
  try {
    const newMovies = new Movie({
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
    });
    await newMovies.save(); // newMovies.create(req.body);
    return res
      .status(201)
      .json({ message: "Movie created successfully!", movie: newMovies });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found!" });
    }
    return res
      .status(200)
      .json({ message: "Movie retrieved successfully!", movie });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const findMovie = await Movie.findByIdAndUpdate({ _id: req.params.id });

    if (!findMovie) {
      return res.status(404).json({ message: "Movie not found!" });
    }

    findMovie.title = req.body.title || findMovie.title;
    findMovie.description = req.body.description || findMovie.description;
    const updatedMovie = await findMovie.save();

    return res
      .status(200)
      .json({ message: "Movie updated successfully!", movie: updatedMovie });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Movie deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
