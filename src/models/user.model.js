import mongoose from "mongoose"
import { ROLES } from "@/constants/roles"

const userSchema = new mongoose.Schema({

  name: { type: String, required: true },

  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },

  password: {
    type: String,
    required: true,
    select: false, // never return password accidentally
  },

  role: {
    type: String,
    enum: Object.values(ROLES),
    default: ROLES.CUSTOMER,
  },

  avatar: String,

}, { timestamps: true })

export default mongoose.models.User || mongoose.model("User", userSchema)
