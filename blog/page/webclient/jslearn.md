<p align="center">Javascript相关知识</p>
=

[toc]

## 一、javascript基础

### 1、javascript闭包

&ensp; &ensp; 闭包指的是：能够访问另一个函数作用域的变量的函数。清晰的讲：闭包就是一个函数，这个函数能够访问其他函数的作用域中的变量。

``` javascript
function outer() {
    var a = '变量1'
    var inner = function() {
        console.info(a)
    }
    return inner // inner 就是一个闭包函数，因为他能够访问到outer函数的作用域
}
```

闭包使得函数拥有私有变量称为可能。

### 2、javascript作用域链

在JS引擎中，通过标识符查找标识符的值，会从当前作用域向上查找，直到作用域找到第一个匹配的标识符位置。就是JS的作用域链。

``` javascript
var a = 1;

function fn1() {
    var a = 2;

    function fn2() {
        var a = 3;
        console.log(a);
    }
    fn2();
}
fn1(); // 3
```

console.log(a) 语句中，JS在查找 a变量标识符的值的时候，会从 fn2 内部向外部函数查找变量声明，它发现fn2内部就已经有了a变量，那么它就不会继续查找了。那么最终结果也就会打印3了。

### 3、javascript原型链

#### 1、对象的原型
所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法。

``` 
//构造函数中给对象添加新属性 
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
//prototype中给对象添加新属性
Person.prototype.nationality = "English";
//相当于对象的静态属性
Person.nationality="English";
```

Person.prototype是Person的原型对象。

#### 2、\_proto_

这是每个对象(除null外)都会有的属性，叫做__proto__，这个属性会指向该对象的原型。

``` javascript
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```

#### 3、实例与原型

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

``` typescript
function Person() {

}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
```

在这个例子中，我们给实例对象 person 添加了 name 属性，当我们打印 person.name 的时候，结果自然为 Daisy。

但是当我们删除了 person 的 name 属性时，读取 person.name，从 person 对象中找不到 name 属性就会从 person 的原型也就是 person.__proto__ ，也就是 Person.prototype中查找，幸运的是我们找到了 name 属性，结果为 Kevin。

#### 4、原型的原型

在前面，我们已经讲了原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它，那就是：

``` javascript
var obj = new Object();
obj.name = 'Kevin'
console.log(obj.name) // Kevin
```

其实原型对象就是通过 Object 构造函数生成的，结合之前所讲，实例的 \_\_proto__ 指向构造函数的 prototype ，所以我们再更新下关系图：

<img src='assets/prototype.png' alt='mongo1'/>

#### 5、原型链

> 每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。那么假如我们让原型对象等于另一个类型的实例，结果会怎样？显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构成了实例与原型的链条。这就是所谓的原型链的基本概念。——摘自《javascript高级程序设计》

其实简单来说，就是上述四-五的过程。

继上述五中所说，那 Object.prototype 的原型呢？

``` javascript
console.log(Object.prototype.__proto__ === null) // true
```

引用阮一峰老师的 《undefined与null的区别》 就是：

> null 表示“没有对象”，即该处不应该有值。

所以 Object.prototype.\_\_proto__ 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。

所以查找属性的时候查到 Object.prototype 就可以停止查找了。

最后一张关系图也可以更新为：
<img src='assets/prototype2.png' alt='原型链'/>
图中由相互关联的原型组成的链状结构就是原型链，也就是蓝色的这条线。

### 4、javascript类

JavaScript 是面向对象的语言，但 JavaScript 不使用类。

在 JavaScript 中，不会创建类，也不会通过类来创建对象（就像在其他面向对象的语言中那样）。

JavaScript 基于 prototype，而不是基于类的。

## 二、JavaScript HTML DOM

通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。
HTML DOM（文档对象模型）
当网页被加载，浏览器会创建网页的文档对象模型（Document Object Model）。
HTML DOM模型被构造为对象的树：
<img src='assets/dom1.gif' alt='dom树'/>
通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。

* JavaScript 能够改变页面中的所有 HTML 元素
* JavaScript 能够改变页面中的所有 HTML 属性
* JavaScript 能够改变页面中的所有 CSS 样式
* JavaScript 能够对页面中的所有事件做出反应

### 1、查找元素

``` javascript
//id
var x = document.getElementById("main");
//标签名
var y = x.getElementsByTagName("p");
//class
var x = document.getElementsByClassName("intro");
```

### 2、改变HTML内容

