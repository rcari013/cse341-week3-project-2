import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    directors: {
      type: String,
      required: true
    },

    releaseYear: {
      type: Number,
      required: true,
      min: 1888,
      max: new Date().getFullYear()
    },

    genre: {
      type: String,
      required: true,
      enum: [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Horror",
        "Science Fiction",
        "Thriller",
        "Romance"
      ]
    },

    imdbRating: {
      type: Number,
      min: 0,
      max: 10
    },

    durationMinutes: {
      type: Number,
      required: true,
      min: 1
    },

    language: {
      type: String,
      required: true,
      trim: true
    },

    isAvailable: {
      type: Boolean,
      enum: [true, false],
      default: true
    }

  },
  {
    versionKey: false // 🔥 removes __v
  }
);

export default mongoose.model("Movie", movieSchema);
