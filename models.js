import { sequelize } from "./database.js";
import { Sequelize } from "sequelize";

export const Conta = sequelize.define('conta', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    titular: {
        type: Sequelize.STRING,
        allowNull: false
    },

    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    saldo: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
    },

    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export const Transacao = sequelize.define('transacao', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }   
});

Conta.hasMany(Transacao, { foreignKey: 'contaId' }); // Uma conta tem varias transações.
Transacao.belongsTo(Conta, { foreignKey: 'contaId' }); // Mas uma transação pertence a uma conta.