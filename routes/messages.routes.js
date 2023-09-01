"use strict";

const express = require("express");
// const sendWhatsappMsg = require("../utils/sendWhatsappMsg");

const router = express.Router();

router.route("/msg").post(async (req, res) => {
  res.send({ message: "success" });
});

module.exports = router;
