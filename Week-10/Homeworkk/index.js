const express = require("express");
const app = express();

const path = require("path");
const router = require("./routes/movies");
const port = 3000;

app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use(router);

app.listen(port);
