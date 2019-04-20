const express = require('express');
const router = express.Router();
const {
  check
} = require('express-validator/check');

const contactusController = require('../controllers/contactus')

// POST /api/contactus
router.post('/contactus', [

  // username
  check('username')
    .not().isEmpty()
    .withMessage('Field cannot be empty!')
    .isLength({
      min: 4,
      max: 30
    })
    .withMessage('must be between 4 and 30 chars long')
    .matches(/[a-zA-Z]/)
    .withMessage("Username field should only contain alphabets!")
    .trim(),
  
  // Company Name  
  check('companyname')   
    .isLength({      
      max: 50
    })
    .withMessage('Field must be less than 50 chars long')  
    .trim(),

  // email
  check('email')
    .not().isEmpty()
    .withMessage('Field cannot be empty!')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail()
    .trim(),

  // phone number
  check('phone')
    .not().isEmpty()
    .withMessage('Field cannot be empty!')
    .isMobilePhone(['en-IN'])
    .withMessage('Field must be 10 chars long')
    .trim(),

  // message
  check('message')
    .not().isEmpty()
    .withMessage('Field cannot be empty!')
    .isLength({
      min: 5,
      max: 1000
    })
    .withMessage('Field must be between 5 and 1000 chars long')
    .matches(/[a-zA-Z0-9]/)
    .withMessage("Field should only contain alphabets and Numbers!")
    .trim()

], contactusController.post);

module.exports = router;