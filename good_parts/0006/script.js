////////////////////////////////////////////////////////////////////////////////
// 関数
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// コンストラクタ呼び出しパターン
////////////////////////////////////////////////////////////////////////////////

// Quoという名のコンストラクタ関数を生成
// これはstatusというプロパティを持つオブジェクトを生成する
var Quo = function (string) {
    this.status = string;
};

// get_statusというパブリックメソッドをQuoのすべてのインスタンスで利用可能にする
Quo.prototype.get_status = function () {
    return this.status;
};

// Quoのインスタンスを生成する
var myQuo = new Quo('confused');

console.log(myQuo.get_status()); // -> confused
