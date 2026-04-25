import Movie from "../models/movies.models.js";

export const moviesInfo = (req, res) => {
  res.json({ message: "Movies retrieved successfully!" });
};

export const createMovie = async (req, res) => {
  try {
    const newMovies = new Movie({
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

export const updateMovie = (req, res) => {
  res.json({ message: "Movie updated successfully!" });
};

export const deleteMovie = (req, res) => {
  res.json({ message: "Movie deleted successfully!" });
};
