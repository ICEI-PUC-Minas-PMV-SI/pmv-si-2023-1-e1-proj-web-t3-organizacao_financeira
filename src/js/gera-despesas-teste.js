const despesas = JSON.parse(window.localStorage.getItem('despesas')) || [];
const usuario = JSON.parse(localStorage.getItem('userLogado')) || [];
let nome = 'Despesa Teste';
let vlTotal = 100;
let categoriaDespesa = 'Teste';
const dataBase = new Date();

function inserirDespesa(nome, valor, dataCriacao, categoriaDespesa) {
    let counter = despesas.length; // div com a despesa
    let id = counter + 1;

    let despesa = {
        id: id,
        dataCriacao: dataCriacao,
        dataAtualização: dataCriacao,
        userEmail: usuario.email,
        nome: nome,
        vlTotal: valor,
        categoriaDespesa: categoriaDespesa
    }

    despesas.push(despesa);
    window.localStorage.setItem("despesas", JSON.stringify(despesas));
}

function gerarDespesas() {
    let dataRange = dataBase.getMonth() + 1;
    let anoAtual = dataBase.getFullYear();
    
    for (const x of Array(dataRange).keys()) {
        vl1 = randomNumber(700, 1200);
        vl2 = randomNumber(60, 85);
        vl3 = randomNumber(350, 420);
        inserirDespesa('Supermercado', vl1, new Date(anoAtual, x, 1), 'Alimentação');
        inserirDespesa('Água', vl2, new Date(anoAtual, x, 2), 'Gastos domésticos');
        inserirDespesa('Energia', vl3, new Date(anoAtual, x, 3), 'Gastos domésticos');
        inserirDespesa('PUC-MG', 606, new Date(anoAtual, x, 1), 'Educação');
    }

    const caminhoRaiz = window.location.origin;
    const currentHostname = window.location.hostname;
    const localHostname = "127.0.0.1";
    let redirectPage = "";
    if (currentHostname == localHostname) {
        redirectPage = caminhoRaiz+'/src/html/minha-conta.html';
    }
    else {
        redirectPage = "https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/minha-conta.html";
    }
    window.location.replace(redirectPage);
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
