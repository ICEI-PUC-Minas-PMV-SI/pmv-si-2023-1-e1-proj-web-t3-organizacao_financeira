// URL da API de dados
URL = 'http://localhost:3000/usuarios'

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
  
  


// userForm.addEventListener('submit', (e) => {


    // RECUPERA OS DADOS DO USUÁRIO
    const usuario = JSON.stringify({
        id: document.getElementById('user-id').value,
        nome: document.getElementById('user-nome').value,
        email: document.getElementById('user-email').value,
        telefone: document.getElementById('user-tel').value,
        senha: document.getElementById('user-senha').value,
        status: document.getElementById('user-status').value
    })
 
  }



  function validarFormulario() {    //Função que testa a integridade dos dados digitados pelo usuário.
    var nome = document.getElementById('user-nome').value;
    var email = document.getElementById('user-email').value;
    var telefone = document.getElementById('user-tel').value;
    var senha = document.getElementById('user-senha').value;
    var senha2 = document.getElementById('senha2').value;
    var menos18 = document.getElementById('menos18');
    var mais18 = document.getElementById('mais18');

    if (nome == "" || email == "" || telefone == "" || senha == "" || senha2 == "" || ( menos18.checked == false && mais18.checked == false )) {
        reload();         //If criado pelo motivo de = sem ele estava dando para registrar sem digitar nada.
    }

    else if (senha !== senha2) {
      // Armazena os valores dos campos do formulário no localStorage
      localStorage.setItem('user-nome', nome);
      localStorage.setItem('user-email', email);
      localStorage.setItem('user-tel', telefone);

      // Limpa o campo de senha
      document.getElementById('user-senha').value = "";
      document.getElementById('senha2').value = "";

      // Exibe o alerta
      alert("As senhas não correspondem. Se cadastre novamente.");

      // Recarrega a página
      reload();
  }
}

// Recupera os valores dos campos do formulário do localStorage após o carregamento da página
window.onload = function() {
  document.getElementById('user-nome').value = localStorage.getItem('user-nome');
  document.getElementById('user-email').value = localStorage.getItem('user-email');
  document.getElementById('user-tel').value = localStorage.getItem('user-tel');

  // Limpa os dados do localStorage
  localStorage.removeItem('user-nome');
  localStorage.removeItem('user-email');
  localStorage.removeItem('user-tel');
};
