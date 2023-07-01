const receitas = JSON.parse(window.localStorage.getItem('receitas')) || [];
const usuario = JSON.parse(localStorage.getItem('userLogado')) || [];

function inserirReceita() {
    let counter = receitas.length; // div com a receita
    let id = counter + 1;
    let nome = document.getElementById('nome').value;
    let vlTotal = document.getElementById('vlTotal').value;
    let dataCriacao = new Date();
    let dataAtualização = dataCriacao;

    let receita = {
        id: id,
        dataCriacao: dataCriacao,
        dataAtualização: dataAtualização,
        userEmail: usuario.email,
        nome: nome,
        vlTotal: vlTotal,
    }

    receitas.push(receita);
    window.localStorage.setItem("receitas", JSON.stringify(receitas));
    exibirReceitas();
}

function exibirReceitas() {
    let listaReceitas = document.getElementById('receitas-criadas'); // div que vai receber as receitas criadas
    if (receitas.length > 0) {
        receitas.forEach(receita => {
            if (usuario.email == receita.userEmail) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('minhas-receitas');
                const newBR = document.createElement('br');
    
                const total = parseFloat(receita.vlTotal).toLocaleString("pt-BR", 
                { style: "currency" , currency:"BRL"});
    
                const elementoNome = document.createElement('h4');
                const elementoVlTotal = document.createElement('p');
    
                const nome = document.createTextNode(receita.nome);
                const vlTotal = document.createTextNode(`Total: ${total}`);
                
                elementoNome.appendChild(nome);
                elementoNome.innerHTML += "<span class=\"material-symbols-outlined\" data-bs-toggle=\"modal\" data-bs-target=\"#editReceitaModal\" onclick=\"preparaFormAtualizacao("+receita.id+")\">edit</span>";
                elementoNome.innerHTML += "<span class=\"material-symbols-outlined\" onclick=\"excluirReceita("+receita.id+")\">delete</span>";
                elementoVlTotal.appendChild(vlTotal);
              
                newDiv.appendChild(elementoNome);
                newDiv.appendChild(newBR);
                newDiv.appendChild(elementoVlTotal);
               
                listaReceitas.appendChild(newDiv);
            }
        });
    }
}

function preparaFormAtualizacao(id) {
    // Para os campos de atualização
    const editNome = document.getElementById('editNome');
    const editVlTotal = document.getElementById('editVlTotal');
    const receitaId = document.getElementById('receitaId');

    receitas.forEach(receita => {
        if (receita.id == id) {
            editNome.value = receita.nome;
            editVlTotal.value = receita.vlTotal;
            receitaId.value = id;
        }
    });
}

function atualizarReceita() {
  const id = document.getElementById('receitaId').value;
  const editNome = document.getElementById('editNome').value;
  const editVlTotal = document.getElementById('editVlTotal').value;
  let dataAtualização = new Date();
  
  receitas.forEach(receita => {
      if (receita.id == id) {
          receita.nome = editNome;
          receita.vlTotal = editVlTotal;
          receita.dataAtualização = dataAtualização;
      }
  });
  
  window.localStorage.setItem("receitas", JSON.stringify(receitas));
  window.location.reload();
}

function excluirReceita(id) {
    receitas.forEach((receita, index) => {
        if (receita.id == id) {
            receitas.splice(index, 1);
            localStorage.removeItem('receitas');
            window.localStorage.setItem("receitas", JSON.stringify(receitas));
            window.location.reload();
        }
    });
}

exibirReceitas();
