const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    pubgId: { type: Number, required: false },
    email: { type: String, required: false },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Register = mongoose.model('Register', registerSchema)
module.exports = Register