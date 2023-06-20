function entrar(){
    let email = document.querySelector ('#user-email')
    let emailLabel = document.querySelector ('#emailLabel')

    let senha = document.querySelector ('#user-senha')
    let senhaLabel = document.querySelector ('#senhaLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = [];

    let userValid ={
        nome:'',
        email:'',
        senha:''
    };

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
        if (email.value == item.emailCad && senha.value == item.senhaCad){
            userValid = {
            nome: item.nomeCad,
            email: item.emailCad,
            senha: item.senhaCad
        }
        }
    })
    console.log(userValid)
   event.preventDefault();
}