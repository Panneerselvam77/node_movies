import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true, minlength: 5, unique: true },
  description: { type: String, required: true },
});

const Movie = model("Movie", movieSchema);
export default Movie;
