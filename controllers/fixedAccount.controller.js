const express = require("express");
const router = express.Router();

const FixedAccount = require("../models/fixedAccount.model");

router.get("/", async (req, res) => {
  try {
    const fixedAccount = await FixedAccount.find();
    return res.send(fixedAccount);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const fixedAccount = await FixedAccount.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
