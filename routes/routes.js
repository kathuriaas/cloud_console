var express = require('express');
var router = express.Router();

//Import controllers
var getCloudList = require('../server-controllers/getCloudList');

//Get home page
router.get('/', function(req,res){
	res.render('home_view' , { title : "Cloud Console Home" });
});

//Get about page
router.get('/about', function(req,res){
        res.render('about_view' , { title : "Cloud Console About" });
});

//Get AWS Services page
router.get('/awsServices', function(req,res){
        res.render('aws_view' , { title : "AWS Cloud Services" });
});


//Get cloud list page
router.get('/getCloudList', function(req,res){
	getCloudList.getCloudNames(req,res);
});

module.exports = router;
