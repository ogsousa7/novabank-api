import express from 'express';
import { Transacao, Conta } from '../models.js';
import { mostrarExtrato } from '../controllers/transacaoController.js';

export const rotasTransacoes = express.Router();

rotasTransacoes.get('/contas/:id/extrato', mostrarExtrato);