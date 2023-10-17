const express = require("express");
const router = express.Router();

const movies = [
  { id: 101, title: "The Shawshank Redemption", year: 2002, rating: 8.4 },
  { id: 102, title: "The Batman", year: 2022, rating: 9.4 },
  { id: 103, title: "Anvengers", year: 2013, rating: 8.0 },
  { id: 104, title: "Captain America", year: 2010, rating: 7.4 },
];

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:id[0-9]{3,}", (req, res) => {
  const currMovie = movies.filter(function (movie) {
    if (movie.id == req.params.id) {
      return true;
    }

    if (currMovie.length == 1) {
      res.json(currMovie[0]);
    } else {
      res.status(404);
      res.json({ message: "not found" });
    }
  });
});
module.exports = movies;
