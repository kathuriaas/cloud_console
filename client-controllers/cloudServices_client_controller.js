$(document).ready(function() {
	getCloudDetails();
});

function getCloudDetails() {
	$.get('/getCloudList').done(function(result){
		if (result.length>0) {
			for (i =0; i<result.length; i++) {
				$("#div_body_Clouds").append('<tr>' + 
					'<th scope="row">' + result[i].cloud_id + '</th>' + 
					'<td>' + result[i].cloud_name + '</th>' +
					'<td>' + result[i].cloud_description + '</th>' +
					'</tr>');
			}
		}
});
}


function addCloud() {
	alert($("#service_id").val());
}

