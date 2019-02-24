const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');

const port = process.env.PORT || 3000;
const app = express();

console.log(config.get('mlab.dbName'));

// router
const contactusRoutes = require('./routes/contactus');
const adminRoutes = require('./routes/admin');

// mongoose
// mongodb://localhost/kizfasteners
mongoose.connect(config.get('mlab.dbName'), {
  useNewUrlParser: true
}).then(function () {
  console.log('Connected to...');
}).catch(function (err) {
  console.log('Couldn\'t connect to mongodb!', err);
});

// parse epplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

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


app.use(function(err, req, res, next){

  console.log(err);
  var err = new Error(err);
  err.code = err.code || 500;
  
  return res.status(err.code).json({
    message: err.message
  });

});


app.listen(port, function () {
  console.log('Running on port', port);
});