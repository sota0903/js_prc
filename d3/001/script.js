d3.select('#sample')
    .style('color', 'red');


var list = [10, 22, 45, 20, 50, 2, 19, 39];

d3.select('#graph').selectAll('div')
    .data(list)
    .enter()
    .append('div')
    .style('vertical-align', 'bottom')
    .style('width', '20px')
    .style('display', 'inline-block')
    .style('margin-right', '4px')
    .style('background-color', 'red')
    .text(function (d) { return d; })
    .style('height', function (d) {
        return (d*2)+'px';
});


var svgWidth = 640;
var svgHeight = 480;
d3.select('#svg1').append('svg')
    .attr('width', svgWidth).attr('height', svgHeight)
    .selectAll('rect')
    .data(list)
    .enter()
    .append('rect')
    .attr('x', function (d,i) { return (i * 24) + 'px' })
    .attr('y', 0)
    .attr('height', function (d) { return (d * 2) + 'px'})
    .attr('width', 20)
    .attr('style', 'fill:rgb(0,0,255)');
