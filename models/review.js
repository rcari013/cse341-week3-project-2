import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true
  },
  reviewerName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  comment: {
    type: String
  },
  reviewDate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Review", reviewSchema);

// Schema validation for reviews collection
// Logic implemented by Romelito Carino; external tools used for reference and debugging