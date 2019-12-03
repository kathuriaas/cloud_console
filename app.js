const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
const dotenv = require('dotenv');

//Initilize app
const app = express();

//Read environment variables from .env
dotenv.config();


//Load view engine
app.engine('handlebars',exphbs());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','handlebars');


//Import and Load routes
const routes = require('./routes/routes.js');
app.use('/',routes);

//Start server
app.listen(process.env.PORT, function(){
	console.log('server started on port ' + process.env.PORT);
});
