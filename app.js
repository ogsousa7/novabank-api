import express from "express";
import { sequelize } from "./database.js";
import { rotasConta } from "./routes/contas.js";
import { rotasTransacoes } from "./routes/transacoes.js";

const app = express();
app.use(express.json())
app.use(rotasConta);
app.use(rotasTransacoes);

await sequelize.authenticate();
await sequelize.sync();

app.listen(3000, () => {
    console.log('NovaBank está online!')
})