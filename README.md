# 🏦 NovaBank API

API REST que simula operações bancárias, desenvolvida para praticar **Node.js, Express e bancos de dados**.

## 🚀 Tecnologias

- **Node.js** — ambiente de execução JavaScript
- **Express** — criação de rotas e servidor HTTP
- **Sequelize** — ORM para manipulação do banco de dados
- **SQLite** — armazenamento de contas e transações

## ⚙️ Funcionalidades

- Cadastro e consulta de contas
- Listagem de contas cadastradas
- Depósitos e saques com atualização de saldo
- Registro e consulta de transações (extrato)
- Exclusão de contas
- Validação de dados e tratamento de erros

## 📂 Estrutura do projeto

```text
novabank-api/
├── controllers/   # Lógica das operações
├── routes/        # Rotas da API
├── app.js         # Inicialização do servidor
├── database.js    # Conexão com o banco
├── models.js      # Modelos e relacionamentos
└── README.md
```

## 🛠️ Como executar

**1. Instale as dependências**

```bash
npm install
```

**2. Inicie o servidor**

```bash
node app.js
```

A API ficará disponível em `http://localhost:3000`.

## 📡 Endpoints

| Método | Rota | Descrição |
|---|---|---|
| POST | `/contas` | Criar conta |
| GET | `/contas` | Listar contas |
| GET | `/contas/:id` | Consultar conta |
| PATCH | `/contas/:id/deposito` | Realizar depósito |
| PATCH | `/contas/:id/saque` | Realizar saque |
| GET | `/contas/:id/extrato` | Consultar extrato |
| DELETE | `/contas/:id` | Excluir conta |

## 🧪 Exemplo de requisição

**POST `/contas`**

```json
{
  "titular": "Maria Silva",
  "cpf": "12345678900"
}
```

**PATCH `/contas/1/deposito`**

```json
{
  "valor": 150.50
}
```

## 📚 Objetivo

Projeto desenvolvido para aprimorar meus conhecimentos em desenvolvimento backend, APIs REST, operações assíncronas, modelagem de dados e persistência com banco de dados.

> ⚠️ Projeto educacional. Não destinado a operações financeiras reais.
