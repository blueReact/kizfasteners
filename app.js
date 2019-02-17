const express = require("express");
const bodyParser = require('body-parser');

// router
const contactus = require('./routes/contactUs');
const admin = require('./routes/admin');

const app = express();

// parse epplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

/*
 * routes 
 */

// contactUs
app.use('/', contactus);

// admin
app.use('/admin', admin);

app.listen(3000, function(){
  console.log('Running on port', 3000)
});
