
exports.get_home = function(req,resp,next) {
	resp.render('home' , { title : "Cloud Console Home" });
}
