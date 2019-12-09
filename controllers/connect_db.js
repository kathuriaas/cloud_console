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
const query_text = queries.get_query('getCloudNames',{});

async function runQuery(query_text,query_parameters) {
	pool
		.connect()
		.then(client => {
			.query(query_text)
			.then(res => {
				return res;
				client.release();
				console.log('client');
				return('client');
				})
				.catch(err => {
					client.release()
					console.log(err.stack)
				})
		})
}

module.exports.runQuery =runQuery;
