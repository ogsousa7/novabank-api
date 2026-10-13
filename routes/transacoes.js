import express from 'express';
import { mostrarExtrato } from '../controllers/transacaoController.js';

export const rotasTransacoes = express.Router();

rotasTransacoes.get('/contas/:id/extrato', mostrarExtrato);