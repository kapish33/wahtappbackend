const { Schema, model } = require("mongoose");

const cources = new Schema(
  {
    startDateTime: { type: Date, required: true },
    endDateTime: { type: Date, required: true },
    courcesName: { type: String, required: true },
    url: { type: String, required: true, unique: true, url: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("cources", cources);
