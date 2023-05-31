// Aguardar o carregamento completo da página
window.addEventListener('DOMContentLoaded', function() {
    var botaoRegistro = document.getElementById('botaoRegistro');
  
    // Adicionar um ouvinte de evento de clique no botão Registrar
    botaoRegistro.addEventListener('click', function(event) {
      // Verificando se a opção "Não" para maior de 18 anos está marcada
      var menos18 = document.getElementById('menos18');
      validarFormulario();
       if (menos18.checked) {
        exibirErro(); 
        event.preventDefault();      
      }
      else {
        loginConcluido();
        event.preventDefault();
      }
    });
  });

  function exibirErro () { //Caso o usuário selecione que é menor de 18 anos, essa função será chamada.
    var tudo = document.getElementById('content');
    var avisoMenos18 = document.getElementById('avisoMenores'); 
    var title = document.getElementById('idTitulo');
    tudo.style.display = "none";
    title.style.display = "none";
    avisoMenos18.style.display = "block";
  }

  function loginConcluido () {   //Caso o usuário selecione que é maior de 18 anos, essa função será chamada.
    var tudo = document.getElementById('content');
    var avisoMaiores = document.getElementById('avisoMaiores'); 
    var title = document.getElementById('idTitulo');
    tudo.style.display = "none";
    title.style.display = "none";
    avisoMaiores.style.display = "block"; 
  }

  function validarFormulario() {    //Função que testa a integridade dos dados digitados pelo usuário.
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var senha = document.getElementById('senha').value;
    var senha2 = document.getElementById('senha2').value;
    var menos18 = document.getElementById('menos18');
    var mais18 = document.getElementById('mais18');

    if (nome == "" || email == "" || telefone == "" || senha == "" || senha2 == "" || ( menos18.checked == false && mais18.checked == false )) {
        reload();         //If criado pelo motivo de = sem ele estava dando para registrar sem digitar nada.
    }

    else if (senha !== senha2) {
      // Armazena os valores dos campos do formulário no localStorage
      localStorage.setItem('nome', nome);
      localStorage.setItem('email', email);
      localStorage.setItem('telefone', telefone);

      // Limpa o campo de senha
      document.getElementById('senha').value = "";
      document.getElementById('senha2').value = "";

      // Exibe o alerta
      alert("As senhas não correspondem. Se cadastre novamente.");

      // Recarrega a página
      reload();
  }
}

// Recupera os valores dos campos do formulário do localStorage após o carregamento da página
window.onload = function() {
  document.getElementById('nome').value = localStorage.getItem('nome');
  document.getElementById('email').value = localStorage.getItem('email');
  document.getElementById('telefone').value = localStorage.getItem('telefone');

  // Limpa os dados do localStorage
  localStorage.removeItem('nome');
  localStorage.removeItem('email');
  localStorage.removeItem('telefone');
};
