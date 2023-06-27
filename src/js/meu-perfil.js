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
    var senhaDigitada = document.getElementById('senhaExclusao').value;
    var userLogado = JSON.parse(localStorage.getItem('userLogado'));
  
    if (senhaDigitada === userLogado.senha) {
      localStorage.removeItem('token');
      localStorage.removeItem('userLogado');
      localStorage.removeItem('listaUser');
      localStorage.removeItem('metas');
      localStorage.removeItem('Receitas');
      window.location.href = '../html/login.html';
    } else {
      alert('As senhas não conferem');
    }
  }
