const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  comentarioBruto: {
    type: String,
    required: true,
  },
  sentimento: {
    type: String,
    enum: ['Positivo', 'Negativo', 'Neutro'],
    required: true,
  },
  nota: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  resumoIA: {
    type: String,
    required: true,
  },
  dataCriacao: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
