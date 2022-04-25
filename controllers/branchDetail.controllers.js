const express = require("express");
const router = express.Router();

const BranchDetail = require("../models/branchDetail.model");

router.get("/", async (req, res) => {
  try {
    const branchDetail = await BranchDetail.find();
    return res.send(branchDetail);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const branchDetail = await BranchDetail.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
