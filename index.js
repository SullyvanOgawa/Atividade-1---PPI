
import express from 'express';
import autentication from './security/autenticator.js';

const host = "127.0.0.1";
const porta = 3001;

const app = express();
app.use(express.urlencoded({extended: true}));

app.use(express.static('./Views/public'));
app.use("/private",autentication, express.static('./Views/private'));

app.post("/login", (requisicao, resposta) => {
    const usuario = requisicao.body.usuario;
    const senha = requisicao.body.senha;
    if(usuario === "admin" && senha === "123"){
        resposta.redirect("./Views/private");
    }
    else{
        resposta.send("Usuário Inválido");
    }
});


app.listen(porta, host, () => {
    console.log(`Servidor rodando http://${host}:${porta}`);
});