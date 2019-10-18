Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Midterm Voter Participation by Age, 1998-2018'
    },
    subtitle: {
        text: 'Source: The US Census Bureau Voting and Registration'
    },
    xAxis: {
        categories: [1998, 2002, 2006, 2010, 2014, 2018]
    },
    yAxis: {
        title: {
            text: 'Percentage (%) of Participation'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true
        }
    },
     series: [{
        name: '18-24',
        data: [16.6, 17.2, 22.1, 21.3, 17.1, 32.4]
    }, {
        name: '25-34',
        data: [28, 27.1, 33.5, 31.2, 27.6, 42.1]
    }, {
        name: '35-44',
        data: [40.7, 40.2, 45.5, 43.1, 37.8, 51]
    }, {
        name: '45-54',
        data: [50.7, 50.2, 53.8, 50.5, 45.2, 57]
    }, {
        name: '55-64',
        data: [57.9, 57.4, 62.5, 59, 54, 61.8]
    }, {
        name: '65-74',
        data: [63.3, 63.1, 64.3, 62.1, 61.2, 68.1]
    }, {
        name: '75 and over',
        data: [54.8, 58.6, 60.6, 59.2, 56.9, 63.2]
    }],
    responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
    chartOptions: {
      legend: {
        enabled: false
      }
    }
  }]
}


});

Highcharts.chart('container1', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Reasons for Not Voting in the 2018 Midterm Elections'
  },
  subtitle: {
    text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
  },
  xAxis: {
    categories: ['Illness/Disability', 'Out of Town', 'Forgot to Vote', 'Not Interested', 'Too Busy', 'Transportation Problems', 'Didn\'t Like Candidates or Campaign Issues', 'Registration Problems',  'Bad Weather', 'Inconvenient Polling Location', 'Other', 'Don\'t Know/Refused'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Percentage (%)',
      align: 'high'
    },
    labels: {
      overflow: 'wrap'
    }
  },
  tooltip: {
    valueSuffix: ' percent'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: '18-24',
    data: [4.3, 13.4, 7.1, 15.1, 31, 1.1, 3.2, 5, 0.1, 4.3, 11, 4.4]
  }, {
    name: '25-44',
    data: [5.6, 8, 5.9, 16.8, 35.4, 2, 3.8, 3.6, 0.3, 3.5, 12, 3]
  }, {
    name: '45-64',
    data: [12.4, 10.5, 5, 15.9, 25.3, 3.1, 6.4, 2.4, 0.6, 3.7, 11.9, 2.8]
  }, {
    name: '65 and over',
    data: [37.6, 6.1, 4.5, 12.0, 6.0, 6.3, 9.1, 1.7, 1.5, 1.2, 11.5, 2.5]
  }],
  responsive: {
  rules: [{
    condition: {
      maxWidth: 500
    },
    chartOptions: {
      legend: {
        enabled: false
      }
    }
  }]
}
});
