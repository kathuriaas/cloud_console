var query_dict = {
	getCloudList: "select cloud_name from cloud_schema.cloud_details",
	getCloudIDs: "select cloud_id from cloud_schema.cloud_details"
	};

function get_query(query_cd,params) {
	var str = query_dict[query_cd];
//	console.log(str);
	return str;
}

module.exports.get_query = get_query;
