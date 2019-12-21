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

async function addNewCloud(req, res) {
                try {
                        var resultset = await db.runQuery('addCloudDetails',{});
                        return res.send(resultset);
                } catch (error) {
                        return res.send(error);
                }
        };


module.exports.getCloudDetails = getCloudDetails;
module.exports.addNewCloud = addNewCloud;
