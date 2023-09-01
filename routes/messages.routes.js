"use strict";

const express = require("express");
const sendWhatsappMsg = require("../utils/sendWhatsappMsg");
const { APIcall, singleGPTCall } = require('../utils/getTextFromChatGPT');


const router = express.Router();

const users = {};

const START = "START";
const WAITING_USER_LANGUAGE = "WAITING_USER_LANGUAGE";
const WAITING_PROMPT_LANGUAGE = "WAITING_PROMPT_LANGUAGE";
const WAITING_TOPIC = "WAITING_TOPIC";
const DONE = "DONE";

const messagesAndInputsTest = {
  [START]: {
    text: "Welcome to Comprehensible Input Bot! Please enter the language you speak.",
    pattern: /w+/,
  },
  [WAITING_USER_LANGUAGE]: {
    text: "Please enter the language you'd like to learn.",
    pattern: /w+/,
  },
  [WAITING_PROMPT_LANGUAGE]: {
    text: "Please enter the language you'd like to receive prompts in.",
    pattern: /w+/,
  },
  [WAITING_TOPIC]: {
    text: "Please enter a topic you'd like to learn about.",
    pattern: /w+/,
  },
  [DONE]: {
    text: "Thank you!",
    pattern: /w+/,
  },
};

const handleCase = ({ currentCase, nextCase, Body, phone, userProperty }) => {
  if (!messagesAndInputsTest[currentCase].pattern.test(Body)) {
    sendWhatsappMsg("Error! Try again.", phone);
  } else {
    users[phone][userProperty] = Body;
    sendWhatsappMsg(messagesAndInputsTest[currentCase].text, phone);
    users[phone].status = nextCase;
  }
};

router.route("/msg").post(async (req, res) => {
  const { From: phone, Body } = req.body;

  if (!users[phone]) {
    users[phone] = { status: START };
  }
  switch (users[phone].status) {
    case START:
      sendWhatsappMsg(messagesAndInputsTest[START].text, phone);
      users[phone].status = WAITING_USER_LANGUAGE;
      break;
    case WAITING_USER_LANGUAGE:
      handleCase({
        currentCase: WAITING_USER_LANGUAGE,
        nextCase: WAITING_PROMPT_LANGUAGE,
        Body,
        phone,
        userProperty: "userLanguage",
      });
      break;
    case WAITING_PROMPT_LANGUAGE:
      handleCase({
        currentCase: WAITING_PROMPT_LANGUAGE,
        nextCase: WAITING_TOPIC,
        Body,
        phone,
        userProperty: "promptLanguage",
      });
      break;
    case WAITING_TOPIC:
      handleCase({
        currentCase: WAITING_TOPIC,
        nextCase: DONE,
        Body,
        phone,
        userProperty: "topic",
      });
      break;
    case DONE:
      sendWhatsappMsg(
        "Thank you! We will send you a message when we find a match.",
        phone
      );
      users[phone].status = START;
      break;
    default:
      const message = await sendWhatsappMsg("Error! Try again.", phone);

      res.send(message);
  }
});

router.route("/testgpt").post(async(req, res) => {
  res.send({ result: await singleGPTCall(req.body.prompt) });
})

module.exports = router;
