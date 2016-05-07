////////////////////////////////////////////////////////////////////////////////
// オブジェクト
//   - 値の取得
//     文字列式を[]で囲んで指定する。
//     文字列式が定数で、予約語ではないJavaScriptの名前のルールに則っているなら、
//     []の代わりに.を使用できる。
////////////////////////////////////////////////////////////////////////////////
var flight = {
    airline: 'Oceanic',
    number: 815,
    departure: {
        IATA: 'SYD',
        time: '2004-09-02 14:55',
        city: 'Sydney'
    },
    arrival: {
        IATA: 'LAX',
        time: '2004-09-03 14:55',
        city: 'Los Angeles'
    }
};


//
// 存在しない値を取得しようとするとundefinedが返される。
//   - || 演算子を使用して、デフォルト値を指定することができる。
//   - undefined に対して、さらにそのプロパティを取得しようとしてしまうと、
//     typeError例外が投げられてしまう。
//   - && 演算子を利用することにより、上記を回避することができる。
//
var status = flight.status || 'unknown';
console.log(status);

flight.equipment = {};
// flight.equipment.model = 'testModel';
var equipment = flight.equipment && flight.equipment.model;
console.log(equipment);
