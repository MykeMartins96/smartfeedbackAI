const mongoose = require('mongoose');

const conectarBanco = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('⚡ MongoDB conectado e isolado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }
};

// Exportando como um objeto para alinhar perfeitamente com a importação do server.js
module.exports = { conectarBanco };
