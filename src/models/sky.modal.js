const { Schema, model } = require("mongoose");
const skyFollowup = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    subscriber: { type: Boolean, required: true },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

module.exports = model("skyFollowup", skyFollowup);
