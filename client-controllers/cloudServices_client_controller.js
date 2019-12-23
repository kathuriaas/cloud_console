$(document).ready(function() {
	getCloudDetails();
});

function getCloudDetails() {
	$.get('/getCloudList').done(function(result){
		if (result.length>0) {
			for (i =0; i<result.length; i++) {
				$("#div_body_Clouds").append('<tr>' + 
					'<td>' + result[i].cloud_name + '</th>' +
					'<td>' + result[i].cloud_description + '</th>' +
					'</tr>');
			}
		}
});
}


function addCloud() {
	var _cloud_id = $("#cloud_seq_id").val();
	var _cloud_name = $("#cloud_name_id").val();
	var _cloud_desc = $("#cloud_desc_id").val();
	$.get('/addNewCloud', {cloud_id: _cloud_id, cloud_name: _cloud_name, cloud_desc: _cloud_desc}).done(function(result){
			alert("Cloud details added successfully");
		});
}
