let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('.logado')

logado.innerHTML = userLogado.nome

if(localStorage.getitem('token') == null){
    alert('Você precisa estar logado para acessar essa página')
    window.location.hred = '../html/login.html'
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

