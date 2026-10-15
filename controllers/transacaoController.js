import { Transacao } from '../models.js';

export const mostrarExtrato = async (req, res) => {

    try {

        const id = Number(req.contaId);

        const transacoes = await Transacao.findAll({ where: { contaId: id } });

        return res.status(200).json(transacoes);

    } catch(erro) {

        console.error(erro);
        return res.status(500).json({
            erro: 'Erro no servidor'
        })

    }

}