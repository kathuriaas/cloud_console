
exports.get_home = function(req,resp,next) {
	resp.render('home_view' , { title : "Cloud Console Home" });
}
