const express = require('express');
const router = express.Router();
const { GoogleGenAI } = require('@google/genai');
const { supabase } = require('../config/database');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post('/feedback', async (req, res) => {
  try {
    const { texto } = req.body;

    if (!texto) {
      return res.status(400).json({ error: 'O texto do feedback é obrigatório.' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Analise o seguinte feedback e responda APENAS com uma das três palavras: Positivo, Negativo ou Neutro. Texto: "${texto}"`,
    });

    const sentimento = response.text.trim();

    const { data, error } = await supabase
      .from('feedbacks')
      .insert([{ texto, sentimento }])
      .select();

    if (error) throw error;

    return res.status(201).json({
      message: 'Feedback processado e salvo com sucesso!',
      dados: data
    });

  } catch (error) {
    console.error('Erro no servidor:', error);
    return res.status(500).json({ error: 'Erro ao processar o feedback com IA.' });
  }
});

module.exports = router;
