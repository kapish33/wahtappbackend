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

router.get("/:type", async (req, res) => {
  // get all cources wich have starting date greater than today Date() 2022-03-09T02:05:00.000+00:00
  // and with courcesName: Sudarshan%20Kriya
  try {
    const cources = await Cources.find({
      startDateTime: { $gte: new Date() },
      courcesName: { $regex: req.params.type, $options: "i" },
    });
    res.status(200).send(cources);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
// delete all cources which is older than today Date() 2022-03-09T02:05:00.000+00:00
router.delete("/", async (req, res) => {
  try {
    const cources = await Cources.deleteMany({
      startDateTime: { $lt: new Date() },
    });
    res.status(200).send(cources);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
// get all cources
router.get("/d/m/d", async (req, res) => {
  try {
    const cources = await Cources.find();
    res.status(200).send(cources);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
// delete cource by id
router.delete("del/:id", async (req, res) => {
  try {
    const cource = await Cources.findByIdAndDelete(req.params.id);
    res.status(200).send(cource);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
module.exports = router;
