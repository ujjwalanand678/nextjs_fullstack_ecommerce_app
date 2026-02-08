import mongoose from "mongoose"

const addressSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  line1: { type: String, required: true },
  line2: String,
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, default: "India" },
}, { _id: false })

export default addressSchema

/*
Address is NOT a standalone entity.
It only makes sense attached to something (customer profile, order shipping, etc).

We embed instead of referencing because:
- address should be frozen in time inside orders
- joins are unnecessary overhead in MongoDB
- structure reused, data not reused

Think of this as a shape template, not a collection.
*/