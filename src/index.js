const express = require("express");

const orderController = require("./controllers/order.controller.js");
const userController = require("./controllers/user.controller.js");
const courceController = require("./controllers/cources.controller.js");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// app.use("/users", userController) // /register /login

app.use("/commands", orderController);
app.use("/users", userController);
app.use("/cources", courceController);

module.exports = app;
