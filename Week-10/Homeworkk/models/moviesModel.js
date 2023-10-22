const pool = require("../config/connection");

const uploadMovie = (data, callback) => {
  const query = `UPDATE movies SET photo = $1 WHERE id = $2 RETURNING *`;

  pool.query(query, data, callback);
};

module.exports = { uploadMovie };
