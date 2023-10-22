const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "movies-database2",
  password: "postgres",
  port: 5432,
});

module.exports = pool;
