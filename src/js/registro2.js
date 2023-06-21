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
    }
} )

function cadastrar(){
    // reload(); // para checar se e-mail está sendo digitado corretamente

    if (validNome && validEmail && validTelefone && validSenha && validSenha2){ //Função que testa a integridade dos dados digitados pelo usuário.
        // incrmenta listaUser se ja estiver criada ou cria uma lista vazia se não houver cadastro
    let listaUser = JSON.parse(localStorage.getItem ('listaUser') || '[]') 


    listaUser.push(
        {
            nomeCad: nome.value,
            emailCad: email.value,
            telCad: telefone.value,
            senhaCad: senha.value
        }
    )

    

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    alert('Cadastrado com Sucesso')


setTimeout(() => {
   // colocar link para redirecionar para página do login após cadastro
   window.location.href = 'https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/login.html' 
}, 2000);



} else{
        alert ('Preencha todos os campos corretamente')
        nome.value = "",
        email.value = "",
        telefone.value ="",
        senha.value = "",
        senha2.value = ""

        reload()

    }
}
