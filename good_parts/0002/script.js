
var hoge = 'hoge';
console.log(hoge);




////////////////////////////////////////////////////////////////////////////////
// forin文 （P15 〜 P16）
// - objectのkeyに対応したvalueをkeysへ格納
////////////////////////////////////////////////////////////////////////////////
var hogeObj = {
    arm: 'ude',
    leg: 'ashi'
};

var keys = [];
var key;
for (key in hogeObj) {
    if (hogeObj.hasOwnProperty(key)) {
        keys.push(key);
    }
}
console.log(keys);



////////////////////////////////////////////////////////////////////////////////
// 関数リテラル （P21 〜 P22）
//   再帰的に呼び出しを行う際に利用するために、名前をつけることもできる
////////////////////////////////////////////////////////////////////////////////
function es (val) {
    if (val > 10) {
        return 10;
    }
    var n = val;
    n += 2;
    console.log(n);
    es(n);
}

var fuga = es(3);
console.log(fuga);
