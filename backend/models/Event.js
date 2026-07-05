const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: '' // We will store Base64 string for simplicity for now
  }
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
