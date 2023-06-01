// Load google charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Categoria", "Categorias"],
    ["Alimentação", 1200],
    ["Educação", 800],
    ["Água/Luz", 400],
    ["Transporte", 700],
    ["Lazer", 300],
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    title: "Despesas por Categoria",
    width: 550,
    height: 400,
    is3D: true,
  };

  // Display the chart inside the <div> element with id="grafico-resumo-despesas"
  var chart = new google.visualization.PieChart(
    document.getElementById("grafico-resumo-despesas")
  );
  chart.draw(data, options);
}
