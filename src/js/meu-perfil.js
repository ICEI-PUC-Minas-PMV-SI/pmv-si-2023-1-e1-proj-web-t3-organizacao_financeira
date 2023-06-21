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