"use strict";

const express = require("express");
const sendWhatsappMsg = require("../utils/sendWhatsappMsg");
const { APIcall, singleGPTCall } = require("../utils/getTextFromChatGPT");
const englishify = require("../utils/englishify");

const router = express.Router();

const users = {};

const START = "START";
const WAITING_USER_LANGUAGE = "WAITING_USER_LANGUAGE";
const WAITING_OUTPUT_LANGUAGE = "WAITING_OUTPUT_LANGUAGE";
const WAITING_LANGUAGE_LEVEL = "WAITING_LANGUAGE_LEVEL";
const WAITING_ANSWERS = "WAITING_ANSWERS";

const english = "english";

const flowStatusMap = (userLanguage) => ({
  [START]: {
    nextPrompt: `Welcome to Comprend-o-Bot! Say 'english' or 'spanish' to select the language you speak. 
    Bienvenido a Comprend-o-Bot! Escribe 'inglés' o 'español' depende de la lengua que ya habla.`,
  },
  [WAITING_USER_LANGUAGE]: {
    testFunction: (input) =>
      ["english", "spanish", "inglés", "español"].includes(input),
    nextPrompt:
      userLanguage === english
        ? "Please enter the language you'd like to learn. ('english' or 'spanish')"
        : "Escribe la lengua que te gustaría aprender. ('inglés' o 'español')",
  },
  [WAITING_OUTPUT_LANGUAGE]: {
    testFunction: (input) =>
      ["english", "spanish", "inglés", "español"].includes(input),
    nextPrompt:
      userLanguage === english
        ? "Please enter the difficulty of the language you'd like to learn. (A1, A2, B1 ...)"
        : "Escribe el nivel de la lengua que te gustaría aprender (A1, A2, B1 ...)",
  },
  [WAITING_LANGUAGE_LEVEL]: {
    testFunction: (input) =>
      ["a1", "a2", "b1", "b2", "c1", "c2"].includes(input),
    nextPrompt: userLanguage === english ? "Generating..." : "Generando...",
  },
});

const handleCase = async ({
  currentCase,
  nextCase,
  Body,
  user,
  userProperty,
  bodyMappingFunction,
}) => {
  const cleanedInput = Body.toLowerCase().trim();
  if (
    !flowStatusMap(user.userLanguage)[currentCase].testFunction(cleanedInput)
  ) {
    await sendWhatsappMsg("Error! Try again.", user.phone);
  } else {
    user[userProperty] = bodyMappingFunction
      ? bodyMappingFunction(cleanedInput)
      : cleanedInput;
    await sendWhatsappMsg(
      flowStatusMap(user.userLanguage)[currentCase].nextPrompt,
      user.phone
    );
    user.status = nextCase;
  }
  console.log("user: ", user);
};

const sendPromptResponse = async (user) => {
  const prompt = {
    spanish: `Redactame una historia en español en nivel ${user.languageLevel} con 20 frases.`,
    english: `Tell me a story in English at level ${user.languageLevel} with 20 sentences.`,
  }[user.outputLanguage];
  const response = await singleGPTCall(prompt);
  await sendWhatsappMsg(response, user.phone);
  return response;
};

const genQuestions = async (user, story) => {
  const prompt = {
    spanish: `Haz tres preguntas de comprensión lectora de verdadero/falso para la siguiente historia: ${story}`,
    english: `Make three true/false reading comprehension questions for the following story: ${story}`,
  }[user.outputLanguage];
  const questionDescrip = {
    spanish: `Responde a estas tres preguntas de verdadero/falso y envía un mensaje para ver las respuestas.`,
    english: `Answer these three true/false questions and send any message to see the answers.`,
  }[user.outputLanguage];
  const response = await singleGPTCall(prompt);
  await sendWhatsappMsg(`${questionDescrip} \n ${response}`, user.phone);
  return response;
};

const genAnswers = async (user, story, questions) => {
  const prompt = {
    spanish: `Dada la siguiente historia, ¿cuáles son las respuestas a las preguntas de verdadero/falso? Historia: ${story}, Preguntas: ${questions}`,
    english: `Given the following story, what are the answers to the yes and no questions? Story: ${story}, Questions: ${questions}`,
  }[user.outputLanguage];
  const response = await singleGPTCall(prompt);
  await sendWhatsappMsg(response, user.phone);
  return response;
};

router.route("/msg").post(async (req, res) => {
  const { From: phone, Body } = req.body;

  if (!users[phone]) {
    users[phone] = {
      status: START,
      phone,
      userLanguage: null,
      outputLanguage: null,
      languageLevel: null,
    };
  }
  const user = users[phone];
  switch (user.status) {
    case START:
      sendWhatsappMsg(
        flowStatusMap(user.userLanguage)[START].nextPrompt,
        phone
      );
      user.status = WAITING_USER_LANGUAGE;
      console.log("user: ", user);
      break;  
    case WAITING_USER_LANGUAGE:
      handleCase({
        currentCase: WAITING_USER_LANGUAGE,
        nextCase: WAITING_OUTPUT_LANGUAGE,
        Body,
        user,
        userProperty: "userLanguage",
        bodyMappingFunction: englishify,
      });
      break;
    case WAITING_OUTPUT_LANGUAGE:
      handleCase({
        currentCase: WAITING_OUTPUT_LANGUAGE,
        nextCase: WAITING_LANGUAGE_LEVEL,
        Body,
        user,
        userProperty: "outputLanguage",
        bodyMappingFunction: englishify,
      });
      break;
    case WAITING_LANGUAGE_LEVEL:
      await handleCase({
        currentCase: WAITING_LANGUAGE_LEVEL,
        nextCase: WAITING_ANSWERS,
        Body,
        user,
        userProperty: "languageLevel",
      });
      user.story = await sendPromptResponse(user);
      user.questions = await genQuestions(user, user.story);
      break;
    case WAITING_ANSWERS:
      const answers = await genAnswers(user, user.story, user.questions);
      user.status = START;
      break;
    default:
      const message = await sendWhatsappMsg(
        "Error! Something happened.",
        phone
      );
      console.error(user);
      res.send(message);
  }
});

router.route("/testgpt").post(async (req, res) => {
  res.send({ result: await singleGPTCall(req.body.prompt) });
});

module.exports = router;
