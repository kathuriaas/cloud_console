
exports.get_about = function(req,resp,next) {
        resp.render('about' , { title : "Cloud Console about" });
}
