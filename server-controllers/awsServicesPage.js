const db = require('./database.js');

async function getAwsServicesDetails(req, res) {
		try {
			console.log('In getAwsServicesDetails.js');
			var resultset = await db.runQuery('getAwsServicesDetails',{});
			return res.send(resultset);
		} catch (error) {
			console.log('Error in getAwsServicesDetails.js');
			return res.send(error);
		}
	};

module.exports.getAwsServicesDetails = getAwsServicesDetails;
