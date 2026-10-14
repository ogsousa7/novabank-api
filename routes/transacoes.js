import express from 'express';
import { mostrarExtrato } from '../controllers/transacaoController.js';
import { verificarToken } from '../middlewares/authMiddleware.js';

export const rotasTransacoes = express.Router();

rotasTransacoes.get('/contas/:id/extrato', verificarToken, mostrarExtrato);