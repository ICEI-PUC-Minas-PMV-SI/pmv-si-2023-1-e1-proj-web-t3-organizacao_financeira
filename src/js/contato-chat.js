const apiKey = "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"

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

    //Requisição API chatGpt  
    fetch("https://api.openai.com/v1/completions",{
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: 'Bearer '+apiKey
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: message.value,
            max_tokens: 2048,
            temperature: 0.5
        })
    })
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
    })

}