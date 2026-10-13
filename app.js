import express from "express";
import { sequelize } from "./database.js";
import { rotasConta } from "./routes/contas.js";
import { rotasTransacoes } from "./routes/transacoes.js";
import { rotasAuth } from "./routes/auth.js";

const app = express();
app.use(express.json())
app.use(rotasConta);
app.use(rotasTransacoes);
app.use(rotasAuth);

await sequelize.authenticate();
await sequelize.sync();

app.listen(3000, () => {
    console.log('NovaBank está online!')
})