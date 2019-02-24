const express = require('express');
const router = express.Router();

const {
  check
} = require('express-validator/check');

const admincontroller = require('../controllers/admin');
const isLoggedIn = require('../middleware/is-logged-in');
const isAdmin = require('../middleware/is-admin');

// GET /api/admin
router.get('/admin', isLoggedIn, isAdmin, admincontroller.adminCustomerGet);

// POST /api/adminRegister
router.post('/adminRegister',[

  // email
  check('email')
    .not().isEmpty()
    .withMessage('Field cannot be empty!')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail()
    .trim(),

  // password
  check('password')
    .not().isEmpty()
    .withMessage('Field cannot be empty!')
    .isLength({
      min: 5,
      max: 30
    })
    .withMessage('must be between 5 and 30 chars long')
    .trim()
  
  ], admincontroller.adminRegister);

// POST /api/adminLogin
router.post('/adminLogin', [

  // email
  check('email')
    .not().isEmpty()
    .withMessage('Field cannot be empty!')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail()
    .trim(),

  // password
  check('password')
    .not().isEmpty()
    .withMessage('Field cannot be empty!')
    .isLength({
      min: 5,
      max: 30
    })
    .withMessage('must be between 5 and 30 chars long')
    .trim()
  
  ], admincontroller.adminLogin);

module.exports = router;