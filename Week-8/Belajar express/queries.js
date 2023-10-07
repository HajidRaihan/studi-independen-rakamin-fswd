const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
});

pool.connect((err, res) => {
  if (err) {
    console.log(err);
  }
  console.log("connected");
});
module.exports = pool;
