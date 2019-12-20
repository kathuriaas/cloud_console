const db = require('./database.js');

async function getCloudDetails(req, res) {
		try {
			console.log('In getCloudList.js');
			var resultset = await db.runQuery('getCloudDetails',{});
			return res.send(resultset);
		} catch (error) {
			console.log('Error in getCloudList.js');
			return res.send(error);
		}
	};

module.exports.getCloudDetails = getCloudDetails;
