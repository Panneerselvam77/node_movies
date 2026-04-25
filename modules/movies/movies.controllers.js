import Movie from "./movies.models.js";

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
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
      },
      { new: true, runValidators: true },
    );

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found!" });
    }

    return res.status(200).json({
      message: "Movie updated successfully!",
      movie: updatedMovie,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const deleted = await Movie.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Movie not found!" });
    }

    return res.status(200).json({ message: "Movie deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
