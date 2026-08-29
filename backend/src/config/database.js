const mongoose = require('mongoose');

const conectarBanco = async () => {
  try {
    // Mudamos de MONGODB_URI para MONGO_URI para bater com o seu .env
    const uri = process.env.MONGO_URI;
    
    if (!uri) {
      throw new Error("A variável MONGO_URI não foi encontrada no arquivo .env");
    }

    await mongoose.connect(uri);
    console.log('🍃 MongoDB Conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = { conectarBanco };
