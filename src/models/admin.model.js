import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },

  isSuperAdmin: { type: Boolean, default: false },
  permissions: [String],

}, { timestamps: true })

export default mongoose.models.Admin || mongoose.model("Admin", adminSchema)

/*
Admin profile = authority layer of the platform.

Admin rights are not identity — they are privileges granted to a user.
Keeping it separate prevents permanently mixing moderation power with the core account.

Why not store in User?
Because roles change:
- employee joins company → becomes admin
- leaves company → admin rights removed

The user remains the same human, only permissions change.

permissions[] allows granular control (support, dispute resolution, product moderation)
while isSuperAdmin represents full system authority.

This models power as temporary capability, not permanent identity.
*/