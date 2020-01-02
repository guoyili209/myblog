<p align='center'>HTML5 教程</p>
=
[toc]

## 一、HTML5部分新特性

HTML5 中的一些有趣的新特性：

* 用于绘画的 canvas 元素
* 用于媒介回放的 video 和 audio 元素
* 对本地离线存储的更好的支持
* 新的特殊内容元素，比如 article、footer、header、nav、section
* 新的表单控件，比如 calendar、date、time、email、url、search

**语义元素**
HTML5 添加了很多语义元素如下所示：
<table class="reference"><tbody><tr><th>标签
</th><th>描述
</th></tr><tr><td>&lt; article&gt; 
</td><td>定义页面独立的内容区域。
</td></tr><tr><td>&lt; aside&gt; 
</td><td>定义页面的侧边栏内容。
</td></tr><tr><td>&lt; bdi&gt; 
</td><td>允许您设置一段文本，使其脱离其父元素的文本方向设置。
</td></tr><tr><td>&lt; command&gt; 
</td><td>定义命令按钮，比如单选按钮、复选框或按钮
</td></tr><tr><td>&lt; details&gt; 
</td><td>用于描述文档或文档某个部分的细节
</td></tr><tr><td>&lt; dialog&gt; 
</td><td>定义对话框，比如提示框
</td></tr><tr><td>&lt; summary&gt; 
</td><td>标签包含 details 元素的标题
</td></tr><tr><td>&lt; figure&gt; 
</td><td>规定独立的流内容（图像、图表、照片、代码等等）。
</td></tr><tr><td>&lt; figcaption&gt; 
</td><td>定义 &lt; figure&gt; 元素的标题
</td></tr><tr><td>&lt; footer&gt; 
</td><td>定义 section 或 document 的页脚。
</td></tr><tr><td>&lt; header&gt; 
</td><td>定义了文档的头部区域
</td></tr><tr><td>&lt; mark&gt; 
</td><td>定义带有记号的文本。
</td></tr><tr><td>&lt; meter&gt; 
</td><td>定义度量衡。仅用于已知最大和最小值的度量。
</td></tr><tr><td>&lt; nav&gt; 
</td><td>定义导航链接的部分。
</td></tr><tr><td>&lt; progress&gt; 
</td><td>定义任何类型的任务的进度。
</td></tr><tr><td>&lt; ruby&gt; 
</td><td>定义 ruby 注释（中文注音或字符）。
</td></tr><tr><td>&lt; rt&gt; 
</td><td>定义字符（中文注音或字符）的解释或发音。
</td></tr><tr><td>&lt; rp&gt; 
</td><td>在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。
</td></tr><tr><td>&lt; section&gt; 
</td><td>定义文档中的节（section、区段）。
</td></tr><tr><td>&lt; time&gt; 
</td><td>定义日期或时间。
</td></tr><tr><td>&lt; wbr&gt; 
</td><td>规定在文本中的何处适合添加换行符。
</td></tr></tbody></table>
**已移除元素**
以下的 HTML 4.01 元素在HTML5中已经被删除:

* \<acronym>
* \<applet>
* \<basefont>
* \<big>
* \<center>
* \<dir>
* \<font>
* \<frame>
* \<frameset>
* \<noframes>
* \<strike>

**HTML5 浏览器支持**
最新版本的 Safari、Chrome、Firefox 以及 Opera 支持某些 HTML5 特性。Internet Explorer 9 将支持某些 HTML5 特性。

## 二、HTML5浏览器支持

你可以让一些较早的浏览器（不支持HTML5）支持 HTML5。

### 1、浏览器支持

现代的浏览器都支持 HTML5。

此外，所有浏览器，包括旧的和最新的，对无法识别的元素会作为内联元素自动处理。

正因为如此，你可以 "教会" 浏览器处理 "未知" 的 HTML 元素。
*甚至你可以教会 IE6 (Windows XP 2001) 浏览器处理未知的 HTML 元素。*

### 2、将 HTML5 元素定义为块元素

HTML5 定了 8 个新的 HTML 语义（semantic） 元素。所有这些元素都是 块级 元素。

为了能让旧版本的浏览器正确显示这些元素，你可以设置 CSS 的 display 属性值为 block:

``` css
header,
section,
footer,
aside,
nav,
main,
article,
figure {

    display: block;

}
```

### 3、为 HTML 添加新元素

