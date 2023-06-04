

function sendMessage() {
    var message = document.getElementById('message-input')
    if (!message.value) {
        message.style.border = '1px solid red'
        return
    }


    message.style.border = 'none'

    var status = document.getElementById('status')
    var btnEnviar = document.getElementById('btn-enviar')

    status.innerHTML = 'Carregando...'
    btnEnviar.disabled = true
    btnEnviar.style.cursor = 'not-allowed'
    message.disabled = true
   
    }
