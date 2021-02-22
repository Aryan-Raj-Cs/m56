const { Schema, model } = require("mongoose");

const CardDetails = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    creditCardNumber: {
      type: String,
      required: true,
    },
    creditCardDate: {
      type: String,
      required: true,
    },
    creditCardCCV: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("CardDetails", CardDetails);
