//Importando o express
const express = require('express');

//Gerenciador de rotas
const router = express.Router();


//Rota para registro
router.post('/register');

// Rota de login
router.post('/login', (req, res ) =>  {

})



export default router;