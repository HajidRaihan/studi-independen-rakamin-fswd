const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dvdrental",
  password: "postgres",
  port: 5432,
});

const getFilm = (req, res) => {
  pool.query("SELECT * FROM film", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
};

const getFilmById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * from film WHERE film_id=$1", [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
};

const getCategories = (req, res) => {
  pool.query("SELECT * FROM category", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
};

const getFilmByCategoryId = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT film.title, category.name as category FROM film JOIN film_category ON film.film_id = film_category.film_id JOIN category ON film_category.category_id = category.category_id WHERE category.category_id = $1;",
    [id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.rows);
    }
  );
};
pool.connect((err, res) => {
  if (err) {
    console.log(err);
  }
  console.log("connected");
});

pool.connect((err, res) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected");
});

module.exports = { pool, getFilm, getFilmById, getCategories, getFilmByCategoryId };
