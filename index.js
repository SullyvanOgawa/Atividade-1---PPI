
import express from 'express';
import autentication from './security/autenticator.js';
import session from 'express-session';

const host = "127.0.0.1";
const porta = 3001;

const app = express();
app.use(session({
    secret: "segredo",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 15
    }
}))
app.use(express.urlencoded({extended: true}));

app.use(express.static('./Views/public'));

app.post("/login", (requisicao, resposta) => {
    const usuario = requisicao.body.usuario;
    const senha = requisicao.body.senha;

    if(usuario === "admin" && senha === "123"){
        requisicao.session.usuarioLogado = true;

        const paginaDestino = requisicao.session.paginaAcesso || "/private/";
        requisicao.session.paginaAcesso = null;

        requisicao.session.save(() => {
            resposta.redirect(paginaDestino);
        });
    }
    else{
        resposta.redirect("/login.html");
    }
});

app.get("/login", (requisicao, resposta) => {
    resposta.redirect("/login.html");
});

app.get("/logout", (requisicao, resposta) =>{
    requisicao.session.destroy;
    resposta.redirect("/login.html");
});


app.use("/private", autentication, express.static('./Views/private'));

app.listen(porta, host, () => {
    console.log(`Servidor rodando http://${host}:${porta}`);
});