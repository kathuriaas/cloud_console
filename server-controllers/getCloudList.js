const db = require('./database.js');

async function getCloudDetails(req, res) {
		try {
			console.log('In getCloudList.js');
			var resultset = await db.runQuery('getCloudDetails',[]);
			return res.send(resultset);
		} catch (error) {
			console.log('Error in getCloudList.js');
			return res.send(error);
		}
	};

async function addNewCloud(req, res) {
                try {
			var resultset = await db.runQuery('addCloudDetails',[req.query.cloud_id, req.query.cloud_name, req.query.cloud_desc]);
                        return res.send(resultset);
                } catch (error) {
                        return res.send(error);
                }
        };


module.exports.getCloudDetails = getCloudDetails;
module.exports.addNewCloud = addNewCloud;
