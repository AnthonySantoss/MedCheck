// Importando o express
const express = require('express');
//Importando o dotenv
const dotenv = require('dotenv');
const connectDB = require('./src/config/db.js');

dotenv.config(); // Carregando as variaveis
const app = express(); // instancia o express na constante app.
const port = process.env.PORT || 5173; //Lê do arquivo .env, caso não esteja disponível o padrão vai ser 3000.

//Conexao com o banco.
connectDB();

//Permite que o servidor entenda requisições com corpo em Json.
app.use(express.json());

//Teste de rota
app.get('/', (req, res) => {
    res.send('Tudo funcionando por aqui.')
})

//Servidor rodando
app.listen(port, () => {
    console.log(`Servidor rodando http://localhost:${port}`);
})