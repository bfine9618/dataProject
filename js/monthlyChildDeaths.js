$(document).ready(function() {

        var c = [];
        var d14 = [];
        var d15 = [];
        var d16 = [];
        var options = {
                chart: {
                    renderTo: 'age_col',
                    defaultSeriesType: 'line'
                },
                title: {
                    text: 'Child Shooting Deaths per Month'
                },
                xAxis: {
                    title: {
                    },
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    title: {
                        text: '# of Child Deaths'
                    }
                },
                series: [{
                    name: "2014",
                    data: d14
                },{
                    name: "2015",
                    data: d15
                },{
                    name: "2016",
                    data: d16
                }
                ]
        };

        $.get('data/monthlyChildDeaths.csv', function(data) {
            var lines = data.split('\n');
            $.each(lines, function(lineNo, line) {
                if(lineNo != 0){
                    if(lineNo < 12){
                        var items = line.split(',');
                        d14.push(parseInt(items[1]));
                    } else if(lineNo >11 && lineNo < 24){
                         var items = line.split(',');
                        d15.push(parseInt(items[1]));
                    } else{
                        var items = line.split(',');
                        d16.push(parseInt(items[1]));
                    }
                }   
            })
            var chart = new Highcharts.Chart(options);
        });
    });