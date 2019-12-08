const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.NODE_PGSQL_DB_USER,
  host: process.env.NODE_PGSQL_DB_HOST,
  database: process.env.NODE_PGSQL_DB_NAME,
  password: process.env.NODE_PGSQL_DB_PASSWORD,
  port: process.env.NODE_PGSQL_DB_PORT,
})

function runQuery(query_txt) {
  return new Promise((resolve, reject) => {
    pool
      .query(query_txt)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject('err');
      });
  });
}

module.exports = { runQuery };
