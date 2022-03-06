const { Schema, model } = require("mongoose");
const sahajFolloup = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);
module.exports = model("sahajFolloup", sahajFolloup);
