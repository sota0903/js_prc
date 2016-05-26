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
    // c => 3
    // なぜなら、Array.push()メソッドは配列のlengthを返すから

};
