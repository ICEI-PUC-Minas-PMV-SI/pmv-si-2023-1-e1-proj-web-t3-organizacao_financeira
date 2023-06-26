// Tentativa de salvar as receitas criando um novo objeto no local storage

let nomeReceita = document.querySelector('#nomeReceita');
let labelNomeReceita = document.querySelector('#labelNomeReceita')

let totalReceita = document.querySelector('#totalReceita');
let labelTotalReceita = document.querySelector('#labelTotalReceita')


function salvar() {   // FUNÇÃO PARA SALVAR RECEITAS NOVAS

  var nome = nomeReceita.value;
  var total = totalReceita.value;
  var categoria = document.querySelector('#categoria').value;

  if ((nome.lenght < 1) || (total < 0.01) || (categoria == 0)) {   // CONDIÇÕES PARA NÃO SALVAR A RECEITA
    alert("Insira os dados corretamente");
    return;
  }
  else {     // CASO AS CONDIÇÕES SEJAM CUMPRIDAS...

  var receitas = JSON.parse(localStorage.getItem('Receitas')) || [];
  var emailLogado = JSON.parse(localStorage.getItem('userLogado')) || [];  //salva na variável emailLogado todo o conteúdo de 'userLogado'
  var emailLogado2 = emailLogado.email;  //salva na variável emailLogado2 apenas o email do userLogado

  var novaReceita = {
    nome: nome,
    total: total,
    categoria: categoria,
    emailReceita: emailLogado2    //salva o email do usuário logado junto com a receita
  };

  receitas.push(novaReceita);
  localStorage.setItem('Receitas', JSON.stringify(receitas));
  mostrarDados();

  }
}

/////////////////////////////////////////////////////////////

function mostrarDados() {
  var receitas = JSON.parse(localStorage.getItem('Receitas')) || [];
  var emailLogado = JSON.parse(localStorage.getItem('userLogado')) || []; //salva na variável emailLogado todo o conteúdo de 'userLogado'
  var emailLogado2 = emailLogado.email;   //salva na variável emailLogado2 apenas o email do userLogado

  // se já tem alguma receita, tira mensagem "voce ainda não adicionou receitas" e coloca a receita adicionada na tela
  if (receitas.length > 0) {
    var container = document.getElementById('dados');
    container.innerHTML = '';

    receitas.forEach(function (receita, index) { // as receitas aparecem de forma separada

      if (emailLogado2 != receita.emailReceita)  {   //Se o email cadastrado na receita for diferente do email do usuário logado...
         return ;
      }

            //Se o email cadastrado na função for igual ao email do usuário logado...

      var receitaElement = document.createElement('div');
      receitaElement.id = 'exibirReceitas' + index;

      var nomeElement = document.createElement('p');
      nomeElement.textContent = 'Nome da Receita: ' + receita.nome;

      var totalElement = document.createElement('p');
      totalElement.textContent = 'Valor da Receita (R$): ' + receita.total;

      var categoriaElement = document.createElement('p');
      categoriaElement.textContent = 'Categoria: ' + receita.categoria;

      // botao que deleta a receita do local storage e da tela. Função aparece abaixo
      var btnExcluir = document.createElement('button');
      btnExcluir.textContent = 'Excluir';
      btnExcluir.addEventListener('click', function () {
      
        excluirReceita(index);
      });

      receitaElement.appendChild(nomeElement);
      receitaElement.appendChild(totalElement);
      receitaElement.appendChild(categoriaElement);
      receitaElement.appendChild(btnExcluir);

      container.appendChild(receitaElement); 
    });
  } else {
    //enquanto o usuario não adicionar receita, aparece essa mensagem
    document.getElementById('dados').innerHTML = 'Você ainda não adicionou nenhuma receita.';
  }
}

function excluirReceita(index) {
  var receitas = JSON.parse(localStorage.getItem('Receitas')) || [];

  if (index >= 0 && index < receitas.length) {
    receitas.splice(index, 1);
    localStorage.setItem('Receitas', JSON.stringify(receitas));
    mostrarDados();
    
  }
}
mostrarDados();



// // // // tentativa de salvar a receita no userLogado

// let nomeReceita = document.querySelector('#nomeReceita');
// let labelNomeReceita = document.querySelector('#labelNomeReceita')


// let totalReceita = document.querySelector('#totalReceita');
// let labelTotalReceita = document.querySelector('#labelTotalReceita')


// function salvar (){
//   var nome = nomeReceita.value;
//   var total = totalReceita.value;
//   var categoria = document.querySelector('#categoria').value;

//   // Busca o userLogado
//   var userLogado = JSON.parse(localStorage.getItem('userLogado')) || {};
//   userLogado.receitas = userLogado.receitas || [];

//   var novaReceita = {
//     nome: nome,
//     total: total,
//     categoria: categoria,
  
    
//   };
//   userLogado.receitas.push(novaReceita);

//     localStorage.setItem('userLogado', JSON.stringify(userLogado));
//   }


//   let container = document.querySelector('#dados');

//   function exibirReceitas() {
//     var userLogado = JSON.parse(localStorage.getItem('userLogado')) || {};
//     var receitas = userLogado.receitas || [];
  
//     var container = document.getElementById('dados');
  
//     container.innerHTML = '';
  
//     if (receitas.length > 0) {
//       container.innerHTML = '';

//       receitas.forEach(function (receita, index) {
        
//         var receitaElement = document.createElement('div');
//         receitaElement.id = 'exibirReceitas' + index;

//         var nomeElement = document.createElement('p');
//         nomeElement.textContent = 'Nome da Receita: ' + receita.nome;
  
//         var totalElement = document.createElement('p');
//         totalElement.textContent = 'Valor da Receita (R$): ' + receita.total;
  
//         var categoriaElement = document.createElement('p');
//         categoriaElement.textContent = 'Categoria: ' + receita.categoria;
  
//         // botão que deleta a receita
//         var btnExcluir = document.createElement('button');
//         btnExcluir.textContent = 'Excluir';
//         btnExcluir.addEventListener('click', function () {
//           //deleta na tela e no localstorage
//           excluirReceita(index);
//         });
//         receitaElement.appendChild(nomeElement);
//         receitaElement.appendChild(totalElement);
//         receitaElement.appendChild(categoriaElement);
//         receitaElement.appendChild(btnExcluir);
  
//         container.appendChild(receitaElement);
//       });
//     } else {
//       // mensagem quando não tiver receita salva
//       container.innerHTML = 'Você ainda não adicionou nenhuma receita.';
//     }
//   }
  
//   function excluirReceita(index) {
//     var userLogado = JSON.parse(localStorage.getItem('userLogado')) || {};
//     var receitas = userLogado.receitas || [];
  
//     if (index >= 0 && index < receitas.length) {
//       receitas.splice(index, 1);
//       userLogado.receitas = receitas;
//       localStorage.setItem('userLogado', JSON.stringify(userLogado));
//       exibirReceitas();
//     }
//   }
  
//   exibirReceitas();
  

