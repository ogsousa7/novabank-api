import jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {

    const cabecalhoAuth = req.headers.authorization;

    console.log('CHEGOU NO HEADER:', cabecalhoAuth);

    if (!cabecalhoAuth) {
        
        return res.status(401).json({
            erro: 'Token não fornecido! Acesso negado.'
        });

    }

    const token = cabecalhoAuth.split(' ')[1];

    console.log("TOKEN CORTADO:", token);

    try {

        const payload = jwt.verify(token, 'NOVABANK_ASSINATURE');

        console.log("DADOS DO CRACHÁ:", payload);

        req.contaId = payload.id;

        next();

    } catch(erro) {

        console.log("O JWT DEU ERRO:", erro.message);
        return res.status(401).json({
            erro: 'Token invalido ou expirado!'
        })

    }

}