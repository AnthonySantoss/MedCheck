//Importando o express
const express = require('express');
import * as authController from '../controllers/authController.js';

// Importa nossas novas funções de validação
import { registerRules, loginRules, validate } from '../validators/authValidator.js';

//Gerenciador de rotas
const router = express.Router();


//Rota para registro
router.post('/register', registerRules(), validate, authController.register);

//rota de login
router.post('/login', loginRules(), validate, authController.login);




export default router;