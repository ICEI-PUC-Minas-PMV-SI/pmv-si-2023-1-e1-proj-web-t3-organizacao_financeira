let labelNome = document.querySelector('#labelNome')
let nome = document.querySelector('#nome')
let validNome = false

let labelEmail = document.querySelector('#labelEmail')
let email = document.querySelector('#email')
let validEmail = false

let labelMensagem = document.querySelector('#labelMensagem')
let mensagem = document.querySelector('#mensagem')
let validMensagem = false

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.innerHTML = 'Nome:  (Insira no mínimo 3 caracteres)'
        validNome = false
    } else {
        labelNome.innerHTML = 'Nome:'
        validNome = true
    }
})

email.addEventListener('keyup', () => {
    if (email.value.length <= 5) {
        labelEmail.innerHTML = 'Email:  (Insira um endereço de email válido)'
        validEmail = false

    } else {
        labelEmail.innerHTML = 'Email:'
        validEmail = true
    }
})

mensagem.addEventListener('keyup', () => {
    if (mensagem.value.length <= 2) {
        labelMensagem.innerHTML = 'Digite aqui sua mensagem:  (Digite uma mensagem válida)'
        validMensagem = false
    } else {
        labelMensagem.innerHTML = 'Digite aqui sua mensagem:'
        validMensagem = true
    }
})

function enviarMensagem() {
    if (validNome && validEmail && validMensagem) {
        let contato = JSON.parse(localStorage.getItem('contato') || '[]')
        contato.push(
            {
                nomeContato: nome.value,
                emailContato: email.value,
                mensagemContato: mensagem.value
            })

        localStorage.setItem('contato', JSON.stringify(contato))
        alert("Mensagem enviada com sucesso. Em breve, entraremos em contato.")
        reload()
    } else {
        alert("Por favor, preencha os campos corretamente antes de enviar a mensagem.")
    }
}