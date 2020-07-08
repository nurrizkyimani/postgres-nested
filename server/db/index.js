const { Pool } = require("pg");

const pool = new Pool({
  user: "nurrizkyimani",
  host: "localhost",
  database: "yelp_note",
  password: "password123",
  port: 5432,
});

module.exports = {
  module: (text, params) => {
    pool.query(text, params);
  },
};
