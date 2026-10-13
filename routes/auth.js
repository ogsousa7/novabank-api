import express from 'express';
import { login } from '../controllers/authCOntroller';

export const rotasAuth = express.Router();

rotasAuth.post('/login', login);