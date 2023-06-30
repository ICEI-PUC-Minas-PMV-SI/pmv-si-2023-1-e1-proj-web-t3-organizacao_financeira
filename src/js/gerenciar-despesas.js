// Obtém o formulário de adicionar despesas
var formularioDespesas = document.getElementById('meuFormulario');

// Adiciona um ouvinte de evento para o envio do formulário
formularioDespesas.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Obtém os valores inseridos pelo usuário
  var nomeDespesa = document.getElementById('nomeDespesa').value;
  var valorDespesa = document.getElementById('valorDespesa').value;
  var categoriaDespesa = document.getElementById('categoriaDespesa').value;

  // Obtém os elementos das despesas existentes
  var despesa1 = document.getElementById('despesa1');
  var despesa2 = document.getElementById('despesa2');
  var despesa3 = document.getElementById('despesa3');

  // Atualiza os elementos das despesas existentes com os valores inseridos pelo usuário
  document.getElementById('nomeDespesa1').innerText = 'Nome da despesa adicionada: ' + nomeDespesa;
  document.getElementById('valorDespesa1').innerText = 'Valor: R$' + valorDespesa;
  document.getElementById('categoriaDespesa1').innerText = 'Categoria: ' + categoriaDespesa;

  document.getElementById('nomeDespesa2').innerText = 'Nome da despesa adicionada: ' + nomeDespesa;
  document.getElementById('valorDespesa2').innerText = 'Valor: R$' + valorDespesa;
  document.getElementById('categoriaDespesa2').innerText = 'Categoria: ' + categoriaDespesa;

  document.getElementById('nomeDespesa3').innerText = 'Nome da despesa adicionada: ' + nomeDespesa;
  document.getElementById('valorDespesa3').innerText = 'Valor: R$' + valorDespesa;
  document.getElementById('categoriaDespesa3').innerText = 'Categoria: ' + categoriaDespesa;
});

function restaurarFormaPadrao(idDespesa) {
    const nomeDespesa = document.getElementById(`nome${idDespesa}`);
    const valorDespesa = document.getElementById(`valor${idDespesa}`);
    const categoriaDespesa = document.getElementById(`categoria${idDespesa}`);
  
    if (nomeDespesa && valorDespesa && categoriaDespesa) {
      nomeDespesa.innerText = "Nome da despesa adicionada:";
      valorDespesa.innerText = "Valor: R$____,__";
      categoriaDespesa.innerText = "Categoria:";
    }
  }
  
