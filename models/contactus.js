const mongoose = require('mongoose');
const Schema = require("mongoose").Schema;

var contactUsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
},{
  timestamps: true
})


module.exports = mongoose.model('ContactUsSchema', contactUsSchema);