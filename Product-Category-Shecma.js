const mongoose = require('mongoose');

 
const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
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

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

module.exports = ProductCategory;
