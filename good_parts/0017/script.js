// 配列のメソッド
//
// Array.prototype を拡張可能

// Function.prototype.method = function (name, func) {
//     this.prototype[name] = func;
//     return this;
// };
//
// Number.method('integer', function () {
//     return Math[this < 0  ? 'ceil' : 'floor'](this);
// });
//
//
// console.log((20 / 3).integer());



// Array.prototype.method = function (name, func) {
//     this.prototype[name] = func;
//     return this;
// };
//
// Array.method('reduce', function (f, value) {
//     for (var i = 0; i < this.length; i++) {
//         value = f(this[i], value);
//     }
//     return value;
// });



// 配列を初期化する機能の実装

Array.dim = function (dimension, initial) {
    var a = [], i;
    for (i = 0; i < dimension; i ++) {
        a[i] = initial;
    }
    return a;
};

var myArray = Array.dim(10, 0);

console.log(myArray);



// JavaScript では2次元以上の配列は用意されていない。
// しかし、C言語とほぼおなじ方法で、配列の配列を作ることができる。

var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];


console.log(matrix[0][0]);

Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i++) {
        a = [];
        for (j = 0; j < n; j++) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

var myMatrix = Array.matrix(4, 4, 0);

console.log(myMatrix);



// 単位行列を生成するメソッド

Array.identity = function (n) {
    var i, mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i++) {
        mat[i][i] = 1;
    }
    return mat;
};

myMatrix = Array.identity(5);

console.log(myMatrix);
