/*=================================================
 メソッド

 JavaScript の、標準の変数型で利用可能なメソッド
=================================================*/


// Array
//----------------------------------------------


// array.concat( item... )
//   自分自身の配列と引数に指定した要素を連結して、
//   新しいコピー配列を生成する
var array_method_1 = function () {
    var a = ['a', 'b', 'c'];
    var b = ['x', 'y', 'z'];
    var c = a.concat(b, 'g', 'hoge');
    console.log(c); // => a, b, c, x, y, z, g, hoge
};


// array.join( separator )
//   配列から文字列を生成する
//   セパレータを引数で渡す
//   セパレータを入れたくなければ、引数に空文字列を渡す
var array_method_2 = function () {
    var a = ['a', 'b', 'c'];
    a.push('d');
    var c = a.join('-');
    console.log(c); // => a-b-c-d
};
// 複数のバラバラなデータから文字列を生成したいのであれば、
// すべてのデータを + で連結するよりも、配列に格納してから join したほうが
// 通常は高速になる


// array.pop()
// array.push( item... )
//   配列をスタックのように利用する
var array_method_3 = function() {
    var a = ['a', 'b', 'c'];
    var b = a.pop();
    console.log(b); // => c
    console.log(a); // => ['a', 'b']

    var c = a.push(b);
    console.log(a); // => ['a', 'b', 'c']
    console.log(c); // c => 3
    // なぜなら、Array.push()メソッドは配列のlengthを返すから

};


// array.reverse()
//   reverse メソッドはその要素を逆の順番に入れ替えたものに置き換える。このメソッドは配列自身を返す。
var array_method_4 = function () {
    var a = ['a', 'b', 'c'];
    var b = a.reverse();
    console.log(a); // => ['c', 'b', 'a']
    console.log(b); // => ['c', 'b', 'a']
};


// array.shift()
//   配列の先頭から先頭の要素を削除してそれを返す。
//   配列が空だった場合は undefined を返す
var array_method_5 = function () {
    var a = ['a', 'b', 'c'];
    var b = a.shift();
    console.log(a); // => ['b', 'c']
    console.log(b); // => a
};


// array.slice( start, end )
//   配列のいち部分からコピーを作成する
var array_method_6 = function () {
    var a = ['a', 'b', 'c'];
    var b = a.slice(0, 1);
    console.log(b); // => ['a']
    // 第二引数を省略した場合 array.length を指定しているものとみなされる
    var c = a.slice(1); // => ['b', 'c']
    console.log(c);
};


// array.sort( comparefn );
//   配列自身をソートしたものに置き換える。
//   ただし、このメソッドは数値の配列を正しく並べ替えることができない


// array.splice( start, deleteCount, item... )
//  - 配列から要素を取り除き、新しい要素で置き換える
//  - start は配列の中の位置を数値で指定
//  - deleteCount は start で指定した位置からいくつの要素を削除するかを指定
//  - 3番目以降のパラメータが指定されていた場合は、指定された要素がその場所に挿入される
var array_method_7 = function (){
    var a = ['a', 'b', 'c'];
    var r = a.splice(1, 1, 'ache', 'bug');
    console.log(a); // ['a', 'ache', ['bug'], 'c']
    // このメソッドは、削除された要素で構成された配列を返す
    console.log(r); // => ['b']
};


// array.unshift(item...)
//   配列の一番先頭に要素を追加する
//   配列の新しい要素数を返す
var array_method_8 = function () {
    var a = ['a', 'b', 'c', 'd'];
    var r = a.unshift('?', '@');
    console.log(a); // => ['?', '@', 'a', 'b', 'c', 'd']
    console.log(r); // => 6
}();
