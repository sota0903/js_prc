////////////////////////////////////////////////////////////////////////////////
// 再帰
// - 再帰関数とは自分自身を直接、もしくは間接的に呼び出す関数のこと
// - 再帰は、処理すべき問題をよく似た複数の小さな問題に分割して簡単に処理していけるような場合に利用可能なプログラミングテクニックのこと
////////////////////////////////////////////////////////////////////////////////

var hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
};

hanoi(5, 'Src', 'Aux', 'Dst');


// 再帰的関数はブラウザのDOMのようなツリー構造を操作する際に非常に効果的


// 指定されたノードからスタートし、その下の階層にある
// ノードすべてを HTML のソースの順番に基いて処理する
// walk_the_DOM 関数を定義する。その内部では、パラメータで渡された関数を呼び出す。
// その際に、同時に渡されたノードを渡している。
// その後、walk_the_DOM はそれぞれの子ノードを処理するために自分自身を呼び出す。
var walk_the_DOM = function walk (node, func) {
    func(node);
    node = node.firstChild;
    while(node) {
        walk(node, func);
        node = node.nextSibling;
    }
};


// getElementsByAttribute 関数を定義する。
// これは、属性名と、絞込みを行うための値を受け取る
// この関数は walk_the_DOM を呼び出し、そこにノードの属性名を調べる関数を渡す。
// 発見されたノードは配列 results に蓄積される。

var getElementsByAttribute = function (att, value) {
    var results = [];

    walk_the_DOM(document.body, function (node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });

    return results;
};


console.log(getElementsByAttribute('class', 'title'));


// 末尾再帰を行う階乗を計算する関数を作成する。
// この関数は自分自身を呼び出した結果を返しているので、
// 末尾再帰であると言える

var factorial = function factorial (i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, a * i);
};

console.log(factorial(7));
