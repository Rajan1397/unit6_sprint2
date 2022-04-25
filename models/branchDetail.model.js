const mongoose = require("mongoose");

const branchDetailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  ifsc: { type: String, required: true },
  micr: { type: Number, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const BranchDetail = mongoose.model("branchDetails", branchDetailSchema);

module.exports = BranchDetail;
