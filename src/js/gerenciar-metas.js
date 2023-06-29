const metas = JSON.parse(window.localStorage.getItem('metas')) || [];
const usuario = JSON.parse(localStorage.getItem('userLogado')) || [];

function inserirMeta() {
    let counter = metas.length; // div com a meta
    let id = counter + 1;
    let nome = document.getElementById('nome').value;
    let vlTotal = document.getElementById('vlTotal').value;
    let vlAtual = document.getElementById('vlAtual').value;

    let meta = {
        id: id,
        userEmail: usuario.email,
        nome: nome,
        vlTotal: vlTotal,
        vlAtual: vlAtual,
        vlFaltando: vlTotal - vlAtual,
    }

    metas.push(meta);
    window.localStorage.setItem("metas", JSON.stringify(metas));
    exibirMetas();
}

function exibirMetas() {
    let listaMetas = document.getElementById('metas-criadas'); // div que vai receber as metas criadas
    if (metas.length > 0) {
        metas.forEach(meta => {
            if (usuario.email == meta.userEmail) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('minhas-metas');
                const newBR = document.createElement('br');
    
                const total = parseFloat(meta.vlTotal).toLocaleString("pt-BR", 
                { style: "currency" , currency:"BRL"});
                const atual = parseFloat(meta.vlAtual).toLocaleString("pt-BR", 
                { style: "currency" , currency:"BRL"});
                const faltando = parseFloat(meta.vlFaltando).toLocaleString("pt-BR", 
                { style: "currency" , currency:"BRL"});
    
                const elementoNome = document.createElement('h4');
                const elementoVlTotal = document.createElement('p');
                const elementoVlAtual = document.createElement('p');
                const elementoVlFaltando = document.createElement('p');
    
                const nome = document.createTextNode(meta.nome);
                const vlTotal = document.createTextNode(`Total: ${total}`);
                const vlAtual = document.createTextNode(`Já tenho:${atual}`);
                const vlFaltando = document.createTextNode(`Faltam:${faltando}`);
                
                elementoNome.appendChild(nome);
                elementoNome.innerHTML += "<span class=\"material-symbols-outlined\" data-bs-toggle=\"modal\" data-bs-target=\"#editMetaModal\" onclick=\"preparaFormAtualizacao("+meta.id+")\">edit</span>";
                elementoNome.innerHTML += "<span class=\"material-symbols-outlined\" onclick=\"excluirMeta("+meta.id+")\">delete</span>";
                elementoVlTotal.appendChild(vlTotal);
                elementoVlAtual.appendChild(vlAtual);
                elementoVlFaltando.appendChild(vlFaltando);
                
                newDiv.appendChild(elementoNome);
                newDiv.appendChild(newBR);
                newDiv.appendChild(elementoVlTotal);
                newDiv.appendChild(elementoVlAtual);
                newDiv.appendChild(elementoVlFaltando);
                
                listaMetas.appendChild(newDiv);
            }
        });
    }
}

function preparaFormAtualizacao(id) {
    // Para os campos de atualização
    const editNome = document.getElementById('editNome');
    const editVlTotal = document.getElementById('editVlTotal');
    const editVlAtual = document.getElementById('editVlAtual');
    const metaId = document.getElementById('metaId');

    metas.forEach(meta => {
        if (meta.id == id) {
            editNome.value = meta.nome;
            editVlTotal.value = meta.vlTotal;
            editVlAtual.value = meta.vlAtual;
            metaId.value = id;
        }
    });
}

function atualizarMeta() {
    const id = document.getElementById('metaId').value;
    metas.forEach(meta => {
        if (meta.id == id) {
            meta.nome = editNome.value;
            meta.vlTotal = editVlTotal.value;
            meta.vlAtual = editVlAtual.value;
            meta.vlFaltando = meta.vlTotal - meta.vlAtual;
        }
    });
    window.localStorage.setItem("metas", JSON.stringify(metas));
    window.location.reload();
}

function excluirMeta(id) {
    metas.forEach((meta, index) => {
        if (meta.id == id) {
            metas.splice(index, 1);
            localStorage.removeItem("metas");
            window.localStorage.setItem("metas", JSON.stringify(metas));
            window.location.reload();
        }
    });
}

//ensures the page is loaded before functions are executed.
window.onload = function(){
    exibirMetas();
}