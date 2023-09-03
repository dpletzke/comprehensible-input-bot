const express = require("express");
const cors = require("cors");
const routes = require("./routes/messages.routes");

require("dotenv").config();

const app = express();

let interval;
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

app.get("/", async (req, res) => {
  res.send("Hello world!");
});

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

// v1 api routes
app.use(routes);

const shutdown = () => {
  clearInterval(interval);
  client.close();
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
