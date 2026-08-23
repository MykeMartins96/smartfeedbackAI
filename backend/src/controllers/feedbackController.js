const { GoogleGenAI } = require('@google/genai');
const Feedback = require('../models/Feedback');

// Inicializa a IA usando a sua chave nova do .env
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const criarAnaliseFeedback = async (req, res) => {
  try {
    const { comentarioBruto } = req.body;

    if (!comentarioBruto || comentarioBruto.trim() === '') {
      return res.status(400).json({ erro: 'O comentário bruto é obrigatório.' });
    }

    const instrucaoPrompt = `
      Você é um especialista em análise de dados e experiência do cliente.
      Analise o seguinte feedback de cliente e retorne APENAS um objeto JSON válido.
      Não use blocos de código com markdown (como \`\`\`json) e não coloque nenhum texto antes ou depois do objeto.
      
      O JSON deve conter exatamente estes 3 campos:
      1. "sentimento": Deve ser estritamente uma destas opções: "Positivo", "Negativo" ou "Neutro".
      2. "nota": Um número inteiro de 1 a 5 (onde 1 é muito insatisfeito e 5 é muito satisfeito).
      3. "resumoIA": Uma frase curta resumindo o ponto principal do feedback.

      Feedback para analisar: "${comentarioBruto}"
    `;

    // Alterado para o modelo estável padrão aceito globalmente
    const respostaIA = await ai.models.generateContent({
      model: 'gemini-3.6-flash', 
      contents: instrucaoPrompt,
    });

    // Limpa espaços e remove marcações de markdown se a IA colocar por teimosia
    let textoLimpo = respostaIA.text.trim();
    if (textoLimpo.startsWith('```')) {
      textoLimpo = textoLimpo.replace(/^```json\s*/i, '').replace(/```$/, '').trim();
    }

    // Transforma em objeto JS real
    const dadosAnalisados = JSON.parse(textoLimpo);

    const novoFeedback = new Feedback({
      comentarioBruto,
      sentimento: dadosAnalisados.sentimento,
      nota: dadosAnalisados.nota,
      resumoIA: dadosAnalisados.resumoIA
    });

    await novoFeedback.save();
    return res.status(201).json(novoFeedback);

  } catch (error) {
    console.error('❌ Erro no processamento do feedback:', error);
    return res.status(500).json({ erro: 'Erro interno ao processar a análise com IA.' });
  }
};

const listarFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ dataCriacao: -1 });
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error('❌ Erro ao listar feedbacks:', error);
    return res.status(500).json({ erro: 'Erro ao buscar o histórico de feedbacks.' });
  }
};

module.exports = {
  criarAnaliseFeedback,
  listarFeedbacks,
};
