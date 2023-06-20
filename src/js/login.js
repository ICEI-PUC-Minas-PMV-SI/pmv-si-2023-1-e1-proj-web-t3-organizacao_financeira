function entrar(){
    let email = document.querySelector ('#user-email')
    let emailLabel = document.querySelector ('#emailLabel')

    let senha = document.querySelector ('#user-senha')
    let senhaLabel = document.querySelector ('#senhaLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid ={
        email:'',
        senha:''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
        if (email.value == item.emailCad && senha.value == item.senhaCad){
            userValid = {
            email: emailCad,
            senha: senhaCad
        }
        }
    })
    console.log(userValid)
}