修改 HTML 内容的最简单的方法是使用 innerHTML 属性。

如需改变 HTML 元素的内容，请使用这个语法：

``` html
<html>

<body>

    <p id="p1">Hello World!</p>

    <script>
        document.getElementById("p1").innerHTML = "新文本!";
    </script>

</body>

</html>
```

### 3、改变HTML属性

如需改变 HTML 元素的属性，请使用这个语法：

``` html
<!DOCTYPE html>
<html>

<body>

    <img id="image" src="smiley.gif">

    <script>
        document.getElementById("image").src = "landscape.jpg";
    </script>

</body>

</html>
```

### 4、改变HTML样式

如需改变 HTML 元素的样式，请使用这个语法：

``` javascript
document.getElementById(id).style.property = 新样式
```

``` html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>菜鸟教程(runoob.com)</title>
</head>

<body>

    <p id="p1">Hello World!</p>
    <p id="p2">Hello World!</p>
    <script>
        document.getElementById("p2").style.color = "blue";
        document.getElementById("p2").style.fontFamily = "Arial";
        document.getElementById("p2").style.fontSize = "larger";
    </script>
    <p>以上段落通过脚本修改。</p>

</body>

</html>
```

### 5、使用事件

HTML DOM 允许我们通过触发事件来执行代码。
比如以下事件：

* 元素被点击。
* 页面加载完成。
* 输入框被修改。

……
本例改变了 id="id1" 的 HTML 元素的样式，当用户点击按钮时：

``` html
<!DOCTYPE html>
<html>

<body>

    <h1 id="id1">我的标题 1</h1>
    <button type="button" onclick="document.getElementById('id1').style.color='red'">
        点我!</button>

</body>

</html>
```

### 6、JavaScript HTML DOM事件

如需在用户点击某个元素时执行代码，请向一个 HTML 事件属性添加 JavaScript 代码：

``` javascript
onclick = JavaScript
```

e.g 1:

``` html
<!DOCTYPE html>
<html>

<body>
    <h1 onclick="this.innerHTML='Ooops!'">点击文本!</h1>
</body>

</html>
```

e.g 2:

``` html
<!DOCTYPE html>
<html>

<head>
    <script>
        function changetext(id) {
            id.innerHTML = "Ooops!";
        }
    </script>
</head>

<body>
    <h1 onclick="changetext(this)">点击文本!</h1>
</body>

</html>
```

e.g 3:

``` html
<button onclick="displayDate()">点这里</button>
```

e.g 4:

``` html
<script>
    document.getElementById("myBtn").onclick = function() {
        displayDate()
    };
</script>
```

onload、onunload、onchange、onmouseover、onmouseout、onmousedown、onmouseup、onclick事件；

* onload 和 onunload 事件会在用户进入或离开页面时被触发。

``` html
<body onload="checkCookies()">
```

onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。

onload 和 onunload 事件可用于处理 cookie。

* onchange 事件常结合对输入字段的验证来使用。

``` html
<input type="text" id="fname" onchange="upperCase()">
```

* onmouseover、onmouseout、onmousedown、onmouseup、onclick构成鼠标点击事件的所有部分。

### 7、JavaScript HTML DOM EventListener

addEventListener()方法。
在用户点击按钮时触发监听事件：

``` javascript
document.getElementById("myBtn").addEventListener("click", displayDate);
```

向 Window 对象添加事件句柄。
addEventListener() 方法允许你在 HTML DOM 对象添加事件监听， HTML DOM 对象如： HTML 元素, HTML 文档, window 对象。或者其他支出的事件对象如: xmlHttpRequest 对象。

``` javascript
//当用户重置窗口大小时添加事件监听
window.addEventListener("resize", function() {
    document.getElementById("demo").innerHTML = sometext;
});
```

传递参数

``` javascript
//当传递参数值时，使用"匿名函数"调用带参数的函数
element.addEventListener("click", function() {
    myFunction(p1, p2);
});
```

跨浏览器解决方案：

``` javascript
var x = document.getElementById("myBtn");
if (x.addEventListener) { // 所有主流浏览器，除了 IE 8 及更早版本
    x.addEventListener("click", myFunction);
} else if (x.attachEvent) { // IE 8 及更早版本
    x.attachEvent("onclick", myFunction);
}
```

### 8、JavaScript HTML DOM元素（节点）

#### 1、创建新的 HTML 元素 (节点) - appendChild()
要创建新的 HTML 元素 (节点)需要先创建一个元素，然后在已存在的元素中添加它。

