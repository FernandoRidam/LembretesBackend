const { Schema, model } = require('mongoose');

const StickySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

module.exports = model('Sticky', StickySchema);