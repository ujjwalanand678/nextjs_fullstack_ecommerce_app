import mongoose from "mongoose"

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
  priceSnapshot: Number,
}, { _id: false })

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },

  items: [cartItemSchema],

}, { timestamps: true })

export default mongoose.models.Cart || mongoose.model("Cart", cartSchema)

/*
Cart = temporary intent, not a financial record.

Stored separately because:
- updates frequently
- should not rewrite user document repeatedly
- priceSnapshot protects against price changes before checkout

Cart can safely disappear; order cannot.
*/