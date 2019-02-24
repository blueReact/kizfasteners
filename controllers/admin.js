const bcrypt = require('bcryptjs');
const admin = require('../models/admin');
const contactUs = require('../models/contactus');

const {
  validationResult
} = require('express-validator/check');

module.exports.get = function (req, res, next) {
  res.send('GET');
}

module.exports.adminRegister = function (req, res, next) {
  console.log(req.session);
  // res.send('POST');

  // validationResult
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  };

  const email = req.body.email;
  const password = req.body.password;

  bcrypt.genSalt(12, function (err, salt) {

    bcrypt.hash(password, salt, function (err, hash) {
      
      console.log('hash', hash);

      admin
        .create({
          email: email,
          password: hash
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

    })

  });





}

module.exports.adminLogin = function (req, res, next) {
  
  // console.log('login', req.body);
  // res.send('POST');

  // validationResult
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  };

  const email = req.body.email;
  const password = req.body.password;

  admin
    .findOne({
      email: email
    })
    .then(function (user) {


      bcrypt.compare(password, user.password, function (err, result) {     
        // console.log('result ',result); // boolean
        if (result) {

          console.log(user.admin);
          
          // logged in successfully
          return res.status(200).json({
            message: "Login successfullly",
            admin: user.admin,
            isLoggedIn: true
          });
  
        } else {
  
          // logged in successfully
          return res.status(401).json("Login Failed");
  
        }

      });
      

    })
    .catch(function (err) {

      res.send(err)

    });

}

module.exports.adminCustomerGet = function (req, res, next) {
  
  // console.log('login', req.body);
  // res.send('POST');

  // validationResult
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  };

  contactUs
    .find({})
    .then(function (user) {
          
        // logged in successfully
        return res.status(200).json({user: user});
  

    })
    .catch(function (err) {

      res.send(err)

    });

}