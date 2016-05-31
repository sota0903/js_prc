$(function () {

    // 並び替え順を設定
    var sortOrder = 1; // 1: 昇順 -1: 降順

    // 列をクリックしたら
    $('.dothesort').on('click', function () {

        var type = $(this).data('type'); // string, integer
        var col = $(this).index(); // 0, 1, ...

        // 行全体を取得
        var $rows = $('tbody > tr');

        // 行を並べ替え（点数で）
        $rows.sort(function (a, b) {
            return compare(a, b, type, col) * sortOrder;
        });

        // tbodyを並び替えされた行全体で入替え
        $('tbody').empty().append($rows);

        var arrow = sortOrder === 1 ? '▲' : '▼';
        $('.dothesort > span').text('');
        $(this).find('span').text(arrow);

        // 並べ替え順を反転
        sortOrder *= -1;
    });

    function compare (a, b, type, col) {
            var _a = $(a).find('td').eq(col).text();
            var _b = $(b).find('td').eq(col).text();

            if (type === 'string') {
                if (_a < _b) {
                    return -1;
                }
                if (_a > _b) {
                    return 1;
                }
                return 0;

            // integer
            } else {
                _a *= 1;
                _b *= 1;
                return _a - _b;
            }
    }

});