你可以为 HTML 添加新的元素。

该实例向 HTML 添加的新的元素，并为该元素定义样式，元素名为 <myHero> ：

``` html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>为 HTML 添加新元素</title>
    <script>
        document.createElement("myHero")
    </script>
    <style>
        myHero {
            display: block;
            background-color: #ddd;
            padding: 50px;
            font-size: 30px;
        }
    </style>
</head>

<body>

    <h1>我的第一个标题</h1>

    <p>我的第一个段落。</p>

    <myHero>我的第一个新元素</myHero>

</body>

</html>
```

JavaScript 语句 document.createElement("myHero") 是为 IE 浏览器添加新的元素。

### 4、Internet Explorer 浏览器问题

你可以使用以上的方法来为 IE 浏览器添加 HTML5 元素，但是：
*Internet Explorer 8 及更早 IE 版本的浏览器不支持以上的方式。*
我们可以使用 Sjoerd Visscher 创建的 "HTML5 Enabling JavaScript", " shiv" 来解决该问题:

``` html
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

以上代码是一个注释，作用是在 IE 浏览器的版本小于 IE9 时将读取 html5.js 文件，并解析它。
**注意：国内用户请使用本站静态资源库（Google 资源库在国内不稳定）：**

``` html
<!--[if lt IE 9]>
  <script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
<![endif]-->
```

针对IE浏览器html5shiv 是比较好的解决方案。html5shiv主要解决HTML5提出的新的元素不被IE6-8识别，这些新元素不能作为父节点包裹子元素，并且不能应用CSS样式。

### 5、完美的 Shiv 解决方案

``` html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>渲染 HTML5</title>
    <!--[if lt IE 9]>
  <script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
  <![endif]-->
</head>

<body>

    <h1>我的第一篇文章</h1>

    <article>
        菜鸟教程 —— 学的不仅是技术，更是梦想！！！
    </article>

</body>

</html>
```

html5shiv.js 引用代码必须放在 <head> 元素中，因为 IE 浏览器在解析 HTML5 新元素时需要先加载该文件。

## 三、HTML5 Canvas

\<canvas> 标签定义图形，比如图表和其他图像，您必须使用脚本来绘制图形。

在画布上（Canvas）画一个红色矩形，渐变矩形，彩色矩形，和一些彩色的文字。

### 1、什么是 canvas?

HTML5 \<canvas> 元素用于图形的绘制，通过脚本 (通常是JavaScript)来完成.

\<canvas> 标签只是图形容器，您必须使用脚本来绘制图形。

你可以通过多种方法使用 canvas 绘制路径, 盒、圆、字符以及添加图像。

### 2、浏览器支持

<table class="browserref">
  <tbody><tr>

    <th style="width:20%;font-size:16px;text-align:left;">元素</th>
    <th style="width:16%;" class="bsChrome" title="Chrome">chrome</th>
    <th style="width:16%;" class="bsIE" title="Internet Explorer">IE</th>
    <th style="width:16%;" class="bsFirefox" title="Firefox">firefox</th>
    <th style="width:16%;" class="bsSafari" title="Safari">safari</th>
    <th style="width:16%;" class="bsOpera" title="Opera">opera</th>                

  </tr>
  <tr>

    <td style="text-align:left;">&lt;canvas&gt;</td>
    <td>4.0</td>
    <td>9.0</td>
    <td>2.0</td>
    <td>3.1</td>
    <td>9.0</td>

  </tr>
</tbody></table>

### 3、创建一个画布（Canvas）

一个画布在网页中是一个矩形框，通过 \<canvas> 元素来绘制.

注意: 默认情况下 \<canvas> 元素没有边框和内容。
\<canvas>简单实例如下:

``` html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

注意: 标签通常需要指定一个id属性 (脚本中经常引用), width 和 height 属性定义的画布的大小.

提示: 你可以在HTML页面中使用多个 \<canvas> 元素.

使用 style 属性来添加边框:

``` html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
</canvas>
```

### 4、使用 JavaScript 来绘制图像

canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成：

``` javascript
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);
```

``` javascript
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
```

## 四、HTML5 内联SVG

HTML5 支持内联 SVG。

### 1、什么是SVG？

* SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
* SVG 用于定义用于网络的基于矢量的图形
* SVG 使用 XML 格式定义图形
* SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
* SVG 是万维网联盟的标准

