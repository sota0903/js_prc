$(function () {

    // 並び順を設定 // 1: 昇順, 2: 降順
    var sortOrder = 1;

    // 列をクリックしたら
    $('.dothesort').on('click', function () {

        // 値の種類を取得
        var type = $(this).data('type'); // string or integer

        // 何列目かを取得
        var col = $(this).index();

        // 行全体を取得して格納しておく
        var $rows = $('tbody > tr');

        // 行を並べ替え
        $rows.sort(function (a, b) {
            return compare(a, b, type, col) * sortOrder;
        });

        // 並び替えされた行を挿入
        $('tbody').empty().append($rows);

        // order を反転
        sortOrder *= -1;
    });

    function compare (a, b, type, col) {
        var _a = $(a).find('td').eq(col).text(); // integer
        var _b = $(b).find('td').eq(col).text(); // string

        if (type === 'string') {
            if (_a < _b) {
                return -1;
            }
            if (_a > _b) {
                return 1;
            }
            return 0;
        } else {
            _a * 1;
            _b * 1;
            return _a - _b;
        }

    }
});
