import bcrypt from "bcryptjs";
import User from '../models/User.js';
import jwt from 'jsonwebtoken';



export const register = async (req, res) => {
    try {

        //Pegando os dados
        const {name, email, password} = req.body;

        //Senha criptografada
        const password_hash = await bcrypt.hash(password, 10);

        //Verificando se o e-mail existe
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário com este email já existe.' });
        }


        //Criando usuário no banco.
        const newUser = new User({
            name: name,
            email: email,
            password: password_hash
        })

        //Salvando usuário
        await newUser.save();

        // Enviando uma resposta de sucesso
        res.status(201).json({
            message: "Usuário registado com sucesso!",
            userId: newUser._id
        });

    } catch (error){
        res.status(500).json({ message: "Erro no servidor.", error: error.message });
    }
}

export const login = async (req, res) => {
  try {
      //Pegando os dados
      const {email, password} = req.body;

      //Verificando a existência no banco.
      const existingUser = await User.findOne({email});
      //Caso não exista envia mensagem.
      if (!existingUser){
          return res.status(400).json({ message: 'E-mail ou senha inválidos.' });
      }

      //Verificando a senha.
      const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordCorrect){
          return res.status(400).json({ message: 'E-mail ou senha inválidos.' });
      }

      // Gera o Token JWT
      const token = jwt.sign(
          { id: existingUser.id, email: existingUser.email },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
      );

      //Responde com o token
      res.status(200).json({message: 'Login bem-sucedido!', token: token});

  } catch (error) {
      res.status(500).json({ message: "Erro no servidor.", error: error.message });
  }
}