### 2、SVG优势

与其他图像格式相比（比如 JPEG 和 GIF），使用 SVG 的优势在于：

* SVG 图像可通过文本编辑器来创建和修改
* SVG 图像可被搜索、索引、脚本化或压缩
* SVG 是可伸缩的
* SVG 图像可在任何的分辨率下被高质量地打印
* SVG 可在图像质量不下降的情况下被放大

### 3、浏览器支持

Internet Explorer 9+, Firefox, Opera, Chrome, 和 Safari 支持内联SVG。

### 4、把 SVG 直接嵌入 HTML 页面

在 HTML5 中，您能够将 SVG 元素直接嵌入 HTML 页面中：

``` html
<!DOCTYPE html>
<html>

<body>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
        <polygon points="100,10 40,180 190,60 10,60 160,180" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;">
    </svg>

</body>

</html>
```

### 5、SVG 与 Canvas两者间的区别

SVG 是一种使用 XML 描述 2D 图形的语言。

Canvas 通过 JavaScript 来绘制 2D 图形。

SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。

在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

### 6、Canvas 与 SVG 的比较

下表列出了 canvas 与 SVG 之间的一些不同之处。
<table>
<tr>
<th align="left" width="50%">Canvas</th>
<th align="left" width="50%">SVG</th>
</tr>
<tr>
<td>
<ul >

	<li>依赖分辨率</li>
	<li>不支持事件处理器</li>
	<li>弱的文本渲染能力</li>
	<li>能够以 .png 或 .jpg 格式保存结果图像</li>
	<li>最适合图像密集型的游戏，其中的许多对象会被频繁重绘</li>
	</ul>

<td>
<ul>

	<li>不依赖分辨率</li>
	<li>支持事件处理器</li>
	<li>最适合带有大型渲染区域的应用程序（比如谷歌地图）</li>
	<li>复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）</li>
	<li>不适合游戏应用</li>
	</ul>

</td>
</tr>
</table>

## 五、HTML5 MathML

HTML5 可以在文档中使用 MathML 元素，对应的标签是 \<math>... \</math> 。

MathML 是数学标记语言，是一种基于XML（标准通用标记语言的子集）的标准，用来在互联网上书写数学符号和公式的置标语言。

## 六、HTML5 拖放（Drag 和 Drop）

拖放（Drag 和 drop）是 HTML5 标准的组成部分。

## 七、HTML5 Geolocation（地理定位）

HTML5 Geolocation（地理定位）用于定位用户的位置。

### 1、定位用户的位置

HTML5 Geolocation API 用于获得用户的地理位置。

鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。

## 八、HTML5 Video(视频)

``` html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    您的浏览器不支持Video标签。
</video>
```

\<video> 元素提供了 播放、暂停和音量控件来控制视频。

同时 \<video> 元素也提供了 width 和 height 属性控制视频的尺寸. 如果设置的高度和宽度，所需的视频空间会在页面加载时保留。如果没有设置这些属性，浏览器不知道大小的视频，浏览器就不能再加载时保留特定的空间，页面就会根据原始视频的大小而改变。

\<video> 与\</video> 标签之间插入的内容是提供给不支持 video 元素的浏览器显示的。

\<video> 元素支持多个 \<source> 元素.\<source> 元素可以链接不同的视频文件。浏览器将使用第一个可识别的格式：

## 九、HTML5 新的 Input 类型

HTML5 拥有多个新的表单输入类型。这些新特性提供了更好的输入控制和验证。

本章全面介绍这些新的输入类型：

**color 类型用在input字段主要用于选取颜色**

``` html
选择你喜欢的颜色: <input type="color" name="favcolor">
```

**date 类型允许你从一个日期选择器选择一个日期。**

``` html
生日: <input type="date" name="bday">
```

**datetime 类型允许你选择一个日期（UTC 时间）。**

``` html
生日 (日期和时间): <input type="datetime" name="bdaytime">
```

**datetime-local 类型允许你选择一个日期和时间 (无时区).**

``` html
生日 (日期和时间): <input type="datetime-local" name="bdaytime">
```

**email 类型用于应该包含 e-mail 地址的输入域。**

``` html
<!--在提交表单时，会自动验证 email 域的值是否合法有效-->
E-mail: <input type="email" name="email">
```

**month 类型允许你选择一个月份。**

``` html
生日 (月和年): <input type="month" name="bdaymonth">
```

