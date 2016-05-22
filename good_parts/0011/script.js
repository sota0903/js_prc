
////////////////////////////////////////////////////////////////////////////////
// カリー化
// - 関数に引数を固定して新しい関数を生成する
////////////////////////////////////////////////////////////////////////////////

// Function.method('curry', function () {
//     var args = arguments,
//         that = this;
//         return function () {
//             return that.apply(null, args.concat(arguments));
//         };
// });

Function.method('curry', function () {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});

var add = function (a, b) {
    return a + b;
};
var add1 = add.curry(1);
console.log(add(6));
