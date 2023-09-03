<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>comprehensible-input-bot
</h1>
<h3>◦ Bot that simplifies input. Exciting code process made easy!</h3>
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
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The project is a backend implementation of a chatbot that leverages the GPT-3.5 model API for generating chat-based responses. The core functionalities include handling HTTP requests, sending WhatsApp messages, making API calls, and generating text using the GPT-3 model. The project's purpose is to provide a robust and scalable backend for a chatbot application, allowing for seamless conversations with users while delivering personalized and dynamic responses. Its value proposition lies in its ability to automate and enhance customer interactions, enabling businesses to provide efficient and engaging support.

---

## ⚙️ Features

| Feature                | Description                           |
| ---------------------- | ------------------------------------- |
| **⚙️ Architecture**     | The codebase follows a server-client architecture, with an Express backend serving as the server and the frontend as the client. It uses RESTful API routes to handle HTTP requests and interacts with external services for WhatsApp messaging and language model API calls. The codebase exhibits a modular structure with separate files for different functionalities.    |
| **📖 Documentation**   | The codebase has well-documented code with informative inline comments and file-level descriptions. It provides clear explanations of the purpose and functionality of each component, making it easy for developers to understand and maintain the code. However, more comprehensive external documentation could be beneficial.   |
| **🔗 Dependencies**    | The codebase relies on multiple external dependencies such as Express, Twilio, dotenv, and OpenAI's GPT-3.5 language model API. These libraries provide essential functionality for server setup, WhatsApp messaging, environment variable management, and language generation.   |
| **🧩 Modularity**      | The codebase exhibits modularity by separating functionalities into individual files. Each file focuses on a specific task, such as server setup, messaging, translation, language generation, and API routes. This separation of concerns allows for easier code comprehension, maintainability, and facilitates future component interchangeability.    |
| **✔️ Testing**          | The codebase does not emphasize testing and lacks a dedicated testing strategy or test suite. Including tests, such as unit tests and API endpoint testing, could ensure the correctness and robustness of the system, especially given the critical nature of user-interactions and external service integrations.   |
| **⚡️ Performance**      | The performance of the codebase largely depends on the speed and efficiency of the external services it interacts with, such as the Twilio API and the GPT-3.5 language model API. The handling of large datasets and conversational history may impact the responsiveness of the server. Proper optimization and caching mechanisms can enhance performance.  |
| **🔐 Security**        | The codebase uses environment variables to securely manage credentials for services like Twilio. It avoids hardcoding sensitive information that may pose security risks if leaked. However, there is no apparent implementation of additional security measures, such as input validation, authentication, and authorization, which should be considered to protect user data and prevent malicious attacks.  |
| **🔀 Version Control** | The codebase utilizes Git for version control, enabling tracking of changes, collaboration, and maintaining multiple versions. It employs GitHub as the hosting platform, providing features like pull requests, issue tracking, and code review, enhancing collaboration and making it easier to manage code updates and continuous integration.    |
| **🔌 Integrations**    | The system integrates with Twilio for sending WhatsApp messages to users and OpenAI's GPT-3.5 language model API for generating conversational responses. The implemented API routes allow external systems to interact with the chatbot backend seamlessly. The integrations add critical functionalities and expand the reach of the chatbot system.   |
| **📶 Scalability**     | The codebase is structured in a way that facilitates future scalability. By following good design

---


## 📂 Project Structure




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
| [getTextFromChatGPT.js](https://github.com/dpletzke/comprehensible-input-bot/blob/main/utils/getTextFromChatGPT.js) | The provided code is a Node.js implementation of OpenAI's GPT-3.5 model API for generating chat-based responses. It includes functions for making API calls to generate responses, storing chat history, and handling errors. Additionally, there is a function for making a single GPT-3 API call without chat history. Overall, it provides the functionality to interact with the GPT-3.5 model for chatbot applications. |

</details>

<details closed><summary>Routes</summary>

| File                                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [messages.routes.js](https://github.com/dpletzke/comprehensible-input-bot/blob/main/routes/messages.routes.js) | This code is a backend implementation of a chatbot. It uses the Express framework to handle HTTP requests, and integrates with external functions to send WhatsApp messages, make API calls, and generate text using a language model (GPT). The code manages the flow of the conversation with users, prompting them for their language preferences, generating prompts and questions, and sending responses. Overall, it provides a robust and scalable backend for a chatbot application. |

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

```sh
npm start
```

### 🧪 Running Tests
```sh
npm test
```

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  INSERT-LICENSE-TYPE` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - `ℹ️  List any resources, contributors, inspiration, etc.`

---
