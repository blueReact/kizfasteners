const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.redirect('www.google.com');
});

router.post('/' , function(req, res){
  console.log(req.body);
});


module.exports = router;