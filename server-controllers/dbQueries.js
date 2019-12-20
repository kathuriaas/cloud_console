var query_dict = {
	getCloudDetails: "select cloud_id,cloud_name,cloud_description from cloud_schema.cloud_details",
	getCloudNames: "select cloud_name from cloud_schema.cloud_details",
	getCloudIDs: "select cloud_id from cloud_schema.cloud_details"
	};

function get_query(query_cd,params) {
	var str = query_dict[query_cd];
	return str;
}

//Exporting for use in dbConnect
module.exports.get_query = get_query;
