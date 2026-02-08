import mongoose from "mongoose"
import addressSchema from "./schemas/address.schema"

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" },

  title: String,
  image: String,

  price: Number,
  quantity: Number,
}, { _id: false })

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  items: [orderItemSchema],

  totalAmount: Number,

  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed", "refunded"],
    default: "pending",
  },

  orderStatus: {
    type: String,
    enum: ["placed", "confirmed", "shipped", "delivered", "cancelled"],
    default: "placed",
  },

  shippingAddress: addressSchema,

}, { timestamps: true })

export default mongoose.models.Order || mongoose.model("Order", orderSchema)

/*
Order = immutable economic event.

Contains snapshots of product data so history survives:
- price changes
- product deletion
- seller banning

Orders are financial/legal records and must never depend on current product state.
*/