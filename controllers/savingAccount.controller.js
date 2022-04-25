const express = require("express");
const router = express.Router();

const SavingAccount = require("../models/savingAccount.model");

router.get("/", async (req, res) => {
  try {
    const savingAccount = await SavingAccount.find();
    return res.send(savingAccount);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const savingAccount = await SavingAccount.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
