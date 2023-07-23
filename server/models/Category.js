const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String
  },
  on_sale: {
    type: Boolean,
    default: false
  }
});

const Category = model('Category', categorySchema);

module.exports = Category;