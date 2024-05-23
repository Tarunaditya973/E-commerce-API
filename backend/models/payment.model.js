const paymentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    order: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true, enum: ["cash", "online"] },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Completed", "Failed"],
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);
