const mongoose = require('mongoose');
const Schema = require("mongoose").Schema;

var contactUsSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  companyname: {
    type: String,    
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    required: true
  }
},{
  timestamps: true
})


module.exports = mongoose.model('ContactUsSchema', contactUsSchema);