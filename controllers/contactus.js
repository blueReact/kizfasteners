const contactUs = require('../models/contactus')

module.exports.post = function(req, res, next){
  // res.send('POST');

  console.log(req.body.title);

  const title = req.body.title;
  
  contactUs
    .create({title: title})
    .then(function(result){
      res.status(201).json({
        result: result
      });
    })
    .catch(function(err){
      res.send(err)
    });
}