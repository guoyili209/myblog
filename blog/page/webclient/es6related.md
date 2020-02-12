<p style="text-align:center;">ES6相关</p>
==

##1、import 和 export
**export:**
导出模块对外的接口。
示列：
```js
export default xxx;//import导入的时候可以起别名
```
```js
export xxx;//import导入时不能起别名
```
**import:**
导入对应的的模块。

示例：
<ol>
<li>在html中引入两个js文件，并且类型设置为module</li>
```html
<script src="info.js" type="module"></script>
<script src="main.js" type="module"></script>
```
<li>import导入模块中的内容，比如mian.js代码</li>
```js
import {name,age,height} from "./info.js"
console.log(name,age,height);
```
<li>如果要导入某个模块中所有信息
<ul><li>通过*可以导入模块中所有的export变量</li>
<li>但是通常情况下我们需要给*起一个别名，方便后续使用</li>
```js
import * as xxx from "xx.js"
```
</ul>
</li>