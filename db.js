const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  post: 5432,
  database: "postgres"
});

module.exports = {
  query: (text, parameters) => pool.query(text, params)
};
