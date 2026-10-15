import express from 'express';
import { buscarContaPorId, criarConta, deletar, depositar, listarContas, sacar } from '../controllers/contaController.js';
import { verificarToken } from '../middlewares/authMiddleware.js';

export const rotasConta = express.Router();

rotasConta.post('/contas', criarConta);

rotasConta.get('/contas/:id', buscarContaPorId);

rotasConta.get('/contas', listarContas)

rotasConta.patch('/contas/:id/deposito',verificarToken, depositar);

rotasConta.patch('/contas/:id/saque', verificarToken, sacar);

rotasConta.delete('/contas/:id', deletar)