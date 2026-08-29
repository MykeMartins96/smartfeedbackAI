const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  texto: {
    type: String,
    required: true
  },
  sentimento: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
