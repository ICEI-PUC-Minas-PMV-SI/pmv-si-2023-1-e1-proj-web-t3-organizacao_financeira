const usuario = JSON.parse(localStorage.getItem('userLogado')) || [];
const menuSelect = document.getElementById('select-mes');
const categorias = [
  'Alimentação',
  'Educação',
  'Gastos domésticos',
  'Lazer',
];
const chartArea = document.getElementById("grafico-resumo-despesas");
let despesas = JSON.parse(window.localStorage.getItem('despesas')) || [];
let data = new Date();
let mesAtual = data.getMonth() + 1;
menuSelect.value = mesAtual;

function resumoDespesas(mes = menuSelect.value) {
  let totalDespesas = [];
  despesas.forEach(despesa => {
    categorias.forEach(categoria => {
      totalDespesas[despesa.categoriaDespesa] = 0;
    });
  });

  despesas.forEach(despesa => {
    if (usuario.email == despesa.userEmail) {
      let dataAtualizacao = new Date(Date.parse(despesa.dataAtualização));
      if (dataAtualizacao.getMonth() + 1 == mes) {
        totalDespesas[despesa.categoriaDespesa] += despesa.vlTotal;
      }
    }
  });

  return totalDespesas;
}

function atualizaRegistros() {
  let selectOption = menuSelect.value;
  drawChart(selectOption);
}

function limpaRegistros(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

// Load google charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(atualizaRegistros);

function drawChart(selectOption) {
  limpaRegistros(chartArea);
  let categorias = resumoDespesas(selectOption);
  let chartData = [
    ["Categoria", "Categorias"],
  ];
  for (var k in categorias){
    if (categorias.hasOwnProperty(k)) {
      chartData.push([k, Math.round(categorias[k])]);
    }
  }
  var data = google.visualization.arrayToDataTable(chartData);

  // Optional; add a title and set the width and height of the chart
  var options = {
    title: "Despesas por Categoria",
    width: 550,
    height: 400,
    is3D: true,
  };

  // Display the chart inside the <div> element with id="grafico-resumo-despesas"
  var chart = new google.visualization.PieChart(chartArea);
  chart.draw(data, options);
}
