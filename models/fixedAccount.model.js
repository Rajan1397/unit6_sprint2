const mongoose = require("mongoose");

const fixedAccountSchema = new mongoose.Schema({
  accountNumber: { type: "Number", required: true },

  balance: { type: Number, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const FixedAccount = mongoose.model("fixedAccount", fixedAccountSchema);

module.exports = FixedAccount;
