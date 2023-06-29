const receitas = JSON.parse(window.localStorage.getItem('receitas')) || [];
const usuario = JSON.parse(localStorage.getItem('userLogado')) || [];

function inserirReceita() {
    let counter = receitas.length; // div com a receita
    let id = counter + 1;
    let nome = document.getElementById('nome').value;
    let vlTotal = document.getElementById('vlTotal').value;

    let receita = {
        id: id,
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
  
  receitas.forEach(receita => {
      if (receita.id == id) {
          receita.nome = editNome;
          receita.vlTotal = editVlTotal;
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

window.onload = function(){ //ensures the page is loaded before functions are executed.
    exibirReceitas();
}


// Tentativa de salvar as receitas criando um novo objeto no local storage SEM função editar

// let nomeReceita = document.querySelector('#nomeReceita');
// let labelNomeReceita = document.querySelector('#labelNomeReceita')

// let totalReceita = document.querySelector('#totalReceita');
// let labelTotalReceita = document.querySelector('#labelTotalReceita')


// function salvar() {   // FUNÇÃO PARA SALVAR RECEITAS NOVAS

//   var nome = nomeReceita.value;
//   var total = totalReceita.value;
//   var categoria = document.querySelector('#categoria').value;

//   if ((nome.lenght < 1) || (total < 0.01) || (categoria == 0)) {   // CONDIÇÕES PARA NÃO SALVAR A RECEITA
//     alert("Insira os dados corretamente");
//     return;
//   }
//   else {     // CASO AS CONDIÇÕES SEJAM CUMPRIDAS...

//   var receitas = JSON.parse(localStorage.getItem('Receitas')) || [];
//   var emailLogado = JSON.parse(localStorage.getItem('userLogado')) || [];  //salva na variável emailLogado todo o conteúdo de 'userLogado'
//   var emailLogado2 = emailLogado.email;  //salva na variável emailLogado2 apenas o email do userLogado
//   var counter = receitas.length
//   var id = counter +1

//   var novaReceita = {
//     id: id,
//     nome: nome,
//     total: total,
//     categoria: categoria,
//     emailReceita: emailLogado2    //salva o email do usuário logado junto com a receita
//   };

//   receitas.push(novaReceita);
//   localStorage.setItem('Receitas', JSON.stringify(receitas));
//   mostrarDados();

//   }
// }

// /////////////////////////////////////////////////////////////

// function mostrarDados() {
//   var receitas = JSON.parse(localStorage.getItem('Receitas')) || [];
//   var emailLogado = JSON.parse(localStorage.getItem('userLogado')) || []; //salva na variável emailLogado todo o conteúdo de 'userLogado'
//   var emailLogado2 = emailLogado.email;   //salva na variável emailLogado2 apenas o email do userLogado

//   // se já tem alguma receita, tira mensagem "voce ainda não adicionou receitas" e coloca a receita adicionada na tela
//   if (receitas.length > 0) {
//     var container = document.getElementById('dados');
//     container.innerHTML = '';

//     receitas.forEach(function (receita, index) { // as receitas aparecem de forma separada

//       if (emailLogado2 != receita.emailReceita)  {   //Se o email cadastrado na receita for diferente do email do usuário logado...
//          return ;
//       }

//             //Se o email cadastrado na função for igual ao email do usuário logado...

//       var receitaElement = document.createElement('div');
//       receitaElement.id = 'exibirReceitas' + index;

//       var nomeElement = document.createElement('p');
//       nomeElement.textContent = 'Nome da Receita: ' + receita.nome;

//       var totalElement = document.createElement('p');
//       totalElement.textContent = 'Valor da Receita (R$): ' + receita.total;

//       var categoriaElement = document.createElement('p');
//       categoriaElement.textContent = 'Categoria: ' + receita.categoria;

//       // botao que deleta a receita do local storage e da tela. Função aparece abaixo
//       var btnExcluir = document.createElement('button');
//       btnExcluir.textContent = 'Excluir';
//       btnExcluir.addEventListener('click', function () {
      
//         excluirReceita(index);
//       });

//       receitaElement.appendChild(nomeElement);
//       receitaElement.appendChild(totalElement);
//       receitaElement.appendChild(categoriaElement);
//       receitaElement.appendChild(btnExcluir);

//       container.appendChild(receitaElement); 
//     });
//   } else {
//     //enquanto o usuario não adicionar receita, aparece essa mensagem
//     document.getElementById('dados').innerHTML = 'Você ainda não adicionou nenhuma receita.';
//   }
// }

// function excluirReceita(index) {
//   var receitas = JSON.parse(localStorage.getItem('Receitas')) || [];

//   if (index >= 0 && index < receitas.length) {
//     receitas.splice(index, 1);
//     localStorage.setItem('Receitas', JSON.stringify(receitas));
//     mostrarDados();
    
//   }
// }
// mostrarDados();

