require("dotenv").config("./config.env");

const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Your Server is Running at ${PORT}`);
});
