const db = require('./connect_db.js');

async function getCloudNames(req, res) {
		try {
			var resultset = await db.runQuery('getCloudNames',{});
			return res.send(resultset);
		} catch (error) {
			console.log('Error in getCloudList.js');
			return res.send(error);
		}
	};

module.exports.getCloudNames = getCloudNames;
