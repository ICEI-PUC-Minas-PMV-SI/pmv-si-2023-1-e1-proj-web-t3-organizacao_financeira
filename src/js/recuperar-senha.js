function enviar(){
    let email = document.querySelector ('#user-email')
    let emailLabel = document.querySelector ('#emailLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = [];

    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
        if (email.value == item.emailCad){
            userValid = {
            nome: item.nomeCad,
            email: item.emailCad,
            senha: item.senhaCad
        }
        }
    })
    // console.log(userValid)
   event.preventDefault();
if(email.value == userValid.email){
window.location.href='../html/sucesso-recuperar-senha.html'


//O token será utilizado para recuperação de senha?
//let token = Math.random().toString(16).substring(2)
//localStorage.setItem('token', token)
//localStorage.setItem('userLogado', JSON.stringify(userValid))

} else{
    emailLabel.setAttribute('style', 'color:red')
    msgError.setAttribute('style','display:block')
    msgError.innerHTML= 'Usuário ou senha incorretos.'
    email.focus()

}

   
}