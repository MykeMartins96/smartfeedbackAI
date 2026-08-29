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
        Analise o feedback abaixo.

        Responda APENAS neste formato:

        sentimento|nota|resumo

        Regras:

        - sentimento deve ser:
          Positivo, Negativo ou Neutro

        - nota deve ser um número inteiro de 1 a 5

        - resumo deve ser uma opinião curta e objetiva
          sobre o que o cliente demonstrou no feedback

        Não use o caractere "|" dentro do resumo.

        Exemplos:

        Positivo|5|O cliente demonstrou muita satisfação com o produto e o atendimento.

        Neutro|3|O cliente gostou do produto, mas demonstrou insatisfação com o prazo de entrega.

        Negativo|1|O cliente ficou insatisfeito com o produto e com a qualidade do atendimento.

        Feedback: "${texto}"
      `
    });

    console.log('🤖 Resposta Gemini:', response.text);

    const respostaIA = response.text.trim();

    const partes = respostaIA.split('|');

    const sentimento = partes[0]?.trim();
    const nota = Number(partes[1]?.trim());
    const resumoIA = partes.slice(2).join('|').trim();

    // Validação da resposta da IA
    if (
      !['Positivo', 'Negativo', 'Neutro'].includes(sentimento) ||
      !Number.isInteger(nota) ||
      nota < 1 ||
      nota > 5 ||
      !resumoIA
    ) {
      console.error('❌ Resposta inválida da Gemini:', respostaIA);

      return res.status(500).json({
        error: 'A IA retornou uma resposta em formato inválido.'
      });
    }

    const novoFeedback = await Feedback.create({
      texto,
      sentimento,
      nota,
      resumoIA
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

// ROTAS
router.post('/feedbacks', criarFeedback);

router.get('/feedbacks', listarFeedbacks);

module.exports = router;