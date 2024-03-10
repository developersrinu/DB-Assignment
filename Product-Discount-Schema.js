const mongoose = require('mongoose');

// Define Discount schema
const discountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  discount_percentage: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: {
    type: Date,
    default: null
  }
});

// Define Discount model
const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;
