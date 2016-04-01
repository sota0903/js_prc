
## createElementメソッドでHTMLElementを作る
- createElementでできた要素はdocument.getElementByIdなどで取得したものと同じように扱うことができる
- ただし、ただできただけでは木構造に加わっていないため、木構造に追加する必要がある

### テキストノードを生成する
- createTextNodeで新たなテキストノードを生成

### HTMLElementにテキストノードを入れる
- appendChildを使用
- `newElement.appendChild('textnode')`となる


## getElementsByTagName
- documentやノードが持つメソッドで、引数に要素名を渡すとその要素の一覧のNodeListを返す
- docuemntが持つgetElementsByTagNameの場合、文書全体から探す
- ノードが持つgetElementsByTagNameの場合、そのノードより下から探す
- タグ名の代わりに`*`を引数とすると、すべての要素を取得できる


## insertBefore
- ノードが持つメソッド
- appendChildと似ていて、appendChildは子ノードの最後にしか追加できないが、insertBeforeならどこにでも追加できる


## 兄弟ノード(previousSibling, nextSibling)
DOMには兄弟ノードを取得する方法もある。previousSiblingとnextSiblingを使用する。

## replaceChild
- ノードが持つプロパティ
- そのノードが持つある子ノードを別のノードに置き換える
- ひとつ目の引数が置き換え後のノードで、ふたつめの引数が置き換え前のノードとなる

## cloneNode
- ノードが持つメソッド
- ノードをコピーできる
- 引数trueで、子ノードもすべてコピー
- 引数falseで、そのノードのみコピー
