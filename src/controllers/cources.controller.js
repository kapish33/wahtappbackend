const express = require("express");
const Cources = require("../models/cources.modal");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const cource = await Cources.create(req.body);
    res.status(201).send(cource);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const cources = await Cources.find();
    res.status(200).send(cources);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;
