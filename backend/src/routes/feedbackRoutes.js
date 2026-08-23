const express = require('express');
const router = express.Router();
const { criarAnaliseFeedback, listarFeedbacks } = require('../controllers/feedbackController');

// Rota do tipo POST para receber o comentário e rodar a análise com IA
router.post('/feedbacks', criarAnaliseFeedback);

// Rota do tipo GET para listar o histórico e alimentar os gráficos
router.get('/feedbacks', listarFeedbacks);

module.exports = router;
