const express = require('express');
const router = express.Router();

const admincontroller = require('../controllers/admin');

// GET /api/admin
router.get('/admin', admincontroller.get);

// POST /api/admin
router.post('/admin' , admincontroller.post);

module.exports = router;