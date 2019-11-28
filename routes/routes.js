var express = require('express');
var router = express.Router();

var home = require('../controllers/home');
var about = require('../controllers/about');


//Get home page
router.get('/', home.get_home);
router.get('/about', about.get_about);
//router.post('/', home.submit_form);

module.exports = router;
