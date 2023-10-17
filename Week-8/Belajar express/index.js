const express = require("express");
const things = require("./things.js");
const pool = require("./queries");
const app = express();

app.get("/", function (req, res) {
  res.send("hello world???");
});

app.post("/", function (req, res) {
  res.send("hello world??? anjai slebew");
});
pool
app.use("/things", things);
app.listen(3000);
