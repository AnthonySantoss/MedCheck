import bcrypt from "bcryptjs";
import User from '../models/User.js';


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