const caminhoRaiz = window.location.origin;
const localHostname = "127.0.0.1";
const currentHostname = window.location.hostname;
let redirectPage = "";
let paginasProtegidas = [];
if (currentHostname == localHostname) {
    redirectPage = caminhoRaiz+'/src/html/login.html';
    paginasProtegidas = [
        '/src/html/gerenciar-receitas.html',
        '/src/html/gerenciar-metas.html',
        '/src/html/gerenciar-despesas.html',
        '/src/html/meu-relatorio.html',
        '/src/html/grafico-despesas.html',
        '/src/html/meu-perfil.html',
        '/src/html/minha-conta.html',
    ];
}
else {
    redirectPage = "https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/";
    paginasProtegidas = [
        '/html/gerenciar-receitas.html',
        '/html/gerenciar-metas.html',
        '/html/gerenciar-despesas.html',
        '/html/meu-relatorio.html',
        '/html/grafico-despesas.html',
        '/html/meu-perfil.html',
        '/html/minha-conta.html',
    ];
}
const loginToken = window.localStorage.getItem('token');

function liberaAcesso() {
    let paginaAtual = window.location.pathname;
    if (paginasProtegidas.includes(paginaAtual)) {
        if (!loginToken) {
            window.location.replace(redirectPage);
        }
    }
}

//ensures the page is loaded before functions are executed.
window.onload = function(){
    liberaAcesso();
}