const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Usa o database do arquivo .env para conectar
        await mongoose.connect(process.env.DB_URI);
        console.log('MongoDB conectado com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;