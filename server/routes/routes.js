const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const CardDetails = require("../models/cardDetails");

router.post("/card", (req, res) => {
  const { name, number, expiry, cvc } = req.body;

  const CardDetails = new CardDetails({
    name: name,
    creditCardNumber: number,
    creditCardDate: expiry,
    creditCardCCV: cvc,
  });

  CardDetails.save()
    .then((user) => {
      console.log(user);
      return res.json({ result: user });
    })
    .catch((error) => {
      console.log(error);
    });

  return res.json({ result: req.user });
});

router.get("/hard", (req, res) => {
  return res.json({ result: "hello" });
});

module.exports = router;
