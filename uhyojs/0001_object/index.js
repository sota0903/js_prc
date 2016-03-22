/*=================================================
 オブジェクトについて
=================================================*/
var prcFirst = function() {
    var obj = new Object(); // オブジェクトを生成
    obj.aaa = 'test'; //オブジェクトに値を代入
    obj.b = 123; // 同上
    obj['c'] = 456; //この書き方でもOK

    console.log(obj);
    // {aaa: 'test', b: 123, c: 456}
};


/*=================================================
 オブジェクトの実体
=================================================*/
var prcSecond = function() {
    var obj = {
        'aaa': 'test',
        'bbb': 123
    };
    var b = obj;

    // ここで複製されるのは「参照」となる。オブジェクトそのものは複製されない。
    obj.aaa = 'hoge';
    console.log(obj);
    console.log(b); // objを参照しているためobjと同じになる
};

/* NOTE */
// - オブジェクトとは、変数に代入したとき、その実体ではなく参照が代入されるというもの
// - それに対して、実体がそのまま代入されるものをプリミティブという



/*=================================================
 配列のコピー
=================================================*/
var prcThird = function() {
    var a = [0, 1, 2, 3, 4, 5];
    var b = a; // 参照を複製している
    console.log(a); // [0, 1, 2, 3, 4, 5]
    a[5] = 10;
    console.log(b); // 同上
    var c = copyArray(a);
    a[5] = 20;
    console.log(c);
    console.log(b);

    // 配列をコピーする関数
    // 配列の要素はオブジェクトではなくプリミティブ値。
    // なので、配列自体をコピーするのではなく、新しく配列を生成し、1つずつの要素をループで入れていく
    function copyArray(arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr[i] = arr[i];
        }
        return newArr;
    }

};



/*=================================================
 多次元配列
=================================================*/
var prcFourth = function() {
    var a = [
        [0, 1, 2],
        [4, 5, 6],
        [7, 8, 9]
    ];
    var b = a;
    a[0][0] = 99;
    console.log(a);
    console.log(b); // bはオブジェクトを参照しているのでaと同じものが出力される

    // 配列を複製する関数を作り直しましょう
    // 前述のcopyArrayを使用すると、配列の要素がまた配列だと、そこで参照をコピーしてうまくいかない
    // function copyArray(arr) {
    //   var newarr = [];
    //   for (var i = 0; i < arr.length; i++) {
    //     newarr[i] = arr[i];
    //   }
    //   return newarr;
    // }

    // var c = copyArray(a); // cそのものはaとは中身が同じ別の配列だが、今回の中身には配列の参照が代入されている。

    // そこでcopyArrayの中で、中身が配列だった場合はcopyArrayを呼び出すという処理を追加する。関数内でその関数を呼び出す方法を「再帰」という
    function copyArray(arr) {
        var newarr = [];
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                newarr[i] = copyArray(arr[i]); //再帰
            } else {
                newarr[i] = arr[i]; // 数値を代入
            }
        }
        return newarr;
    }

    var c = copyArray(a);
    a[0][3] = 3;
    console.log(c);
    console.log(a);

};



/*=================================================
 オブジェクトと関数
=================================================*/
var prcFifth = function() {
    // Javascriptではすべてのものがオブジェクトかプリミティブ値
    // 関数もオブジェクトだが、かなり特殊なオブジェクトである
    // 「()」をつけると呼び出すことができるというのは関数だけがもつ特徴
    function log(value) {
        console.log(value);
    }
    log(log);

};



/*================================================
 メソッド
=================================================*/
// メソッドとは、プロパティのうち関数であるもののことをあらわす
var prcSix = function() {
    var a = {};
    a.log = function(value) {
        console.log(value);
    };
    a.log = function() {
        console.log('aは書き換えられた');
    };
    var b = a;
    b.log('test');

    var c = function () {
        return function () {
            console.log('hoge');
        };
    };
    var d = c();
    d();
    (c())();

    // 下記のようなカタチは無名関数という
    // 大規模な処理をする場合など、関数の中でローカル変数を使えることが役立つ場合もある。たくさん変数を使う処理をすると、他のところで変数がかぶってしまうかもしれない。しかし、無名関数をつくってその中でローカル変数を作って処理をすれば、外には影響はでない。
    (function() {console.log('fuga');})();
    (function () {
        console.log('buzz');
    })();

};
