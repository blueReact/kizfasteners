const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

port = process.env.PORT || 3000;


// parse epplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// serving static files
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res){

  res.send('Hello from cloud RAhul.');

});


app.listen(port, function(){
  console.log('running on port', port);
});

