// https://www.geeksforgeeks.org/how-to-use-chatgpt-api-in-nodejs/
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

let APIcall = async () => {
const newConfig = new Configuration({
	apiKey: process.env.OPENAI_SECRET_KEY
});
const openai = new OpenAIApi(newConfig);
	
const chatHistory = []; // todo look up based on phone number or something else... DB?
const user_input = readlineSync.question("Enter your input: "); // todo get from parameter of function
const messageList = chatHistory.map(([input_text, completion_text]) => ({
role: "user" === input_text ? "ChatGPT" : "user",
content: input_text
}));
messageList.push({ role: "user", content: user_input });

try {
const GPTOutput = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    prompt: user_input,
});

const output_text = GPTOutput.data.choices[0].message.content;
console.log(output_text);

chatHistory.push([user_input, output_text]);
} catch (err) {
if (err.response) {
    console.log(err.response.status);
    console.log(err.response.data);
} else {
    console.log(err.message);
}
}
};

let singleGPTCall = async(user_input) => {
    console.log("user input is: ", user_input)
    const newConfig = new Configuration({
        apiKey: process.env.OPENAI_SECRET_KEY
    });
    const openai = new OpenAIApi(newConfig);
    try {
        const GPTOutput = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: user_input,
            max_tokens: 1000
        });
        // console.log(GPTOutput.data.choices[0].text);        // return GPTOutput['choices'][0]['text']
        return GPTOutput.data.choices[0].text
    } catch (err) {
        if (err.response) {
            console.log(err.response.status);
            console.log(err.response.data);
        } else {
            console.log(err.message);
        }
    }
}

module.exports = {APIcall, singleGPTCall };
