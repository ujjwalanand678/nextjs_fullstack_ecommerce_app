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

/*
Seller profile = business capability layer.

A user may become a seller later in life.
Keeping it separate avoids rewriting identity history.

Approval flag lives here because moderation applies to the shop, not the human account.
*/