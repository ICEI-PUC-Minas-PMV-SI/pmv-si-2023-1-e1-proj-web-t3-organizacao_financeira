const formRegistro = document.getElementById ('formRegistro');

let nome = document.querySelector('#user-nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#user-email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let telefone = document.querySelector('#user-tel')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let senha = document.querySelector('#user-senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let senha2 = document.querySelector('#senha2')
let labelSenha2 = document.querySelector('#labelSenha2')
let validSenha2 = false

let menos18 = document.getElementById('#menos18');
let mais18 = document.getElementById('#mais18')


nome.addEventListener('keyup', () =>{ 
    if(nome.value.length <= 2){
        labelNome.innerHTML = 'Nome Completo: (Insira no mínimo 3 caracteres)'
        validNome = false
    } else{
        labelNome.innerHTML = 'Nome Completo:'
        validNome = true
    }
})

email.addEventListener('keyup', () =>{
    if(email.value.length <= 5){
        labelEmail.innerHTML='Email: (Insira um endereço de Email válido)'
        validEmail = false
    } else{
        labelEmail.innerHTML= 'Email:'
        validEmail = true
    }
})

telefone.addEventListener('keyup', () =>{
    if(telefone.value.length <= 9){
        labelTelefone.innerHTML = 'Telefone: (Insira um telefone válido)'
        validTelefone = false
    } else{
        labelTelefone.innerHTML = 'Telefone:'
        validTelefone = true
    }
})

senha.addEventListener('keyup', () =>{
    if(senha.value.length <= 5){
        labelSenha.innerHTML = 'Senha: (Insira no mínimo 6 caracteres)'
        validSenha = false
    } else{
        labelSenha.innerHTML = 'Senha:'
        validSenha = true
    }
})

senha2.addEventListener('keyup', () =>{
    if(senha.value != senha2.value){
        labelSenha2.innerHTML = 'Confirme sua senha (as senhas não conferem)'
        senha2.setAttribute ('style', 'border-color:red')
        validSenha2 = false
    } else{
        labelSenha2.innerHTML = 'Confirme sua senha'
        validSenha2 = true
        senha2.setAttribute ('style', 'border-color:white')
    }
} )

// Gera ID aleatório de 8 caracteres para cada novo usuário cadastrado
function generateID() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 8; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

function cadastrar() {
    var menos18RadioButton = document.querySelector('#menos18');
    var mais18RadioButton = document.querySelector('#mais18');
  
    if (!menos18RadioButton.checked && !mais18RadioButton.checked) {
      reload();
      return;
    }
  
    if (validNome && validEmail && validTelefone && validSenha && validSenha2) {
      if (menos18RadioButton.checked) {
        var tudo = document.getElementById('content');
        var avisoMenos18 = document.getElementById('avisoMenores');
        var title = document.getElementById('idTitulo');
        tudo.style.display = "none";
        title.style.display = "none";
        avisoMenos18.style.display = "block";
  
        document.getElementById('user-nome').value = localStorage.getItem('user-nome');
        document.getElementById('user-email').value = localStorage.getItem('user-email');
        document.getElementById('user-tel').value = localStorage.getItem('user-tel');
  
        localStorage.removeItem('user-nome');
        localStorage.removeItem('user-email');
        localStorage.removeItem('user-tel');
        event.preventDefault();
        return;
      }
  
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
  
      listaUser.push({
        id: generateID(),
        nomeCad: nome.value,
        emailCad: email.value,
        telCad: telefone.value,
        senhaCad: senha.value,
        receitas: []
      });
  
      localStorage.setItem('listaUser', JSON.stringify(listaUser));
  
      var tudo = document.getElementById('content');
      var avisoMaiores = document.getElementById('avisoMaiores');
      var title = document.getElementById('idTitulo');
      tudo.style.display = "none";
      title.style.display = "none";
      avisoMaiores.style.display = "block";
  
      setTimeout(() => {
        window.location.href = 'https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/login.html';
      }, 9000);
      event.preventDefault();
    } else {
      if (senha.value != senha2.value) {
        var nomeDigitado = document.getElementById('user-nome').value;
        var emailDigitado = document.getElementById('user-email').value;
        var telefoneDigitado = document.getElementById('user-tel').value;
  
        localStorage.setItem('user-nome', nomeDigitado);
        localStorage.setItem('user-email', emailDigitado);
        localStorage.setItem('user-tel', telefoneDigitado);
  
        document.getElementById('user-senha').value = "";
        document.getElementById('senha2').value = "";
  
        reload();
      }
    }
  }
  
  window.onload = function() {
    document.getElementById('user-nome').value = localStorage.getItem('user-nome');
    document.getElementById('user-email').value = localStorage.getItem('user-email');
    document.getElementById('user-tel').value = localStorage.getItem('user-tel');
  
    localStorage.removeItem('user-nome');
    localStorage.removeItem('user-email');
    localStorage.removeItem('user-tel');
  };
    

