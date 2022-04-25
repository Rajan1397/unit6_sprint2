const mongoose = require("mongoose");

const savingAccountSchema = new mongoose.Schema({
  accountNumber: { type: "Number", required: true },

  balance: { type: Number, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const SavingAccount = mongoose.model(
  "savingAccountDetail",
  savingAccountSchema
);

module.exports = SavingAccount;
