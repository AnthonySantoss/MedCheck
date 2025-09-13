// Importando o express
const express = require('express');
//Requerendo a biblioteca dotenv
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5173; //Lê do arquivo .env, caso não esteja disponível o padrão vai ser 3000.

//Teste de rota
app.get('/', (req, res) => {
    res.send('Tudo funcionando por aqui.')
})

//Servidor rodando
app.listen(port, () => {
    console.log(`Servidor rodando http://localhost:${port}`);
})