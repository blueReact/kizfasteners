const express = require('express');
const router = express.Router();

const admincontroller = require('../controllers/admin');

// GET /admin/get
router.get('/', admincontroller.get);

// POST /admin/post
router.post('/' , admincontroller.post);

module.exports = router;