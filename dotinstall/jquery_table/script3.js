$(function () {

    // 並び順を設定
    // 1: 昇順, 3: 降順
    var sortOrder = 1;

    // 列をクリックしたら
    $('.dothesort').on({
        'click': function () {

            // 値の種類を取得
            var type = $(this).data('type'); // string or integer

            // 何列目かを取得
            var col = $(this).index();

            // 行全体を取得して変数に格納
            var $rows = $('tbody > tr');

            // 行を並べ替え
            $rows.sort(function (a, b) {
                return compare(a, b, type, col) * sortOrder;
            });

            // 並び替えした行を挿入
            $('tbody').empty().append($rows);

            // 現在の並び方がわかるように記号をつける
            var arrow = sortOrder === 1 ? '▼' : '▲';
            $('.dothesort').find('span').text('');
            $(this).find('span').text(arrow);

            // order 反転
            sortOrder *= -1;
        }
    });

    // 比較関数を作成
    function compare (a, b, type, col) {
        var _a = $(a).find('td').eq(col).text(); // 1列目は integer
        var _b = $(b).find('td').eq(col).text(); // 2列目は string

        if (type === 'string') {
            if (_a < _b) {
                return -1;
            }
            if (_a > _b) {
                return 1;
            }
            return 0;
        }
        else {
            // 数値へ変換
            _a * 1;
            _b * 1;
            return _a - _b;
        }
    }
});
