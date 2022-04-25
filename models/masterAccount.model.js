const mongoose = require("mongoose");

const branchDetailSchema = new mongoose.Schema({
  balance: { type: Number, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
  // one to one
  branchID: { type: mongoose.Schema.Types.ObjectId, ref: "branch" },
  // one to many
  savingsAccountID: [
    { type: mongoose.Schema.Types.ObjectId, ref: "savingsAccount" },
  ],
  // many to many
  fixedAccount_id: [{ type: mongoose.Types.ObjectId, ref: "fixedAccount" }],
});

const BranchDetail = mongoose.model("branchDetail", branchDetailSchema);

module.exports = BranchDetail;
