import express from 'express';
import { login } from '../controllers/authController.js';

export const rotasAuth = express.Router();

rotasAuth.post('/login', login);