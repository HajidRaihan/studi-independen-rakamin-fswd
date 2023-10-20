const express = require("express");
const app = express();

const multer = require("multer");
const path = require("path");
const port = 3000;

const profiles = [
  {
    name: "rizuki",
    phone: "08191234556",
    photo: "",
  },
  {
    name: "fendi",
    phone: "08191234556",
    photo: "",
  },
  {
    name: "emha",
    phone: "08191234556",
    photo: "",
  },
];

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "/upload"));
  },
  filename: (req, file, cb) => {
    cb(null, file.filename + "-" + Date.now() + path.extname(file.originalname));
  },
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.put("/contact/upload", multer({ storage: diskStorage }).single("photo"), (req, res) => {
  try {
    const file = req.file.path;
    console.log("ini file", file);
    if (!file) {
      res.status(400).send({
        status: false,
        data: "No file Selected",
      });
    }
    profiles[req.query.index] = req.file.path;
    res.send(file);
  } catch (error) {
    console.log(error);
  }
});

app.use("/upload", express.static(path.join(__dirname, "upload")));

app.listen(port);
