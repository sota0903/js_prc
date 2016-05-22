////////////////////////////////////////////////////////////////////////////////
// メモ化
////////////////////////////////////////////////////////////////////////////////

// var fibonacci = function (n) {
//     return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
// };
//
// for (var i = 0; i <= 10; i++) {
//     console.log('//' + i + ': ' + fibonacci(i));
// }


// 上記は正しく動作するが、不要な動作が含まれてしまっている。
// fibonacci 関数が453回も呼び出されてしまっている。


// memo という配列を利用すると下記のようになる

var fibonacci = function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
};


// for (var i = 0; i <= 10; i++) {
//     console.log('//' + i + ': ' + fibonacci(i));
// }



// メモ化のためのサポート関数を用意

var memoizer = function (memo, fundamental) {
    var shell = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    };
    return shell;
};


var fibonacci = memoizer([0, 1], function  (shell, n) {
    return shell(n - 1) + shell(n - 2);
});
