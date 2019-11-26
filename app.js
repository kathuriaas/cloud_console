const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
const dotenv = require('dotenv');

//Initilize app
const app = express();

//Load view engine
app.engine('handlebars',exphbs());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','handlebars');

//Route to home page
app.get('/', function(req,resp){
	resp.render('home');
});

//Route to about page
app.get('/about', function(req,resp){
        resp.render('about');
});


//Start server
app.listen(8000, function(){
	console.log('server started on port 8000');
});
