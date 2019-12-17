$(document).ready(function() {
	getAwsServicesDetails();
});

function getAwsServicesDetails() {
	$.get('getCloudList').done(function(result){
		if (result.length>0) {
			for (i =0; i<result.length; i++) {
				$("#div_body_awsServices").append('<tr>' + 
					'<td>' + result[i].cloud_name + 
					'</td> </tr>');
			}
		}

});
}

