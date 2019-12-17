const { Pool } = require('pg');
const queries = require('./dbQueries');

const db_config = {
	user: process.env.NODE_PGSQL_DB_USER,
	host: process.env.NODE_PGSQL_DB_HOST,
	database: process.env.NODE_PGSQL_DB_NAME,
	password: process.env.NODE_PGSQL_DB_PASSWORD,
	port: process.env.NODE_PGSQL_DB_PORT,
	ssl: true
}

const pool = new Pool(db_config);

function runQuery(query_code,query_parameters) {
	return new Promise((resolve, reject)=>{
		pool
                .connect()
                .then(client => {
			const query_text = queries.get_query(query_code,query_parameters);
                        return client
                                .query(query_text)
                                .then(res => {
                                        client.release();
					console.log('In database.js, executing ',query_code)
                                        resolve(res.rows);
                                })
                                .catch(err => {
                                        client.release();
                                        console.log(err.stack);
					reject(err);
                                })
                })
	})
}

module.exports.runQuery =runQuery;
