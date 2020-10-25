const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    pubgId: { type: Number, required: false },
    email: { type: String, required: false },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    feeStatus: { type: Boolean, required: false },
    register_date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
