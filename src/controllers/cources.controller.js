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
  // get all cources wich have starting date greater than today Date() 2022-03-09T02:05:00.000+00:00
  try {
    const cources = await Cources.find({
      startDateTime: { $gte: new Date() },
    });
    res.status(200).send(cources);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;
