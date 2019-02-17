const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');

// router
const contactusRoutes = require('./routes/contactUs');
const adminRoutes = require('./routes/admin');

const app = express();

// parse epplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// serving static files
app.use(express.static(path.join(__dirname, "public")));

/*
 * routes 
 */

// contactUs
app.use('/', contactusRoutes);

// admin
app.use('/admin', adminRoutes);


// error middleware
app.use(function(req, res, next){
  const statusCode = req.statusCode;
  const status = req.status;
  res.status(statusCode).send(status);
});

app.listen(3000, function(){
  console.log('Running on port', 3000)
});
