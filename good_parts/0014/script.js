
var mammal = function (spec) {
    var that = {};

    that.get_name = function () {
        return spec.name;
    };

    that.says = function () {
        return spec.saying || '';
    };

    return that;
};

var myMammal = mammal({
    name: 'Herb'
});


// Catコンストラクタ関数では、差分だけ記述すればよい

var cat = function (spec) {
    spec.saying = spec.saying || 'meow';
    var that = mammal(spec);
    that.purr = function (n) {
        var i, s = '';
        for (i = 0; i < n; i++) {
            if (s) {
                s += '-';
            }
            s += 'r';
        }
        return s;
    };
    that.get_name = function () {
        return that.says() + ' ' + spec.name + ' ' + that.says();
    };
    return that;
};

var myCat = cat({
    name: 'FUGA',
    saying: 'HOGE'
});

console.log(myCat.purr(5));
console.log(myCat.get_name());


// 関数型パターンは、継承元のオブジェクトのメソッドを呼び出す方法も与えてくれる。

Object.method('superior', function (name) {
    var that = this;
    method = that[name];
    return function () {
        return method.apply(that, arguments);
    };
});

// coolcat

var coolcat = function (spec) {
    var that = cat(spec),
        super_get_name = that.superior('get_name');
    that.get_name = function (n) {
        return 'like ' + super_get_name() + ' body';
    };
    return that;
};

var myCoolcat = coolcat({
    name: 'COOOOOOL'
});

console.log(myCoolcat.get_name());
