const express = require("express");
const router = express.Router();
const pool = require("../index");
const upload = require("../middelware/uploadMiddelware");
const controllers = require("../controllers/moviesController");

router.put("/movies/upload/:id", upload.single("photo"), controllers.uploadMovie);

module.exports = router;
