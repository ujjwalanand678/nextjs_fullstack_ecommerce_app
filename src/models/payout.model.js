import mongoose from "mongoose"

const payoutSchema = new mongoose.Schema({
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" },

  amount: Number,
  commission: Number,
  netAmount: Number,

  status: {
    type: String,
    enum: ["pending", "processing", "paid", "failed"],
    default: "pending",
  },

}, { timestamps: true })

export default mongoose.models.Payout || mongoose.model("Payout", payoutSchema)

/*
Payout = accounting ledger entry.

Financial records must be append-only and auditable.
Never embed inside seller profile because money history
must remain intact even if account changes.

This is bookkeeping, not profile data.
*/