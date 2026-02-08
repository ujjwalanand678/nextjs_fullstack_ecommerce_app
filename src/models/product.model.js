import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true, index: true },

  description: String,
  images: [String],

  price: { type: Number, required: true },
  discountPrice: Number,

  category: String,
  stock: { type: Number, default: 0 },

  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  },

  ratingAverage: { type: Number, default: 0 },
  ratingCount: { type: Number, default: 0 },

  isPublished: { type: Boolean, default: false },

}, { timestamps: true })

export default mongoose.models.Product || mongoose.model("Product", productSchema)

/*
Product = sellable object in marketplace.

References seller profile instead of user identity
because ownership belongs to shop, not person.

Product data may change, but orders store snapshots
to preserve purchase history.
*/