**number 类型用于应该包含数值的输入域。**

``` html
<!--定义一个数值输入域(限定)-->
数量 ( 1 到 5 之间 ): <input type="number" name="quantity" min="1" max="5">
```

使用下面的属性来规定对数字类型的限定：
<table class="reference">
<tbody><tr>
<th style="width:20%">属性</th>
<th>描述</th>
</tr>
<tr>
<td>disabled</td>
<td>规定输入字段是禁用的</td>
</tr>
<tr>
<td class="html5badge">max</td>
<td>规定允许的最大值</td>
</tr>
<tr>
<td>maxlength</td>
<td>规定输入字段的最大字符长度</td>
</tr>
<tr>
<td class="html5badge">min</td>
<td>规定允许的最小值</td>
</tr>
<tr>
<td class="html5badge">pattern</td>
<td>规定用于验证输入字段的模式</td>
</tr>
<tr>
<td>readonly</td>
<td>规定输入字段的值无法修改</td>
</tr>
<tr>
<td class="html5badge">required</td>
<td>规定输入字段的值是必需的</td>
</tr>
<tr>
<td>size</td>
<td>规定输入字段中的可见字符数</td>
</tr>
<tr>
<td class="html5badge">step</td>
<td>规定输入字段的合法数字间隔</td>
</tr>
<tr>
<td>value</td>
<td>规定输入字段的默认值</td>
</tr>
</tbody></table>

**range 类型用于应该包含一定范围内数字值的输入域。**

``` html
<!--定义一个不需要非常精确的数值（类似于滑块控制）-->
<input type="range" name="points" min="1" max="10">
```

请使用下面的属性来规定对数字类型的限定：

* max - 规定允许的最大值
* min - 规定允许的最小值
* step - 规定合法的数字间隔
* value - 规定默认值

* search  类型用于搜索域，比如站点搜索或 Google 搜索。

``` html
<!--定义一个搜索字段 (类似站点搜索或者Google搜索)-->
Search Google: <input type="search" name="googlesearch">
```

**tel** 

``` html
<!--定义输入电话号码字段-->
电话号码: <input type="tel" name="usrtel">
```

**time 类型允许你选择一个时间。**

``` html
<!--定义可输入时间控制器（无时区）-->
选择时间: <input type="time" name="usr_time">
```

**url 类型用于应该包含 URL 地址的输入域。**

在提交表单时，会自动验证 url 域的值。

``` html
<!--定义输入URL字段-->
添加您的主页: <input type="url" name="homepage">
```

*提示: iPhone 中的 Safari 浏览器支持 url 输入类型，并通过改变触摸屏键盘来配合它（添加 .com 选项）。*

**week 类型允许你选择周和年。**

``` html
<!--定义周和年 (无时区)-->
选择周: <input type="week" name="week_year">
```

## 十、HTML5 新表单元素

<table class="reference notranslate">
<tr>
<th width="20%">标签</th>
<th width="80%">描述</th>
</tr>
<tr>
<td><a href="/tags/tag-datalist.html">&lt; datalist&gt; </a></td>
<td>  &lt; input&gt; 标签定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。</td>
</tr>
<tr>
<td><a href="/tags/tag-keygen.html">&lt; keygen&gt; </a></td>
<td>&lt; keygen&gt; 标签规定用于表单的密钥对生成器字段。</td>
</tr>
<tr>
<td><a href="/tags/tag-output.html">&lt; output&gt; </a></td>
<td>&lt; output&gt; 标签定义不同类型的输出，比如脚本的输出。</td>
</tr>
</table>

## 十一、HTML5 新的表单属性

HTML5 的 &lt; form&gt; 和 &lt; input&gt; 标签添加了几个新属性.
&lt; form&gt; 新属性：
<ul>
<li>autocomplete</li>

	<li>novalidate</li>

</ul>
<p> &lt; input&gt; 新属性：</p>
<ul>
<li>autocomplete</li>

	<li>autofocus</li>
	<li>form</li>
	<li>formaction</li>
	<li>formenctype</li>
	<li>formmethod</li>
	<li>formnovalidate</li>
	<li>formtarget</li>
	<li>height 与 width</li>
	<li>list</li>
	<li>min 与 max</li>
	<li>multiple</li>
	<li>pattern (regexp)</li>
	<li>placeholder</li>
	<li>required</li>
	<li>step</li>

