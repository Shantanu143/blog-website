import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    subscriptionPlan: { type: String, require: true },
    paymentStatus: { type: String, require: true },
  },
  { timestamps: true }
);

const userModel = mongoose.model.user || mongoose.model("user", UserSchema);

export default userModel;
