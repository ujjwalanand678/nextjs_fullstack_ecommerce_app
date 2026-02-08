import mongoose from "mongoose"

const sellerSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },

  shopName: { type: String, required: true },
  shopDescription: String,

  isApproved: { type: Boolean, default: false },

  ratingAverage: { type: Number, default: 0 },
  ratingCount: { type: Number, default: 0 },

}, { timestamps: true })

export default mongoose.models.Seller || mongoose.model("Seller", sellerSchema)
