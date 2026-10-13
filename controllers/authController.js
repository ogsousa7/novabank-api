import { Conta } from '../models.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {

    try {

        const { cpf, senha } = req.body;

        if (!cpf || !senha) {

            return res.status(400).json({
                erro: 'CPF e senha são obrigatorios!'
            });

        }

        const conta = await Conta.findOne({ where: { cpf: cpf } });
        if (!conta) {

            return res.status(404).json({
                erro: 'Conta não encontrada!'
            });

        }

        const senhaValida = await bcrypt.compare(senha, conta.senha);
        if (!senhaValida) {

            return res.status(401).json({
                erro: 'Senha incorreta!'
            });

        }

        const token = jwt.sign({ id: conta.id }, 'NOVABANK_ASSINATURE', { expiresIn: '1h' });

        return res.status(200).json({
            mensagem: 'Login realizado com sucesso!',
            token: token
        });

    } catch(erro) {

        console.error(erro);
        return res.status(500).json({
            erro: 'Falha no servidor'
        })

    }

}