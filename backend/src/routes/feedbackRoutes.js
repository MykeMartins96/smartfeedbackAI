const express = require('express');
const router = express.Router();

const { GoogleGenAI } = require('@google/genai');
const Feedback = require('../models/Feedback');

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

// CRIAR FEEDBACK
const criarFeedback = async (req, res) => {
  try {
    const texto =
      req.body.texto ||
      req.body.comentarioBruto ||
      req.body.comentario ||
      req.body.feedback;

    if (!texto || !texto.trim()) {
      return res.status(400).json({
        error: 'O texto do feedback é obrigatório.'
      });
    }

    console.log('📩 Feedback recebido:', texto);

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `
        Analise o seguinte feedback e responda APENAS
        com uma das três palavras:

        Positivo, Negativo ou Neutro.

        Feedback: "${texto}"
      `
    });

    console.log('🤖 Resposta Gemini:', response.text);

    const sentimento = response.text.trim();

    const novoFeedback = await Feedback.create({
      texto,
      sentimento
    });

    console.log('💾 Feedback salvo no MongoDB');

    return res.status(201).json(novoFeedback);

  } catch (error) {
    console.error('❌ ERRO COMPLETO GEMINI:');
    console.error(error);

    return res.status(500).json({
      error: 'Erro ao processar o feedback com IA.',
      detalhe: error?.message || 'Erro sem mensagem',
      status: error?.status || null
    });
  }
};

// LISTAR FEEDBACKS
const listarFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback
      .find()
      .sort({ created_at: -1 });

    return res.status(200).json(feedbacks);

  } catch (error) {
    console.error('❌ Erro ao listar:', error);

    return res.status(500).json({
      error: 'Erro ao buscar o histórico.'
    });
  }
};

// Rotas
router.post('/feedbacks', criarFeedback);
router.get('/feedbacks', listarFeedbacks);

module.exports = router;