</ul>

## 十二、HTML5中的语义元素

语义= 意义
语义元素 = 有意义的元素

### 1、什么是语义元素?

一个语义元素能够清楚的描述其意义给浏览器和开发者。

无语义 元素实例: \<div> 和 \<span> - 无需考虑内容.

语义元素实例: \<form>, \<table>, and \<img> - 清楚的定义了它的内容.

### 2、HTML5中新的语义元素

许多现有网站都包含以下HTML代码： \<div id="nav">, \<div class="header">, 或者 \<div id="footer">, 来指明导航链接, 头部, 以及尾部.
HTML5 提供了新的语义元素来明确一个Web页面的不同部分:
<ul>
<li>&lt; header&gt; </li>

	<li>&lt;nav&gt;</li>
	<li>&lt;section&gt;</li>
	<li>&lt;article&gt;</li>
	<li>&lt;aside&gt;</li>
	<li>&lt;figcaption&gt;</li>
	<li>&lt;figure&gt;</li>
	<li>&lt;footer&gt;</li>

</ul>
<img src='assets/html5_1.jpg' alt='语义元素'>

\<section> 标签定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。

\<article> 标签定义独立的内容。

\<nav> 标签定义导航链接的部分。
\<nav> 元素用于定义页面的导航链接部分区域，但是，不是所有的链接都需要包含在 <nav> 元素中!

\<aside> 标签定义页面主区域内容之外的内容（比如侧边栏）。

\<header>元素描述了文档的头部区域
\<header>元素主要用于定义内容的介绍展示区域.
在页面中你可以使用多个\<header> 元素.

\<footer> 元素描述了文档的底部区域.
\<footer> 元素应该包含它的包含元素
一个页脚通常包含文档的作者，著作权信息，链接的使用条款，联系信息等
文档中你可以使用多个 \<footer>元素.

\<figure>标签规定独立的流内容（图像、图表、照片、代码等等）。
\<figure> 元素的内容应该与主内容相关，但如果被删除，则不应对文档流产生影响。
\<figcaption> 标签定义 \<figure> 元素的标题.
\<figcaption>元素应该被置于 "figure" 元素的第一个或最后一个子元素的位置。

## 十三、HTML5 Web 存储

客户端存储数据的两个对象为：

* localStorage - 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
* sessionStorage - 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。

## 十四、HTML5 Web SQL 数据库

核心方法
以下是规范中定义的三个核心方法：

<ol><li>openDatabase：这个方法使用现有的数据库或者新建的数据库创建一个数据库对象。</li>
<li>transaction：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。</li>
<li>executeSql：这个方法用于执行实际的 SQL 查询。</li></ol>

## 十五、HTML5 应用程序缓存

使用 HTML5，通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本。

``` html
<!DOCTYPE HTML>
<html manifest="demo.appcache">

<body>
    文档内容......
</body>

</html>
```

## 十六、HTML5 Web Workers

web worker 是运行在后台的 JavaScript，不会影响页面的性能。

### 1、什么是 Web Worker？

当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。

web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。

``` html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>菜鸟教程(runoob.com)</title>
</head>

<body>

    <p>计数： <output id="result"></output></p>
    <button onclick="startWorker()">开始工作</button>
    <button onclick="stopWorker()">停止工作</button>

    <p><strong>注意：</strong> Internet Explorer 9 及更早 IE 版本浏览器不支持 Web Workers.</p>

    <script>
        var w;

        function startWorker() {
            if (typeof(Worker) !== "undefined") {
                if (typeof(w) == "undefined") {
                    w = new Worker("demo_workers.js");
                }
                w.onmessage = function(event) {
                    document.getElementById("result").innerHTML = event.data;
                };
            } else {
                document.getElementById("result").innerHTML = "抱歉，你的浏览器不支持 Web Workers...";
            }
        }

        function stopWorker() {
            w.terminate();
            w = undefined;
        }
    </script>

</body>

</html>
```

### 2、Web Workers 和 DOM

由于 web worker 位于外部文件中，它们无法访问下列 JavaScript 对象：

* window 对象
* document 对象
* parent 对象

## 十七、HTML5 服务器发送事件(Server-Sent Events)

HTML5 服务器发送事件（server-sent event）允许网页获得来自服务器的更新。

Server-Sent 事件指的是网页自动获取来自服务器的更新。

