const express = require("express");
const Users = require("../models/user.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).send(users);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;
