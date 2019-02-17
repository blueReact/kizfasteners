const express = require('express');
const router = express.Router();

const contactusController = require('../controllers/contactus')


// POST /api/contactus
router.post('/contactus', contactusController.post);


module.exports = router;