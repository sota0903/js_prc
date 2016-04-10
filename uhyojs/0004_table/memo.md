## table
- table要素のHTMLElementは、HTMLTableElementと呼ばれる
- HTMLTableElementはいくつもの独自のプロパティやメソッドを持っている

### rows
- そのテーブルが持つtr要素すべてがまとめて集まっている
- 基本的にrowsプロパティを通してテーブルのtr要素を操作することとなる
- 要素がいくつも集まっているオブジェクトのことをHTMLCollectionという
- これはHTML要素専用のNodeListみたいな感じで、NodeListと同じように使用できる

## insertRow, insertCell
- rowやcellを挿入するメソッド

## thead, tbody, tfoot
- HTMLTableSectionElementと呼ばれている

### createTHead, createTFoot
- theadやtfootを取得するメソッド
- ない場合は生成する

### deleteTHead, deleteTFoot
- theadやtfootを削除するメソッド
- 引数はなし

### tBodies
- table要素のプロパティ
- tbody要素の一覧(HTMLCollection)が入っている
