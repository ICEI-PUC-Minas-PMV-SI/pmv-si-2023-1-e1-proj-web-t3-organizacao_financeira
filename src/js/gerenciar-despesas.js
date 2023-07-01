const despesas = JSON.parse(window.localStorage.getItem('despesas')) || [];
const usuario = JSON.parse(localStorage.getItem('userLogado')) || [];

function inserirDespesa() {
    let counter = despesas.length; // div com a despesa
    let id = counter + 1;
    let nome = document.getElementById('nome').value;
    let vlTotal = document.getElementById('vlTotal').value;

    let despesa = {
        id: id,
        userEmail: usuario.email,
        nome: nome,
        vlTotal: vlTotal,
    }

    despesas.push(despesa);
    window.localStorage.setItem("despesas", JSON.stringify(despesas));
    exibirDespesas();
}

function exibirDespesas() {
    let listaDespesas = document.getElementById('despesas-criadas'); // div que vai receber as despesas criadas
    if (despesas.length > 0) {
        despesas.forEach(despesa => {
            if (usuario.email == despesa.userEmail) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('minhas-despesas');
                const newBR = document.createElement('br');
    
                const total = parseFloat(despesa.vlTotal).toLocaleString("pt-BR", 
                { style: "currency" , currency:"BRL"});
    
                const elementoNome = document.createElement('h4');
                const elementoVlTotal = document.createElement('p');
    
                const nome = document.createTextNode(despesa.nome);
                const vlTotal = document.createTextNode(`Total: ${total}`);
                
                elementoNome.appendChild(nome);
                elementoNome.innerHTML += "<span class=\"material-symbols-outlined\" data-bs-toggle=\"modal\" data-bs-target=\"#editDespesaModal\" onclick=\"preparaFormAtualizacao("+despesa.id+")\">edit</span>";
                elementoNome.innerHTML += "<span class=\"material-symbols-outlined\" onclick=\"excluirDespesa("+despesa.id+")\">delete</span>";
                elementoVlTotal.appendChild(vlTotal);
              
                newDiv.appendChild(elementoNome);
                newDiv.appendChild(newBR);
                newDiv.appendChild(elementoVlTotal);
               
                listaDespesas.appendChild(newDiv);
            }
        });
    }
}

function preparaFormAtualizacao(id) {
    // Para os campos de atualização
    const editNome = document.getElementById('editNome');
    const editVlTotal = document.getElementById('editVlTotal');
    const despesaId = document.getElementById('despesaId');

    despesas.forEach(despesa => {
        if (despesa.id == id) {
            editNome.value = despesa.nome;
            editVlTotal.value = despesa.vlTotal;
            despesaId.value = id;
        }
    });
}

function atualizarDespesa() {
  const id = document.getElementById('despesaId').value;
  const editNome = document.getElementById('editNome').value;
  const editVlTotal = document.getElementById('editVlTotal').value;
  
  despesas.forEach(despesa => {
      if (despesa.id == id) {
          despesa.nome = editNome;
          despesa.vlTotal = editVlTotal;
      }
  });
  
  window.localStorage.setItem("despesas", JSON.stringify(despesas));
  window.location.reload();
}

function excluirDespesa(id) {
    despesas.forEach((despesa, index) => {
        if (despesa.id == id) {
            despesas.splice(index, 1);
            localStorage.removeItem('despesas');
            window.localStorage.setItem("despesas", JSON.stringify(despesas));
            window.location.reload();
        }
    });
}

window.onload = function(){ //ensures the page is loaded before functions are executed.
    exibirDespesas();
}


