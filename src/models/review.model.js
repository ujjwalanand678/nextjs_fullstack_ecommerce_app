import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },

  rating: { type: Number, min: 1, max: 5 },
  comment: String,

}, { timestamps: true })

export default mongoose.models.Review || mongoose.model("Review", reviewSchema)

/*
Review = public trust signal.

Stored separately because reputation must persist
even if product or seller changes state.

Represents a statement made at a moment in time.
*/