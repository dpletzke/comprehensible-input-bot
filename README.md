<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>comprehensible-input-bot
</h1>
<h3>◦ Whatsapp bot that generates Spanish and English stories with reading comprehension questions!</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Twilio-F22F46.svg?style&logo=Twilio&logoColor=white" alt="Twilio" />
<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style&logo=Nodemon&logoColor=white" alt="Nodemon" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style&logo=Axios&logoColor=white" alt="Axios" />

<img src="https://img.shields.io/badge/OpenAI-412991.svg?style&logo=OpenAI&logoColor=white" alt="OpenAI" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
</p>
<img src="https://img.shields.io/github/languages/top/dpletzke/comprehensible-input-bot?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/dpletzke/comprehensible-input-bot?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/dpletzke/comprehensible-input-bot?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/dpletzke/comprehensible-input-bot?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [📄 License](#-license)

---


## 📍 Overview

The project is a backend implementation of a chatbot that leverages the text-davinci-002 model API to generate stories in either Spanish or English and reading comprehension questions. The core functionalities include handling HTTP requests, sending WhatsApp messages, making API calls, and generating text using the LLM model. The project's purpose is to provide a demo of a chatbot application for the 'Hack the Classroom' hackathon hosted by MLH. 

---

## ⚙️ Features

| Feature                | Description                           |
| ---------------------- | ------------------------------------- |
| **⚙️ Architecture**     | The codebase follows a server-client architecture, with an Express backend serving as the server and the frontend as the client. It uses RESTful API routes to handle HTTP requests and interacts with external services for WhatsApp messaging and language model API calls. The codebase exhibits a modular structure with separate files for different functionalities.       |
| **🔗 Dependencies**    | The codebase relies on multiple external dependencies such as Express, Twilio, dotenv, and OpenAI's text-davinci-002 language model API. These libraries provide essential functionality for server setup, WhatsApp messaging, environment variable management, and language generation.   |

---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                            | Summary                                                                                                                                                                                                                  |
| ---                                                                             | ---                                                                                                                                                                                                                      |
| [app.js](https://github.com/dpletzke/comprehensible-input-bot/blob/main/app.js) | This code sets up a server using Express and enables support for JSON and URL-encoded request bodies. It also enables CORS and defines routes for an API. It handles shutdown signals and listens on the specified port. |

</details>

<details closed><summary>Utils</summary>

| File                                                                                                                | Summary                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                                 | ---                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [sendWhatsappMsg.js](https://github.com/dpletzke/comprehensible-input-bot/blob/main/utils/sendWhatsappMsg.js)       | This code utilizes Twilio and dotenv libraries to send WhatsApp messages to users. It fetches the necessary credentials from environment variables, creates a Twilio client, and uses it to send a message from a specified Twilio phone number to a user's phone number. The function returns the message object.                                                                                                           |
| [englishify.js](https://github.com/dpletzke/comprehensible-input-bot/blob/main/utils/englishify.js)                 | This code exports a function that takes an input parameter and returns its corresponding translation in either English or Spanish. It uses an object to map the input values to their translations. If the input is "inglés", it returns "english", and if the input is "español", it returns "spanish". The code handles input values in both lowercase and uppercase letters.                                              |
| [getTextFromChatGPT.js](https://github.com/dpletzke/comprehensible-input-bot/blob/main/utils/getTextFromChatGPT.js) | The provided code is a Node.js implementation of OpenAI's text-davinci-002 model API for generating chat-based responses. It includes functions for making API calls to generate responses, storing chat history, and handling errors. Additionally, there is a function for making a single text-davinci-002 API call without chat history. Overall, it provides the functionality to interact with the text-davinci-002 model for chatbot applications. |

</details>

<details closed><summary>Routes</summary>

| File                                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [messages.routes.js](https://github.com/dpletzke/comprehensible-input-bot/blob/main/routes/messages.routes.js) | This file defines routes using Express.js, which assists users in language learning and comprehension testing via WhatsApp. It manages user interactions, prompts users to select languages and difficulty levels, generates stories and comprehension questions, and ultimately evaluates user responses. The code demonstrates a structured conversation flow and integration with a GPT-based language model for natural language processing. |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites:
> - `ℹ️ Twilio account with api key`
> - `ℹ️ OpenAI API key`
> - `ℹ️ ngrok installed`

### 📦 Installation

1. Clone the comprehensible-input-bot repository:
```sh
git clone https://github.com/dpletzke/comprehensible-input-bot
```

2. Change to the project directory:
```sh
cd comprehensible-input-bot
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using comprehensible-input-bot

Fill out the .env file with your Twilio and OpenAI credentials.

```sh
npm start
```

### 🧪 Running Tests
```sh
npm test
```

---

## 📄 License

This project is licensed under the `ℹ️  MIT` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---
