const express = require("express");
const things = require("./things.js");
const client = require("./queries.js");
const app = express();

app.get("/", function (req, res) {
  res.send("hello world???");
});

app.post("/", function (req, res) {
  res.send("hello world??? anjai slebew");
});
client;
app.use("/things", things);
app.listen(3000);
