
var numbers = [];
var numbers_object = {};

numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

console.log(numbers.length);

numbers_object = {
    '0': 'one', '1': 'two', '2': 'three'
};

console.log(numbers_object);

// delete numbers[2];
numbers.splice(2, 1);

// console.log(numbers);


var i;
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


//配列かどうかの判定

var is_array = function (value) {
    return value && typeof value === 'object' && value.constructor === Array;
};

console.log(is_array(numbers));


is_array = function (value) {
    return value && // まず渡された値が truthy かどうか調べる
        // これは、 null や、そのほかの falsy な値を除外するためである
        typeof value === 'object' && // typeof を利用してその値が object かを調べる
        // これが真になるのは、オブジェクトか配列か（なぜか）nullである
        typeof value.length === 'number' && // length プロパティが数値であるか調べる
        // 配列の場合は真となるが、それ以外の場合は偽となる
        typeof value.splice === 'function' && // splice メソッドを持っているかどうか調べる
        // これも配列の場合は必ず真になる
        !(value.propertyIsEnumerable('length')); // 最後に length プロパティが列挙可能かどうか（for in ループ内で取り出せるかどうか）をチェックする
        // 配列の場合これは必ず偽となる
};

console.log(is_array(numbers_object));
