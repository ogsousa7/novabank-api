import { Conta, Transacao } from '../models.js';
import bcrypt from 'bcrypt';

export const criarConta = async (req, res) => {

     try {

        const corpo = req.body

        if (!corpo.titular || !corpo.cpf) {

            return res.status(400).json({
                erro: 'Titular ou cpf não informado!'
            })
    
        }

        if (!corpo.senha) {

            return res.status(400).json({
                erro: 'A senha é obrigatória!'
            })

        }

        const senhaCriptografada = await bcrypt.hash(corpo.senha, 10)

        const novaConta = await Conta.create({
            titular: corpo.titular,
            cpf: corpo.cpf,
            senha: senhaCriptografada
        })

        return res.status(201).json({
            dadosConta: novaConta
        })

    } catch(erro) {

        console.error(erro);
        return res.status(500).json({
            erro: 'Falha no servidor'
        })

    }

};

export const listarContas = async (req, res) => {

    try {
    
        const contas  = await Conta.findAll();
    
        return res.status(200).json(contas);
    
    } catch(erro) {
    
        console.error(erro);
        return res.status(500).json({
            erro: 'Falha no servidor'
        })
    
    }

};

export const buscarContaPorId = async (req, res) => {

    try {

        const id = req.params.id;

        const conta = await Conta.findByPk(id);

        if (!conta) {

            return res.status(404).json({
                erro: 'Conta não encontrada!'
            })

        }

        return res.status(200).json(conta);

    } catch(erro) {

        console.error(erro);
        return res.status(500).json({
            erro: 'Falha no servidor'
        })

    }

}

export const depositar = async (req, res) => {

    try {

        const id = Number(req.params.id);
        const valor = Number(req.body.valor);

        if (id !== Number(req.contaId)) {

            return res.status(403).json({
                erro: 'Voce nao pode acessar esta conta!'
            })

        }

        if (!valor || valor <= 0) {

            return res.status(400).json({
                erro: 'Insira um valor valido!'
            })

        }

        const conta = await Conta.findByPk(id);

        if (!conta) {

            return res.status(404).json({
                erro: 'Conta nao existe.'
            })

        }

        conta.saldo = conta.saldo + valor;

        await conta.save();
        await Transacao.create({
            tipo: 'DEPOSITO',
            valor: valor,
            contaId: id
        })

        return res.status(200).json(conta);

    } catch(erro) {

        console.error(erro);
        return res.status(500).json({
            erro: "Falha no servidor"
        })

    }

};

export const sacar = async (req, res) => {

     try {

        const id = Number(req.contaId);
    
        const corpo = req.body

        if (corpo.valor <= 0) {

            return res.status(400).json({
                erro: 'Digite um valor valido!'
            });

        };

        const conta = await Conta.findByPk(id);

        if (!conta) {

            return res.status(400).json({
                erro: 'Conta não existe!'
            });

        };

        if (conta.saldo < corpo.valor) {

            return res.status(400).json({
                erro: 'Saldo insuficiente!'
            });

        };

        conta.saldo = conta.saldo - corpo.valor;

        await conta.save();
        await Transacao.create({
            tipo: 'SAQUE',
            valor: corpo.valor,
            contaId: id
        });

        return res.status(200).json(conta);

    } catch(erro) {

        console.error(erro);
        return res.status(500).json({
            erro: 'Falha no servidor'
        });

    };

};

export const deletar = async (req, res) => {

    try {

        const id = req.params.id;

        const conta = await Conta.findByPk(id);

        if (!conta) {

            return res.status(404).json({
                erro: "Conta inexistente."
            })

        }

        await conta.destroy();

        return res.status(204).send();

    } catch(erro) {

        console.error(erro);
        return res.status(500).json({
            erro: 'Falha no servidor'
        });

    }

}