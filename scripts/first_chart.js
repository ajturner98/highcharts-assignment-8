// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Prunes', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Kyle and Jessica\'s house'
      }
    },
    series: [{
      name: 'Kyle',
      data: [6, 1, 0, 4]
    }, {
      name: 'Jessica',
      data: [6, 5, 7, 3]
    }]
  });
