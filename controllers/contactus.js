const contactUs = require('../models/contactus');
const {
  validationResult
} = require('express-validator/check');

module.exports.post = function (req, res, next) {

  // res.send('POST');

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  };

  // console.log(req.body);

  const username = req.body.username;
  const companyname = req.body.companyname;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  contactUs
    .create({
      username: username,
      companyname: companyname,
      email: email,
      phone: phone,
      message: message
    })
    .then(function (result) {

      // success
      res.status(201).json({
        result: result
      });
    })
    .catch(function (err) {
      res.send(err)
    });


}