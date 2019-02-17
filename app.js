var express = require('express');
var app = express();

port = process.env.PORT || 3000;


app.get('/', function(req, res){

  res.send('Hello from cloud testing.');

});


app.listen(port, function(){
  console.log('running on port', port);
});

