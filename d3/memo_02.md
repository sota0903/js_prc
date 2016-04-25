## 基本

1) 要素を指定
select/selectAll

2) 設定/取得
- text
- attr
- style
- append
- remove

### 値に関数を使用した場合の引数
- 第一引数（慣習的にdが使われる）はデータの中身
- 第二引数はデータのインデックス


- dataを使った瞬間に仮想領域が作られる
  - update: 対応する要素がある場合 -> text, style
  - enter: 対応する要素が足りない場合 -> append
  - exit: 対応する要素が余った場合 -> remove


### each
- 第一引数にstart/endを入れる
- アニメーションの始めと最後に処理を行いたい場合に使用する

### memo
- 値には関数を指定することができる
- 要素の追加はappend
- 要素の削除はremove
