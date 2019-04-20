const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const contactUs = require('../models/contactus');
const {
  validationResult
} = require('express-validator/check');

const config = require('config');

// configuring transporter
const transporter = nodemailer.createTransport(sendGridTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false,
  auth: {
    api_key: config.get('services.sendGridApiKey')
  }
}));


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

      const mailOptions = {
        from: email, // sender address
        to: 'kizfastenersbiz@gmail.com', // reciever address
        subject: 'Sending Email using Node.js',
        html: `<p style="font-size:16px;color:#555">Username ${result.username}</p>  
        <p style="font-size:16px;color:#555">email</p> ${result.email}
        <p style="font-size:16px;color:#555">message</p> ${result.message}.
        <p style="font-size:16px;color:#555">phone</p> ${result.message}`
      };

      // success
      res.status(201).json({
        result: result
      });

      return transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    })
    .catch(function (err) {
      res.send(err)
    });


}