////////////////////////////////////////////////////////////////////////////////
// オブジェクト
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// プロトタイプ
////////////////////////////////////////////////////////////////////////////////

var stooge = {
    nickname: 'Houta'
};

// ※typeof演算子は評価の行われないままの状態のオペランドのデータ型を示す文字列を返す
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.create(stooge);
console.log(another_stooge);


var hoge = function () {};
console.log(typeof hoge);



////////////////////////////////////////////////////////////////////////////////
// プロパティの列挙
// - for in 文を利用すると、オブジェクト内に存在するすべてのプロパティの名前を順に取り出すことができる
////////////////////////////////////////////////////////////////////////////////
another_stooge['first-name'] = 'peko';

console.log('↓オブジェクトのプロパティを列挙');
var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        console.log(name + ': ' + another_stooge[name]);
    }
}

// ただし、取得できるプロパティは順番が保証されない。
// もしプロパティを特定の順序で取り出したいのであれば、
// 正しい順序にプロパティの名前を並べた配列を用意しておくのが良い

var i;
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];
for (i = 0; i < properties.length; i++) {
    console.log(another_stooge[properties[i]]);
}


////////////////////////////////////////////////////////////////////////////////
// プロパティの削除
// - delete を使用する
// - このオペレータは、プロトタイプチェーン上のオブジェクトに作用することはない
// - オブジェクトからプロパティを削除すると、プロトタイプチェーン上に存在していた同じ名前のプロパティが見えるようになる
////////////////////////////////////////////////////////////////////////////////

stooge.age = 29;
another_stooge.age = 30;
// delete another_stooge.age;
console.log(another_stooge.age);
