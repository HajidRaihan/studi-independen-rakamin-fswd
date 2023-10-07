var fs = require("fs");
var pool = require("../queries");

const seedQuery = fs.readFileSync("db/seeding.sql", { encoding: "utf8" });
pool.query(seedQuery, (err, res) => {
  console.log(err, res);
  console.log("Seeding Completed!");
  pool.end();
});
