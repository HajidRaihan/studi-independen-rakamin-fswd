const express = require("express");

const pool = require("./queries");
const app = express();
const router = express.Router();
const queries = require("./queries");
const { getFilm, getFilmById, getCategories, getFilmByCategoryId } = queries;

router.get("/film", (req, res) => {
  getFilm(req, res);
});

router.get("/film/:id", (req, res) => {
  getFilmById(req, res);
});

router.get("/category", (req, res) => {
  getCategories(req, res);
});

router.get("/category/:id", (req, res) => {
  getFilmByCategoryId(req, res);
});

module.exports = router;
