const { Schema, model } = require("mongoose");

const user = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    city: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("user", user);
