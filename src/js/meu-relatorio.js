const usuario = JSON.parse(localStorage.getItem('userLogado')) || [];
const menuSelect = document.getElementById('select-mes');
const divListagemRegistros = document.getElementById('meu-relatorio-lista-registros');
let despesas = JSON.parse(window.localStorage.getItem('despesas')) || [];
let data = new Date();
let mesAtual = data.getMonth() + 1;

function mostraRegistros(mes = menuSelect.value) {
    limpaRegistros(divListagemRegistros);
    despesas.forEach(despesa => {
        if (usuario.email == despesa.userEmail) {
            let dataAtualizacao = new Date(Date.parse(despesa.dataAtualização));
            if (dataAtualizacao.getMonth() + 1 == mes) {
                let vlTotal = parseFloat(despesa.vlTotal).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })
                const dataFormatada = `${dataAtualizacao.toLocaleDateString('pt-BR')}`;
                const elementoDespesa = document.createElement('p');
                const registroDespesa = document.createTextNode(`${dataFormatada} - ${vlTotal} - ${despesa.nome}`);
                elementoDespesa.appendChild(registroDespesa);
                divListagemRegistros.appendChild(elementoDespesa);
            }
        }
    });
}

function atualizaRegistros() {
    let selectOption = menuSelect.value;
    mostraRegistros(selectOption);
}

function limpaRegistros(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

menuSelect.value = mesAtual;
mostraRegistros();