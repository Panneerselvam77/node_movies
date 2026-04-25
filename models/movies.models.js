import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  //   director: { type: String, required: true },
  //   releaseYear: { type: Number, required: true },
  //   genre: { type: String, required: true },
});

const Movie = model("Movie", movieSchema);
export default Movie;
