const express = require("express");
const Sahaj = require("../models/sahaj.modal");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await Sahaj.create(req.body);
    res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    // get all users which had subscriber as true
    const users = await Sahaj.find({ subscriber: true });
    res.status(200).send(users);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.delete("/:number", async (req, res) => {
  try {
    const user = await Sahaj.findOneAndDelete({
      phoneNumber: req.params.number,
    });
    res.status(200).send(user);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
module.exports = router;
