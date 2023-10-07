const express = require("express");
const router = express.Router();

router.get("/:name/:id", function (req, res) {
  res.send(`name ${req.params.name} id ${req.params.id} `);
});

router.post("/", function (req, res) {
  res.send("hello from post");
});

router.put("/put", function (req, res) {
  res.send("hello from put");
});

module.exports = router;
