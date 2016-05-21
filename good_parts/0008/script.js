
////////////////////////////////////////////////////////////////////////////////
// 変数型の拡張
// Funciton.prototype を拡張することで、すべての関数で利用できるメソッドを追加することができる。
////////////////////////////////////////////////////////////////////////////////

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((100 / 303).integer());



String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});

console.log('"' + " neat ".trim() + '" ');


// 状況に応じてメソッドを追加する
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};
