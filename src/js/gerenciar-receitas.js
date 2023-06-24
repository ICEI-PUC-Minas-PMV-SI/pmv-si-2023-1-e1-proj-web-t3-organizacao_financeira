// // Recupera o array do Local Storage
// const dadosArmazenados = localStorage.getItem("listaUser");

// // Verifica se o array existe no Local Storage
// if (dadosArmazenados) {
//   // Converte o valor recuperado de volta para um array JavaScript
//   const array = JSON.parse(dadosArmazenados);

//   const mostraID = array.map(listaUser => listaUser.id) // procura todos os ids do listaUser

//   console.log(mostraID);
// } else {
//   console.log("O array não foi encontrado no Local Storage.");
// }



let nomeReceita = document.querySelector('#nomeReceita')
let labelNomeReceita = document.querySelector('#labelNomeReceita')
let validNomeReceita = false

let totalReceita = document.querySelector('#totalReceita')
let labelTotalReceita = document.querySelector('#labelTotalReceita')
let validTotalReceita = false

let categoriaReceita = document.querySelector('#labelCategoriaReceita')


function salvar() {
  // Obtem valores digitados pelo usuário
  var nome = nomeReceita.value;
  var total = totalReceita.value;
  var categoria = document.querySelector('#meta').value;

  // Cria o novo array ou utiliza o que já existe
  var receitas = JSON.parse(localStorage.getItem('Receitas')) || [];

  // Cria um objeto com as informações da receita
  var novaReceita = {
    nome: nome,
    total: total,
    categoria: categoria
  };

  // Adicione a nova receita ao array de receitas
  receitas.push(novaReceita);

  // Salve o array
  localStorage.setItem('Receitas', JSON.stringify(receitas));

  
  

}







// function salvar() {
//   var nome = nomeReceita.value;
//   var total = totalReceita.value;
//   var categoria = document.querySelector('#meta').value;

//   var userLogado = JSON.parse(localStorage.getItem('userLogado')) || {};

//   var receitas = userLogado.receitas || [];

//   var id = receitas.length + 1; // Gera um ID único para a nova receita

//   var novaReceita = {
//     id: id,
//     nome: nome,
//     total: total,
//     categoria: categoria
//   };

//   var index = receitas.findIndex(item => item.id === id);

//   if (index !== -1) {
//     receitas[index] = novaReceita;
//   } else {
//     receitas.push(novaReceita);
//   }

//   userLogado.receitas = receitas;

//   localStorage.setItem('userLogado', JSON.stringify(userLogado));
// }

let novoNomeReceita = document.querySelector('#novoNomeReceita')

let novoValorReceita = document.querySelector('#novoValorReceita')

function editar(){
  var dados = JSON.parse(localStorage.getItem('Receitas'));
  dados[nome].value = novoNomeReceita;

  localStorage.setItem('nomeDaChave', JSON.stringify(dados));

}






