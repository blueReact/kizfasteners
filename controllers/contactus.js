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

  const title = req.body.title;
  const email = req.body.email;
  const phone = req.body.phone;
  const comment = req.body.comment;

  contactUs
    .create({
      title: title,
      email: email,
      phone: phone,
      comment: comment
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