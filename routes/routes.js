var express = require('express');
var router = express.Router();

var home = require('../controllers/home');

//Get home page
router.get('/', home.get_home);

module.exports = router;
