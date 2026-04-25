export const moviesInfo = (req, res) => {
  res.json({ message: "Movies retrieved successfully!" });
};

export const createMovie = (req, res) => {
  res.json({ message: "Movie created successfully!" });
};

export const updateMovie = (req, res) => {
  res.json({ message: "Movie updated successfully!" });
};

export const deleteMovie = (req, res) => {
  res.json({ message: "Movie deleted successfully!" });
};
