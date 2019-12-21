var express = require('express');
var router = express.Router();

//Import controllers
var getCloudList = require('../server-controllers/getCloudList');
var awsServicesPage = require('../server-controllers/awsServicesPage');

//Get home page
router.get('/', function(req,res){
	res.render('home_view' , { title : "Cloud Console Home" });
});

//Get about page
router.get('/about', function(req,res){
        res.render('about_view' , { title : "Cloud Console About" });
});


//Get Admin page
router.get('/admin', function(req,res){
        res.render('admin_view' , { title : "Cloud Console Admin" });
});

//Get cloud list
router.get('/getCloudList', function(req,res){
	getCloudList.getCloudDetails(req,res);
});


//Add New Cloud
router.get('/addNewCloud', function(req,res){
	getCloudList.addNewCloud(req,res);	
});

//AWS services
router.get('/awsServices', function(req,res){
	res.render('awsServices_view' , { title : "AWS Services" });
});

module.exports = router;
