
exports.get_home = function(req,resp,next) {
	resp.render('home' , { temp : "hi there" });
}
