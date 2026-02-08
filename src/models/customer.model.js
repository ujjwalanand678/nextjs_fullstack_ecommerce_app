import mongoose from "mongoose"
import addressSchema from "./schemas/address.schema"

const customerSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },

  addresses: [addressSchema],

  wishlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }],

}, { timestamps: true })

export default mongoose.models.Customer || mongoose.model("Customer", customerSchema)
