export default function autentication(requisicao, resposta, next){
    if(requisicao?.session?.usuarioLogado){
        next();    
    }
    else{
        requisicao.session.paginaAcesso = requisicao.originalUrl;
        resposta.redirect("/login.html");
    }
};