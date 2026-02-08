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

/*
User = identity layer of the system.

Represents a human account only.
Contains authentication + universal properties.

Does NOT store shopping behavior or seller data.
Those live in separate profiles because a person can gain/lose roles over time.

User should remain stable across the lifetime of the platform.
*/