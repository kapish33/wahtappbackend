const express = require("express");
const Users = require("../models/user.model");

const { Client, LocalAuth } = require("whatsapp-web.js");
const { v4: uuidv4 } = require("uuid");
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: false },
});

client.initialize();

client.on("qr", (qr) => {
  // NOTE: This event will not be fired if a session is specified.
  console.log("QR RECEIVED", qr);
});

client.on("authenticated", () => {
  console.log("AUTHENTICATED");
});

client.on("auth_failure", (msg) => {
  // Fired if session restore was unsuccessful
  console.error("AUTHENTICATION FAILURE", msg);
});

client.on("ready", () => {
  console.log("READY");
});
client.on("OTP", async (number) => {
  console.log("Sending OTP");
  const otp = uuidv4();
  client.sendMessage(number, otp);
});
// fire otp event

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    client.emit("OTP", "918707559369@c.us");
    console.log("OTP SENT");
    res.status(200).send(users);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;
