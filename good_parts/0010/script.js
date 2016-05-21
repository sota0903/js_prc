////////////////////////////////////////////////////////////////////////////////
// ### スコープ
// プログラミングにおけるスコープとは、変数やパラメータの生存期間を決め、
// またどこからそれらにアクセスできるかという範囲を決めるものである。
// これはプログラマにとっては非常に重要な仕組みだ。
// なぜなら、スコープがあるおかげで、名前の衝突を減らすことができ、
// メモリ管理の自動化を行うことができるようになるからである。
////////////////////////////////////////////////////////////////////////////////

var foo = function () {
    var a = 3,
        b = 5;

    var bar = function () {
        var b = 7,
            c = 11;

        // この時点で、 a は 3 、 b は 7 、 c は 11 になっている

        a += b + c; // => 21
    };
    // この時点で、 a は 3 、 b は 5 、 c は未定義状態である

    bar();

    // この時点で a は 21 、b は 5 である
};

var myobj = {};
var myObject = function () {
    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    };
}();

// quo というオブジェクト生成用関数を定義する。
// これは get_status メソッドとプライベートな status プロパティを持つオブジェクトを生成する

var quo = function (status) {
    return {
        get_status: function () {
            return status;
        }
    };
};

var myquo = quo('amazed');
var fraco = quo('closed');

console.log(myquo.get_status());
console.log(fraco.get_status());


var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#ffff' + hex + hex;
        if (level < 15) {
            level++;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};

fade(document.body);
