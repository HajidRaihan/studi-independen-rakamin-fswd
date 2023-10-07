const express = require("express");
const { request } = require("http");
const pool = require("./queries");
const router = require("./routes");
const app = express();

app.use("/", router);

app.listen(3000);
