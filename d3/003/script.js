
var p = d3.select('body').selectAll('p');

// p.text('hoge')
//     .style({
//         'color': '#f0f',
//         'font-size': '40px',
//         'font-weight': 'bold'
//     });

// p.style('font-size', function () {
//     return Math.floor(Math.random() * 29) + 'px';
// });

d3.select('body').append('p').text('hello');

// d3.select('body').selectAll('p').remove();


var svg = d3.select('body').append('svg')
    .attr({
        width: 1000,
        height: 800
    });

svg.selectAll('circle')
    .data(['hoge', 'hoge', 'hoge'])
    .enter()
    .append('circle');

svg.selectAll('circle').attr('r', 70);
svg.selectAll('circle').attr('title', function (d) {
    return d;
});

