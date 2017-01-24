function makeplot() {
  Plotly.d3.csv('data/anime.csv', function(data) {
    processData(data);
  });
};

function processData(allRows) {
  console.log(allRows);
  var x = [];
  var y = [];
  var standard_deviation = [];

  for (var i = 0; i < allRows.length; i++) {
    row = allRows[i];
    x.push( row['episodes'] );
    y.push( row['rating'] );
  }
  console.log('X', x, 'Y', y, 'SD', standard_deviation);
  makePlotly(x, y, standard_deviation);

}
function makePlotly(x, y, standard_deviation) {
  var plotDiv = document.getElementById('plot');
  var traces = [{
    x: x,
    y: y
  }];

  Plotly.newPlot('display', traces,
    {title: 'Anime'});
  };

makeplot();
