
## 7章 正規表現

JavaScript において正規表現が利用できるメソッド
- `regexp.exec`
- `regexp.test`
- `string.match`
- `string.replace`
- `string.search`
- `string.split`


JavaScript においては、同じことを行うのに、文字列操作で行うよりも正規表現を使ったほうが良いパフォーマンスを出せる

- JavaScript の正規表現は驚くほど複雑で、書きにくく、読みづらく、修正するのに危険を伴う
- JavaScript の正規表現はコメントや空白を入れることができない仕様となっている
- 正規表現は1行で記述する必要がある


### 正規表現の例

```javascript
// URLにマッチする正規表現
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
```
