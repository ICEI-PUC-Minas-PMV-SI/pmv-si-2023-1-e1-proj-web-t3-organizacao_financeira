window.addEventListener('DOMContentLoaded', (event) => {
    const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados/ultimos/1?formato=json';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const valorDolar = parseFloat(data[0].valor).toFixed(2);

        const elemento = document.getElementById('dolar');
        elemento.textContent = `Dólar: R$${valorDolar}`;
      })
      .catch(error => {
        console.log('Erro', error);
      });
  });