以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过服务器发送事件，更新能够自动到达。

例子：Facebook/Twitter 更新、股价更新、新的博文、赛事结果等。

``` javascript
if (typeof(EventSource) !== "undefined") {
    // 浏览器支持 Server-Sent
    // 一些代码.....
} else {
    // 浏览器不支持 Server-Sent..
}

var source = new EventSource("demo_sse.php");
source.onmessage = function(event) {
    document.getElementById("result").innerHTML += event.data + "<br>";
};
```

``` php
<?php 
header('Content-Type: text/event-stream'); 
header('Cache-Control: no-cache'); 

$time = date('r'); 
echo "data: The server time is: {$time}\n\n"; 
flush(); 
?>
```

## 十八、HTML5 WebSocket

``` javascript
var Socket = new WebSocket(url, [protocol]);
```

以上代码中的第一个参数 url, 指定连接的 URL。第二个参数 protocol 是可选的，指定了可接受的子协议。

### 1、WebSocket 属性

以下是 WebSocket 对象的属性。假定我们使用了以上代码创建了 Socket 对象：
<table class="reference">
<tbody><tr>
<th width="30%">属性</th>
<th>描述</th>
</tr>
<tr>
<td>Socket.readyState</td>
<td><p>只读属性 <b>readyState</b> 表示连接状态，可以是以下值：</p>
<ul class="list">
<li><p>0 - 表示连接尚未建立。</p></li>
<li><p>1 - 表示连接已建立，可以进行通信。</p></li>
<li><p>2 - 表示连接正在进行关闭。</p></li>
<li><p>3 - 表示连接已经关闭或者连接不能打开。</p></li>
</ul>
</td>
</tr>
<tr>
<td>Socket.bufferedAmount</td>
<td><p>只读属性 <b>bufferedAmount</b> 已被 send() 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数。</p> 
</td>
</tr>
</tbody></table>

### 2、WebSocket 事件

以下是 WebSocket 对象的相关事件。假定我们使用了以上代码创建了 Socket 对象：
<table class="reference">
<tbody><tr>
<th width="10%">事件</th>
<th width="25%">事件处理程序</th>
<th>描述</th></tr>
<tr>
<td>open</td>
<td>Socket.onopen</td>
<td>连接建立时触发</td>
</tr>
<tr>
<td>message</td>
<td>Socket.onmessage</td>
<td>客户端接收服务端数据时触发</td>
</tr>
<tr>
<td>error</td>
<td>Socket.onerror</td>
<td>通信发生错误时触发</td>
</tr>
<tr>
<td>close</td>
<td>Socket.onclose</td>
<td>连接关闭时触发</td>
</tr>
</tbody></table>

### 3、WebSocket 方法

以下是 WebSocket 对象的相关方法。假定我们使用了以上代码创建了 Socket 对象：
<table class="reference">
<tbody><tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>Socket.send()</td>
<td><p>使用连接发送数据</p></td>
</tr>
<tr>
<td>Socket.close()</td>
<td><p>关闭连接</p></td>
</tr>
</tbody></table>

### 4、WebSocket 实例

WebSocket 协议本质上是一个基于 TCP 的协议。

为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。

#### 1、客户端的 HTML 和 JavaScript

目前大部分浏览器支持 WebSocket() 接口，你可以在以下浏览器中尝试实例： Chrome, Mozilla, Opera 和 Safari。

``` html
<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <title>菜鸟教程(runoob.com)</title>

    <script type="text/javascript">
        function WebSocketTest() {
            if ("WebSocket" in window) {
                alert("您的浏览器支持 WebSocket!");

                // 打开一个 web socket
                var ws = new WebSocket("ws://localhost:9998/echo");

                ws.onopen = function() {
                    // Web Socket 已连接上，使用 send() 方法发送数据
                    ws.send("发送数据");
                    alert("数据发送中...");
                };

                ws.onmessage = function(evt) {
                    var received_msg = evt.data;
                    alert("数据已接收...");
                };

                ws.onclose = function() {
                    // 关闭 websocket
                    alert("连接已关闭...");
                };
            } else {
                // 浏览器不支持 WebSocket
                alert("您的浏览器不支持 WebSocket!");
            }
        }
    </script>

</head>

<body>

    <div id="sse">
        <a href="javascript:WebSocketTest()">运行 WebSocket</a>
    </div>

</body>

</html>
```