``` html
<div id="div1">
    <p id="p1">这是一个段落。</p>
    <p id="p2">这是另外一个段落。</p>
</div>

<script>
    var para = document.createElement("p");
    var node = document.createTextNode("这是一个新的段落。");
    para.appendChild(node);

    var element = document.getElementById("div1");
    element.appendChild(para);
</script>
```

#### 2、创建新的 HTML 元素 (节点) - insertBefore()

以上的实例我们使用了 appendChild() 方法，它用于添加新元素到尾部。

如果我们需要将新元素添加到开始位置，可以使用 insertBefore() 方法:

``` html
<div id="div1">
    <p id="p1">这是一个段落。</p>
    <p id="p2">这是另外一个段落。</p>
</div>

<script>
    var para = document.createElement("p");
    var node = document.createTextNode("这是一个新的段落。");
    para.appendChild(node);

    var element = document.getElementById("div1");
    var child = document.getElementById("p1");
    element.insertBefore(para, child);
</script>
```

移除已存在的元素
要移除一个元素，你需要知道该元素的父元素。

``` html
<div id="div1">
    <p id="p1">这是一个段落。</p>
    <p id="p2">这是另外一个段落。</p>
</div>

<script>
    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    parent.removeChild(child);
</script>
```

#### 3、替换 HTML 元素 - replaceChild()

``` html
<div id="div1">
    <p id="p1">这是一个段落。</p>
    <p id="p2">这是另外一个段落。</p>
</div>

<script>
    var para = document.createElement("p");
    var node = document.createTextNode("这是一个新的段落。");
    para.appendChild(node);

    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    parent.replaceChild(para, child);
</script>
```

### 9、JavaScript HTML DOM 集合(Collection)

* HTMLCollection 对象

getElementsByTagName() 方法返回 HTMLCollection 对象。

HTMLCollection 对象类似包含 HTML 元素的一个数组。

以下代码获取文档所有的 <p> 元素：

``` javascript
var x = document.getElementsByTagName("p");
```

集合中的元素可以通过索引(以 0 为起始位置)来访问。

访问第二个 <p> 元素可以是以下代码:

``` javascript
y = x[1];
```

* HTMLCollection 对象 length 属性

HTMLCollection 对象的 length 属性定义了集合中元素的数量。
e.g 1:

``` javascript
var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = myCollection.length;
```

e.g 2:

``` javascript
var myCollection = document.getElementsByTagName("p");
var i;
for (i = 0; i < myCollection.length; i++) {
    myCollection[i].style.backgroundColor = "red";
}
```

**注意**
**HTMLCollection 不是一个数组！**

**HTMLCollection 看起来可能是一个数组，但其实不是。**

**你可以像数组一样，使用索引来获取元素。**

**HTMLCollection 无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。**

### 9、JavaScript HTML DOM 节点列表

NodeList 对象是一个从文档中获取的节点列表 (集合) 。

NodeList 对象类似 HTMLCollection 对象。
所有浏览器的 childNodes 属性返回的是 NodeList 对象。

大部分浏览器的 querySelectorAll() 返回 NodeList 对象。

以下代码选取了文档中所有的 <p> 节点：

``` javascript
var myNodeList = document.querySelectorAll("p");
```

NodeList 中的元素可以通过索引(以 0 为起始位置)来访问。

访问第二个 <p> 元素可以是以下代码:

``` javascript
y = myNodeList[1];
```

NodeList 对象 length 属性
NodeList 对象 length 属性定义了节点列表中元素的数量。

``` javascript
var myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = myNodelist.length;
```

### 10、HTMLCollection 与 NodeList 的区别

HTMLCollection 是 HTML 元素的集合。

NodeList 是一个文档节点的集合。

NodeList 与 HTMLCollection 有很多类似的地方。

NodeList 与 HTMLCollection 都与数组对象有点类似，可以使用索引 (0, 1, 2, 3, 4, ... ) 来获取元素。

NodeList 与 HTMLCollection 都有 length 属性。

HTMLCollection 元素可以通过 name，id 或索引来获取。

NodeList 只能通过索引来获取。

只有 NodeList 对象有包含属性节点和文本节点。

## 三、JavaScript Window - 浏览器对象模型

浏览器对象模型 (BOM) 使 JavaScript 有能力与浏览器"对话"。

### 1、浏览器对象模型 (BOM)

浏览器对象模型（Browser Object Model (BOM)）尚无正式标准。

