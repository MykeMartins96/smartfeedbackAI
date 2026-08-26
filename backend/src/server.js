const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Alterado: Importa o cliente do Supabase que configuramos no seu arquivo database.js
const { supabase } = require('./config/database');
const rotasFeedback = require('./routes/feedbackRoutes');

// Inicializa o framework Express
const app = express();

// Alterado: Removemos a função conectarBanco(); antiga do MongoDB. 
// O Supabase não precisa de inicialização manual aqui.

// --- MIDDLEWARES GLOBAIS ---
app.use(cors({
  origin: 'https://smartfeedback-ai.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// --- ATIVAÇÃO DAS ROTAS ---
app.use('/api', rotasFeedback);

// Rota de Teste de Status rápida
app.get('/api/status', (req, res) => {
  res.json({ mensagem: 'Servidor rodando e pronto para analisar feedbacks com IA e Supabase!' });
});

// Configuração da Porta do Servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor inicializado e rodando na porta ${PORT}`);
});
