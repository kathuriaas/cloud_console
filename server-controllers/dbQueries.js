var query_dict = {
	getCloudDetails: "select cloud_id,cloud_name,cloud_description from cloud_schema.cloud_details",
	getAwsServicesDetails: "select cloud_id,cloud_name,cloud_description from cloud_schema.cloud_details",
	addCloudDetails: "insert into cloud_schema.cloud_details values($1,$2,$3)"
	};

function get_query(query_cd) {
	var str = query_dict[query_cd];
	return str;
}

//Exporting for use in dbConnect
module.exports.get_query = get_query;
