const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {conectarBanco} = require('./config/database');
const rotasFeedback = require('./routes/feedbackRoutes');

// Inicializa o framework Express
const app = express();

// Executa a conexão com o MongoDB Atlas de forma isolada
conectarBanco();

// --- MIDDLEWARES GLOBAIS ---
// Permite que o Front-end em React acesse esta API com segurança
app.use(cors());

// Habilita o servidor a receber e entender dados no formato JSON no corpo das requisições (req.body)
app.use(express.json());

// --- ATIVAÇÃO DAS ROTAS ---
// Injeta as rotas de feedback adicionando o prefixo /api antes de cada URL
app.use('/api', rotasFeedback);

// Rota de Teste de Status rápida
app.get('/api/status', (req, res) => {
  res.json({ mensagem: 'Servidor rodando e pronto para analisar feedbacks com IA!' });
});

// Configuração da Porta do Servidor (Usa a porta do .env ou a padrão 5000)
const PORT = process.env.PORT || 5000;

// Liga o servidor de fato e o deixa "escutando" requisições na rede
app.listen(PORT, () => {
  console.log(`🚀 Servidor inicializado e rodando na porta ${PORT}`);
});
