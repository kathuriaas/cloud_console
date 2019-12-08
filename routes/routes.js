var express = require('express');
var router = express.Router();

//Import controllers
var home = require('../controllers/home');
var about = require('../controllers/about');
var getCloudList = require('../controllers/getCloudList');

//Get home page
router.get('/', function(req,res){
	home.get_home(req,res);
});

//Get about page
router.get('/about', function(req,res){
        about.get_about(req,res);
});

//Get cloud list page
router.get('/getCloudList', function(req,res){
	getCloudList.readAll(req,res);
});

module.exports = router;
