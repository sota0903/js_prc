# D3.js

- Data Driven Document
- JavaScriptによるデータ視覚化ライブラリ


### D3.jsが用意した色を使用する
- `d3.scale.category10()`を使う
- これは戻り値がメソッドになる
- 以下のように記述

```javascript

var color = d3.scale.category10();

    ......
    .attr('fill', function(d, i) {
        return color(i);
    })

```


### onメソッド
- jQueryと同じメソッド
- 使い方もパラメータも同じ
- on(イベント名, イベントハンドラ)


### アニメーションさせる
- 座標や幅をアニメーション初期値に設定
- イベントハンドラ内でtransition()を記述
- その後にグラフの幅を指定すれば自動的にアニメーションする


### CSVデータを読み込む
- d3.csv()でCSV読み込み
- タブ区切りだとd3.tsv()
- 書式は以下のとおり

`d3.csv(URL, 読み込んだ際に実行する関数)`


## バブルチャートを作成するには？

### バブルチャートを生成
- d3.layout.pack()
- 横幅と縦幅を指定する
- 円の半径を指定したり、円と円の間隔を指定できる

```javascript
var bubble = d3.layout.pack()
    .size(['横幅を指定', '縦幅を指定']);
```


### SVGの円を生成、円と文字をグループ化
- 文字を表示するために円と文字をグループ化
- .append('g')でグループを作成
- グループ内に円と文字を生成する

```javascript
grp.append('circle') //円を生成
    .attr('r', function (d) { //円を指定した半径にする
      return d.r;
    })
```


### 文字を生成
- append('text')でtext要素を生成
- text()メソッドで文字を表示

```javascript
grp.append('text')
    .attr('font-size', '9pt')
    .attr('fill', 'black')
    .style('text-anchor', 'middle')
    .text(function (d) {
        return d.className;
    });
```


### マウスクリックでアニメーションさせる
- transition()でカンタンにできる

```javascript
d3.select('body').on('click', function () {
  circle.transition()
      .duration(2000)
      .attr('r', function (d) {
          return d.r;
      });
})
```


## 注意などまとめ
- データと機能が分離している
- CSSはスクリプトでなく別ファイルで管理したほうが良いかも
- データは生データではダメで、D3.jsで使えるようにサーバ等で加工してから渡す
- インタラクティブにしないならjqPlotなど一般的なライブラリを使う方がよい
