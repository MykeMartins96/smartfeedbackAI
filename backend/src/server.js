const express = require('express');
const cors = require('cors');
require('dotenv').config();

console.log(
  'Gemini API Key carregada:',
  process.env.GEMINI_API_KEY ? 'SIM' : 'NÃO'
);

const { conectarBanco } = require('./config/database');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

// Conecta ao MongoDB
conectarBanco();

// Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());

// Rotas
app.use('/api', feedbackRoutes);

// Porta
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor inicializado e rodando na porta ${PORT}`);
});