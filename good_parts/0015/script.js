
////////////////////////////////////////////////////////////////////////////////
// オブジェクトのパーツ
// パーツを組み立てるようにオブジェクトを生成することもできる。
// 例えば、シンプルなイベント処理の機能をオブジェクトに追加することができる関数を考えてみる。
// この関数は on メソッド、 fire メソッド、そしてプライベートなイベントレジストリを追加する。
////////////////////////////////////////////////////////////////////////////////

var eventuality = function (that) {
    var registry = {};

    that.fire = function (event) {

        // オブジェクトのイベントを発生させる。引数 event は、イベントの名前を文字列で指定するか、
        // type プロパティにイベント名を格納したオブジェクトを渡す。すると on メソッドによって登録されたイベントハンドラの中で、
        // 該当するイベント名を持つものが呼び出される。

        var array,
            func,
            handler,
            i,
            type = typeof event === 'string' ? event : event.type;

        // もし、指定されたイベントに対するイベントハンドラの配列が存在したら、
        // その中身をループで回して、順番にイベントハンドラを実行していく

        if (registry.hasOwnProperty(type)) {
            array = registry[type];
            for (i = 0; i < array.length; i += 1) {
                handler = array[i];

                // ハンドラレコードには method と parameters というプロパティが記録されている。
                // parameters は省略可能である。method は実行される関数の名前を表している。

                func = handler.method;
                if (typeof func === 'string') {
                    func = this[func];
                }

                // ハンドラを実行する。もしハンドラレコードにパラメータが用意されていたら、
                // それも渡す。もしパラメータがなければ event オブジェクトを渡す。

                func.apply(this, handler.parameters || [event]);
            }
        }
        return this;
    };
    that.on = function (type, method, parameters) {

        var handler  = {
            method: method,
            parameters: parameters
        };
        if (registry.hasOwnProperty(type)) {
            registry[type].push(handler);
        } else {
            registry[type] = [handler];
        }
        return this;
    };
    return that;
};


eventuality({
    fire: 'hoge',
    on: function () {
        console.log('hoge');
    }
});
