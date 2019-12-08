const db = require('./dbConnect.js')
const queries = require('./dbQueries')

const getCloudList = {
	async readAll(req, res) {
		try {
			const query_text = queries.get_query('getCloudList',{});
			console.log(query_text);
			const { rows } = await db.runQuery(query_text);
			return res.send({ rows });
		} catch (error) {
			return res.send(error);
		}
	}
};

module.exports = getCloudList;
