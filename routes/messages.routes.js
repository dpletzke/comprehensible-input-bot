"use strict";

const express = require("express");
// const sendWhatsappMsg = require("../utils/sendWhatsappMsg");
const { APIcall, singleGPTCall } = require('../utils/getTextFromChatGPT');


const router = express.Router();

router.route("/msg").post(async (req, res) => {
  res.send({ message: "success" });
});

router.route("/testgpt").post(async(req, res) => {
  res.send({ result: await singleGPTCall(req.body.prompt) });
})

module.exports = router;
