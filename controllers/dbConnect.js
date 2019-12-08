const Client = require('pg').Client

const db_config = {
	user: process.env.NODE_PGSQL_DB_USER,
	host: process.env.NODE_PGSQL_DB_HOST,
	database: process.env.NODE_PGSQL_DB_NAME,
	password: process.env.NODE_PGSQL_DB_PASSWORD,
	port: process.env.NODE_PGSQL_DB_PORT,
	ssl: true
}

const client = new Client(db_config)

function runQuery(query_txt) {
	client.connect(err => {
		if (err) {
			console.error('error connecting postgres DB', err.stack,query_txt)
		} else {
			client.query(query_txt, (err,res) => {
				console.log(res);
				client.end();
			});
		}
		});
}

module.exports.runQuery =runQuery;
