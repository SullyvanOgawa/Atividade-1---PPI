
import express from 'express';

const host = "127.0.0.1";
const porta = 3001;
const app = express();

// app.use(express.static('./Views/public'));

app.listen(porta, host, () => {
    console.log(`Servidor rodando http://${host}:${porta}`);
});