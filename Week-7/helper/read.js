const fs = require("fs");

exports.readModule = function (path) {
  fs.readFile(path, "utf-8", (err, data) => {
    err ? console.log("gagal") : console.log(data);
  });
};
