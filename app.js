const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const app = express();

// router
const contactusRoutes = require('./routes/contactus');
const adminRoutes = require('./routes/admin');


// mongoose
mongoose.connect('mongodb://localhost/kizfasteners', {
  useNewUrlParser: true
}).then(function(){
  console.log('Connected to...');
}).catch(function(err){
  console.log('Couldn\'t connect to mongodb!', err);
});

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
app.use('/api', contactusRoutes);

// admin
app.use('/api', adminRoutes);


app.listen(port, function(){
  console.log('running on port', port);
});

