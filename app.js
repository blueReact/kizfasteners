const path = require('path');

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');
const helmet = require('helmet');
const favicon = require('serve-favicon');
const compression = require('compression');

// const livereload = require('livereload');

const port = process.env.PORT || 3000;
const app = express();

// router
const contactusRoutes = require('./routes/contactus');
const adminRoutes = require('./routes/admin');

// mongoose
// mongodb://localhost/kizfasteners
mongoose.connect(config.get('services.dbName'), {
  useNewUrlParser: true
}).then(function () {
  console.log('Connected to...');
}).catch(function (err) {
  console.log('Couldn\'t connect to mongodb!', err);
});


/*
 * middlewares 
 */
app.use(helmet());
// parse epplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(session({
  secret: 'my session secret',
  resave: false,
  saveUninitialized: false
}));

app.use(compression());

// serving static files
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "node.ico")));

// var server = livereload.createServer({
//   exts: ['html', 'css', 'js', 'png', 'jpg']
// });
// server.watch(path.join(__dirname, "public"));

// prerender
app.use(require('prerender-node').set('prerenderServiceUrl', 'http://www.kizfasteners.com'));

/*
 * routes
 */

// contactUs
app.use('/api', contactusRoutes);

// admin
app.use('/api', adminRoutes);

app.use(function (err, req, res, next) {

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