由于现代浏览器已经（几乎）实现了 JavaScript 交互性方面的相同方法和属性，因此常被认为是 BOM 的方法和属性。

#### 1、Window对象

所有浏览器都支持 window 对象。它表示浏览器窗口。

所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

全局变量是 window 对象的属性。

全局函数是 window 对象的方法。

甚至 HTML DOM 的 document 也是 window 对象的属性之一：

``` javascript
window.document.getElementById("header");
```

与此相同：

``` javascript
document.getElementById("header");
```

#### 2、Window尺寸

有三种方法能够确定浏览器窗口的尺寸。

对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：

* window.innerHeight - 浏览器窗口的内部高度(包括滚动条)
* window.innerWidth - 浏览器窗口的内部宽度(包括滚动条)

对于 Internet Explorer 8、7、6、5：

* document.documentElement.clientHeight
* document.documentElement.clientWidth

或者

* document.body.clientHeight
* document.body.clientWidth

实用的 JavaScript 方案（涵盖所有浏览器）：

``` javascript
var w = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

var h = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
```

该例显示浏览器窗口的高度和宽度。

#### 3、其他Window方法

一些其他方法：

* window.open() - 打开新窗口
* window.close() - 关闭当前窗口
* window.moveTo() - 移动当前窗口
* window.resizeTo() - 调整当前窗口的尺寸

### 2、JavaScript Window Screen

window.screen 对象包含有关用户屏幕的信息。

#### 1、Window Screen

window.screen对象在编写时可以不使用 window 这个前缀。

一些属性：

* screen.availWidth - 可用的屏幕宽度
* screen.availHeight - 可用的屏幕高度

#### 2、Window Screen可用宽度

screen.availWidth 属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如窗口任务栏。

``` html
<script>
    document.write("可用宽度: " + screen.availWidth);
</script>
```

#### 3、Window Screen可用高度

screen.availHeight

### 3、JavaScript Window Location

window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。

#### 1、Window Location

* window.location 对象在编写时可不使用 window 这个前缀。
* location.hostname 返回 web 主机的域名
* location.pathname 返回当前页面的路径和文件名
* location.port 返回 web 主机的端口 （80 或 443）
* location.protocol 返回所使用的 web 协议（http: 或 https:）

#### 2、Window Location Href

locatoion.href属性返回当前页面的URL。

``` html
<script>
    document.write(location.href);
</script>
```

#### 3、Window Location Pathname

location.pathname 属性返回 URL 的路径名。

``` html
document.write(location.pathname);
```

#### 4、Window Location Assign

location.assign()方法加载新的文档。

``` html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>菜鸟教程(runoob.com)</title>
</head>

<head>
    <script>
        function newDoc() {
            window.location.assign("https://www.runoob.com")
        }
    </script>
</head>

<body>

    <input type="button" value="加载新文档" onclick="newDoc()">

</body>

</html>
```

### 4、JavaScript Window History

window.history 对象包含浏览器的历史。

#### 1、Window History

window.history对象在编写时可不使用 window 这个前缀。

为了保护用户隐私，对 JavaScript 访问该对象的方法做出了限制。

一些方法：

* history.back() - 与在浏览器点击后退按钮相同
* history.forward() - 与在浏览器中点击向前按钮相同

### 5、JavaScript Window Navigator

window.navigator 对象包含有关访问者浏览器的信息。

#### 1、Window Navigator

window.nagigator对象在编写时可不不使用window这个前缀。
**警告!!!**
**来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为：**

**navigator 数据可被浏览器使用者更改
一些浏览器对测试站点会识别错误
浏览器无法报告晚于浏览器发布的新操作系统**

#### 2、浏览器检测

由于 navigator 可误导浏览器检测，使用对象检测可用来嗅探不同的浏览器。

由于不同的浏览器支持不同的对象，您可以使用对象来检测浏览器。例如，由于只有 Opera 支持属性 "window.opera"，您可以据此识别出 Opera。

例子：if (window.opera) {... some action... }

### 6、JavaScript 弹窗

可以在 JavaScript 中创建三种消息框：警告框、确认框、提示框。

#### 1、警告框

``` javascript
window.alert("sometext");
```

window.alert() 方法可以不带上window对象，直接使用alert()方法。

``` html
<!DOCTYPE html>
<html>

<head>
    <script>
        function myFunction() {
            alert("你好，我是一个警告框！");
        }
    </script>
</head>

<body>

    <input type="button" onclick="myFunction()" value="显示警告框">

</body>

</html>
```

