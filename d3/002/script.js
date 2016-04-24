var list = [30, 20, 10, 5, 40, 8, 20, 13];
var colors = ['#ff7777', '#e2fc97', '#ffb178', '#ffb3e7', '#49f', '#449', '#f08', '#f99'];


var sample_01 = function () {

    var d3Colors = d3.scale.category10();

    var svgWidth = 640; // SVG領域の横幅
    var svgHeight = 480; // SVG領域の縦幅

    // SVGの表示領域を生成
    var svg = d3.select('#graph').append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight);

    // 円グラフを生成
    var pie = d3.layout.pie()
        .value(function (d) {
            return d;
        });

    // 円グラフのサイズを指定
    var arc = d3.svg.arc().innerRadius(0).outerRadius(200);

    // 円グラフを描画
    svg.selectAll('path')
        .data(pie(list))
        .enter()
        .append('path') // 円弧はパスで指定
        .attr('d', arc) //円弧を設定
        .attr('stroke', 'white') // 円グラフの区切り線を変更
        .attr('transform', 'translate('+svgWidth/2+','+svgHeight/2+')')
        .transition()
        .duration(2000)
        .attr('fill', function (d, i) {
            return d3Colors(i);
        });
        // .attr('fill', function (d, i) { return colors[i]; })
}();


var sample_02 = function () {

    d3.select('#graph_02')
        .append('svg')
        .attr('width', 640)
        .attr('height', 480)
        .selectAll('rect')
        .data(list)
        .enter()
        .append('rect')
        .attr('fill', function( d, i ) {
            return colors[i];
        })
        .attr('y', 0)
        .attr('x', function (d, i) {
            return (i * 50) + 'px';
        })
        .attr('width', 40)
        .attr('height', 0)
        .transition()
        .duration(2000)
        .attr('height', function (d) {
            return (d * 10) + 'px';
        });

}();
