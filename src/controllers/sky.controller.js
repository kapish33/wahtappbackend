const express = require("express");
const Sky = require("../models/sky.modal");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await Sky.create(req.body);
    res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const users = await Sky.find();
    res.status(200).send(users);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
router.delete("/:number", async (req, res) => {
  try {
    const user = await Sky.findOneAndDelete({ phoneNumber: req.params.number });
    res.status(200).send(user);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
module.exports = router;
