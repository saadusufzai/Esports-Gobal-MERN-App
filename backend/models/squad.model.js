const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const squadSchema = new Schema(
  {
    firstName: { type: String, required: true },
    player2: { type: String, required: false },
    player3: { type: String, required: false },
    player4: { type: String, required: false },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    city: { type: String, required: true },
    // lastName: { type: String, required: true },
    // pubgId: { type: Number, required: false },
    // email: { type: String, required: false },
    feeStatus: { type: Boolean, required: false },
    register_date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Squad = mongoose.model("Squad", squadSchema);
module.exports = Squad;
