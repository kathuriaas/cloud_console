
exports.get_home = function(req,res,next) {
	res.render('home_view' , { title : "Cloud Console Home" });
}
