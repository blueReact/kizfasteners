const mongoose = require('mongoose');
const Schema = require("mongoose").Schema;

var adminSchema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('AdminSchema', adminSchema);