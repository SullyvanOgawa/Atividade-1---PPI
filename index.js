
import express from 'express';

const host = "0.0.0.0";
const porta = 3001;
const app = express();

app.listen(host, porta, () => {
    console.log(`Servidor rodando ${host}: ${porta}`);
});