const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const movies = require("./movies.js");
app.use("/movies", movies);

console.log(`app running at port: http://localhost:${port}`);
