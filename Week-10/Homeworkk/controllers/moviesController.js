const multer = require("multer");
const path = require("path");
const movies = require("../models/moviesModel");

const uploadMovie = (req, res) => {
  const id = req.params.id;
  const file = req.file;
  if (!file) {
    return res.status(400).json({
      status: false,
      data: "no file selected",
    });
  }
  const photoPath = file.path;
  console.log(photoPath);

  movies.uploadMovie([photoPath, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        status: false,
        error: "terjadi error saat upload foto",
      });
    }
    const newPhoto = result.rows[0];
    res.status(200).json({
      status: "success",
      data: newPhoto,
    });
  });
};

module.exports = { uploadMovie };