#### 2、确认框

``` javascript
window.confirm("sometext");
```

window.confirm() 方法可以不带上window对象，直接使用confirm()方法。

``` javascript
var r = confirm("按下按钮");
if (r == true) {
    x = "你按下了\"确定\"按钮!";
} else {
    x = "你按下了\"取消\"按钮!";
}
```

#### 3、提示框

``` javascript
window.prompt("sometext", "defaultvalue");
```

window.prompt() 方法可以不带上window对象，直接使用prompt()方法。

``` javascript
var person = prompt("请输入你的名字", "Harry Potter");
if (person != null && person != "") {
    x = "你好 " + person + "! 今天感觉如何?";
    document.getElementById("demo").innerHTML = x;
}
```

#### 4、换行

弹窗使用 反斜杠 + "n"(\n) 来设置换行。

``` javascript
alert("Hello\nHow are you?");
```

### 7、JavaScript计时事件

#### 1、JavaScript计时事件
在 JavaScritp 中使用计时事件是很容易的，两个关键方法是:

* setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
* setTimeout() - 在指定的毫秒数后执行指定代码。

注意: setInterval() 和 setTimeout() 是 HTML DOM Window对象的两个方法。

#### 2、setInterval() 方法

``` javascript
window.setInterval("javascript function", milliseconds);
```

``` javascript
setInterval(function() {
    alert("Hello")
}, 3000);
```

``` javascript
var myVar = setInterval(function() {
    myTimer()
}, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}
```

clearInterval() 方法用于停止 setInterval() 方法执行的函数代码。

#### 3、setTimeout()方法

``` javascript
myVar = window.setTimeout("javascript function", milliseconds);
```

``` javascript
setTimeout(function() {
    alert("Hello")
}, 3000);
```

clearTimeout() 方法用于停止执行setTimeout()方法的函数代码。

``` javascript
window.clearTimeout(timeoutVariable)
```

``` javascript
var myVar;

function myFunction() {
    myVar = setTimeout(function() {
        alert("Hello")
    }, 3000);
}

function myStopFunction() {
    clearTimeout(myVar);
}
```

### 8、JavaScript Cookie

#### 1、什么事Cookie？
Cookie 是一些数据, 存储于你电脑上的文本文件中。

当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。

Cookie 的作用就是用于解决 "如何记录客户端的用户信息":

* 当用户访问 web 页面时，他的名字可以记录在 cookie 中。
* 在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。

Cookie 以名/值对形式存储，如下所示:

``` javascript
username = John Doe
```

当浏览器从服务器上请求 web 页面时， 属于该页面的 cookie 会被添加到该请求中。服务端通过这种方式来获取用户的信息。

#### 2、使用JavaScript创建Cookie

JavaScript 可以使用 document.cookie 属性来创建 、读取、及删除 cookie。

JavaScript 中，创建 cookie 如下所示：

``` javascript
document.cookie = "username=John Doe";
```

您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除：

``` javascript
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
```

您可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。

``` javascript
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```

#### 3、读Cookie

``` javascript
var x = document.cookie;
```

==document.cookie 将以字符串的方式返回所有的 cookie，类型格式： cookie1=value; cookie2=value; cookie3=value; ==

#### 4、修改Cookie

``` javascript
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```

#### 5、删除Cookie

删除 cookie 非常简单。您只需要设置 expires 参数为以前的时间即可，如下所示，设置为 Thu, 01 Jan 1970 00:00:00 GMT:

``` javascript
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

注意，当您删除时不必指定 cookie 的值。

#### 6、Cookie字符串

document.cookie 属性看起来像一个普通的文本字符串，其实它不是。

即使您在 document.cookie 中写入一个完整的 cookie 字符串, 当您重新读取该 cookie 信息时，cookie 信息是以名/值对的形式展示的。

如果您设置了新的 cookie，旧的 cookie 不会被覆盖。 新 cookie 将添加到 document.cookie 中，所以如果您重新读取document.cookie，您将获得如下所示的数据：

cookie1=value; cookie2=value; 

#### 7、设置cookie值的函数

``` javascript
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
```

函数解析：

以上的函数参数中，cookie 的名称为 cname，cookie 的值为 cvalue，并设置了 cookie 的过期时间 expires。

该函数设置了 cookie 名、cookie 值、cookie过期时间。

#### 8、获取cookie值的函数

``` javascript
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
```

#### 9、检测cookie值的函数

``` javascript
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}
```

