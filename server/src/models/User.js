//Importando o mongoose
const mongoose = require(mongoose);

// Criando esquema de usuário
const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

//Criação de modelo a partir do esquema
const User = mongoose.model('User', userSchema);

//Exporta o modelo
module.exports = User;