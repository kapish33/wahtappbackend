const express = require("express");
const Orders = require("../models/Orders.modal.js");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const order = await Orders.create(req.body);
    res.status(201).send(order);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const orders = await Orders.find();
    // get key, values out of the orders array
    const ordersObj = orders.map((order) => {
      return {
        command: order.key,
        output: order.value,
      };
    });

    res.status(200).send(ordersObj);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const order = await Orders.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(order);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const order = await Orders.findByIdAndDelete(req.params.id);
    res.status(200).send(order);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;
