window.addEventListener('DOMContentLoaded', (event) => {
  const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const bid = parseFloat(data.USDBRL.bid).toFixed(2);

      const elemento = document.getElementById('dolar');
      elemento.textContent = `Dólar: R$${bid}`;
    })
    .catch(error => {
      console.log('Erro', error);
    });
});
