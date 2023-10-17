const express = require("express");
const { request } = require("http");
const jwt = require("jsonwebtoken");
const Pool = require("pg").Pool;
const morgan = require("morgan");
var swaggerJsDoc = require("swagger-jsdoc");
var swaggerUI = require("swagger-ui-express");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "movies-database",
  password: "postgres",
  port: 5432,
});

const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(express.json());
// Logging
app.use(morgan("tiny"));

// post  movie
app.post("/add-film", verifyUser, (req, res) => {
  const { title, genres, year } = req.body;

  try {
    pool.query(
      "INSERT INTO movies(title, genres, year) VALUES($1, $2, $3) RETURNING *",
      [title, genres, year],
      (err, result) => {
        if (err) {
          res.status(500).json({ message: "internal server error" });
        }

        res.status(201).json({
          message: "Film berhasil di tambahkan",
          newMovie: result.rows,
        });
      }
    );
  } catch (error) {
    console.error("Error saat menambahkan data film", error);
    res.status(500).json({ error: "Terjadi kesalahan saat menambahkan data film " });
  }
});

// get all list movie
app.get("/film", verifyUser, (req, res) => {
  const page = parseInt(req.query.page) || 1; // Halaman yang diminta, default ke halaman 1
  const perPage = 10; // Jumlah data per halaman, default ke 10

  const offset = (page - 1) * perPage; // Hitung offset berdasarkan halaman

  pool.query(
    "SELECT * FROM movies ORDER BY id LIMIT $1 OFFSET $2",
    [perPage, offset],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.rows);
    }
  );
});

// get all list users
app.get("/users", verifyUser, (req, res) => {
  const page = parseInt(req.query.page) || 1; // Halaman yang diminta, default ke halaman 1
  const perPage = 10; // Jumlah data per halaman, default ke 10

  const offset = (page - 1) * perPage; // Hitung offset berdasarkan halaman

  pool.query(
    "SELECT * FROM users ORDER BY id LIMIT $1 OFFSET $2",
    [perPage, offset],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.rows);
    }
  );
});

// get movie by id
app.get("/film/:id", verifyUser, (req, res) => {
  const movieId = req.params.id;
  pool.query("SELECT * FROM movies WHERE id = $1", [movieId], (err, result) => {
    if (err) {
      throw err;
    } else if (result.rows.length === 0) {
      res.status(404).json({ message: "movie not found" });
    }
    res.send(result.rows);
  });
});

// edit film by id
app.put("/film/:id", verifyUser, (req, res) => {
  const { title, genres, year } = req.body;
  const movieId = req.params.id;

  try {
    pool.query(
      "UPDATE movies SET title = $1, genres = $2, year = $3 WHERE id = $4",
      [title, genres, year, movieId],
      (err, result) => {
        if (err) {
          res.status(500).json({ message: "internal server error" });
        }
        res.status(201).json({
          message: "Film berhasil di diedit",
          editedMovie: result.rows,
        });
      }
    );
  } catch (error) {
    console.error("Error saat menambahkan data film", error);
    res.status(500).json({ error: "Terjadi kesalahan saat menambahkan data film " });
  }
});

// delete film by id
app.delete("/film/:id", verifyUser, (req, res) => {
  const movieId = req.params.id;

  try {
    pool.query("DELETE FROM movies WHERE id = $1", [movieId], (err, result) => {
      if (err) {
        res.status(500).json({ message: "internal server error" });
      }
      res.status(201).json({
        message: "Film berhasil di hapus",
        deletedMovie: result.rows,
      });
    });
  } catch (error) {
    console.error("Error saat menghapus film", error);
    res.status(500).json({ error: "Terjadi kesalahan saat menghapus film " });
  }
});

// api login
app.post("/login", verifyUser, (req, res) => {
  const { email, password } = req.body;
  try {
    pool.query("SELECT * FROM users WHERE email = $1", [email], (err, result) => {
      if (err) {
        throw err;
      }
      if (result.rows.length === 0) {
        return res.status(401).json({
          message: "data yang dimasukkan tidak benar",
        });
      }
      if (result.rows[0].password !== password) {
        return res.status(401).json({
          message: "data yang dimasukkan tidak benar",
        });
      }
      jwt.sign(email, "secret", (err, token) => {
        if (err) {
          console.log(err);
          res.sendStatus(304);
          return;
        }
        const Token = token;
        res.json({
          user: email,
          token: Token,
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
});

// api register
app.post("/register", (req, res) => {
  const { email, password } = req.body;
  try {
    pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id",
      [email, password],
      (err, result) => {
        if (err) {
          res.status(500);
          console.log(err);
        }
        res.status(201).json({
          message: "User created",
          user: email,
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
});

// middelware
function verifyUser(req, res, next) {
  const bearer = req.headers.bearer;
  jwt.verify(bearer, "secret", (err, data) => {
    if (err) {
      console.log(err.message);
      res.json(err);
      return;
    }
    req.body = data;
    next();
  });
}

app.listen(3000);
