let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('.logado')

logado.innerHTML = userLogado.nome

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página')
    window.location.hred = '../html/login.html'
}

function editarSenha() {
  var senhaAntiga = document.getElementById('senhaAtual').value;    //Armazena o valor digitado na senha antiga.
  var senhaNova = document.getElementById('senhaNova').value;       // Armazena o valor digitado na senha nova.
  var senhaUsuarioLogado = userLogado.senha;                        // Armazena a senha salva no userLogado.

  if (senhaAntiga == senhaUsuarioLogado) {  // Se a senha antiga digitada for igual à senha do userLogado...
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUser'));     //Faz procedimentos para salvar a nova senha no listaUser e userLogado.
    listaUsuarios.senhaCad = senhaNova;
    localStorage.setItem('listaUser', JSON.stringify(listaUser));
  }

  else {
    alert("Senha antiga incorreta.");
  }  
}

function sair (){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href='../html/login.html'
}

function excluir() {
  var senhaExclusao = document.getElementById('senhaExclusao').value;
  var userLogado = JSON.parse(localStorage.getItem('userLogado'));

  if (senhaExclusao === userLogado.senha) {
    var listaUser = JSON.parse(localStorage.getItem('listaUser'));

    // loop para procurar o index no listaUser que possui o mesmo email do userLogado
    var index = -1;
    for (var i = 0; i < listaUser.length; i++) {
      if (listaUser[i].emailCad === userLogado.email) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      // remove o index no listaUser
      listaUser.splice(index, 1);
      localStorage.setItem('listaUser', JSON.stringify(listaUser));
    }

    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = '../html/login.html';
  } else {
    alert('As senhas não conferem');
  }
}

