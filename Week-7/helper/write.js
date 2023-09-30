const fs = require("fs");

exports.writeModule = function (path, data) {
  fs.writeFile(path, data, (err) => {
    err ? console.log("gagal") : console.log("success");
  });
};
