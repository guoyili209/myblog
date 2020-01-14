<p align='center'>CSS 教程</p>
=
[toc]

## 一、选择器
id 和 class 选择器
你也可以指定特定的HTML元素使用class。
在以下实例中, 所有的 p 元素使用 class="center" 让该元素的文本居中:
```css
p.center {text-align:center;}
```
 类名的第一个字符不能使用数字！它无法在 Mozilla 或 Firefox 中起作用。

## 二、CSS 背景
**背景- 简写属性**
```css
body {background:#ffffff url('img_tree.png') no-repeat right top;}
```
<table>
<tr>
<th width="30%" align="left">Property</th>
    <th width="70%" align="left">描述</th>
  </tr>
<tr>
<td><a href="/cssref/css3-pr-background.html">background</a></td>
    <td>简写属性，作用是将背景属性设置在一个声明中。</td>
  </tr>
<tr>
<td><a href="/cssref/pr-background-attachment.html">background-attachment</a></td>
    <td>背景图像是否固定或者随着页面的其余部分滚动。</td>
  </tr>
<tr>
<td><a href="/cssref/pr-background-color.html">background-color</a></td>
    <td>设置元素的背景颜色。</td>
  </tr>
<tr>
<td><a href="/cssref/pr-background-image.html">background-image</a></td>
    <td>把图像设置为背景。</td>
  </tr>
<tr>
<td><a href="/cssref/pr-background-position.html">background-position</a></td>
    <td>设置背景图像的起始位置。</td>
  </tr>
<tr>
<td><a href="/cssref/pr-background-repeat.html">background-repeat</a></td>
    <td>设置背景图像是否及如何重复。</td>
  </tr>
</table>
## 三、CSS 文本格式
**文本颜色**
```css
body {color:red;}
h1 {color:#00ff00;}
h2 {color:rgb(255,0,0);}
```
*对于W3C标准的CSS：如果你定义了颜色属性，你还必须定义背景色属性。*
**文本的对齐方式**
文本可居中或对齐到左或右,两端对齐.
```css
h1 {text-align:center;}
p.date {text-align:right;}
p.main {text-align:justify;}
```
**文本修饰**
text-decoration 属性用来设置或删除文本的装饰。
从设计的角度看 text-decoration属性主要是用来删除链接的下划线：
```css
a {text-decoration:none;}
```
也可以这样装饰文字：
```css
h1 {text-decoration:overline;}
h2 {text-decoration:line-through;}
h3 {text-decoration:underline;}
```
**文本转换**
文本转换属性是用来指定在一个文本中的大写和小写字母。
可用于所有字句变成大写或小写字母，或每个单词的首字母大写。
```css
p.uppercase {text-transform:uppercase;}
p.lowercase {text-transform:lowercase;}
p.capitalize {text-transform:capitalize;}
```
**文本缩进**
文本缩进属性是用来指定文本的第一行的缩进。
```css
p {text-indent:50px;}
```
## 四、CSS字体
**用em来设置字体大小**
为了避免Internet Explorer 中无法调整文本的问题，许多开发者使用 em 单位代替像素。
em的尺寸单位由W3C建议。
1em和当前字体大小相等。在浏览器中默认的文字大小是16px。
因此，1em的默认大小是16px。可以通过下面这个公式将像素转换为em：px*16=em
```css
h1 {font-size:2.5em;} /* 40px/16=2.5em */
h2 {font-size:1.875em;} /* 30px/16=1.875em */
p {font-size:0.875em;} /* 14px/16=0.875em */
```
在上面的例子，em的文字大小是与前面的例子中像素一样。不过，如果使用 em 单位，则可以在所有浏览器中调整文本大小。
不幸的是，仍然是IE浏览器的问题。调整文本的大小时，会比正常的尺寸更大或更小。
**使用百分比和EM组合**
在所有浏览器的解决方案中，设置 \<body>元素的默认字体大小的是百分比：
```css
body {font-size:100%;}
h1 {font-size:2.5em;}
h2 {font-size:1.875em;}
p {font-size:0.875em;}
```
我们的代码非常有效。在所有浏览器中，可以显示相同的文本大小，并允许所有浏览器缩放文本的大小。
**所有CSS字体属性**
<table class="reference notranslate">
<tr>
<th width="25%" align="left">Property</th>
    <th width="75%" align="left">描述</th>
  </tr>
<tr>
<td><a href="/cssref/pr-font-font.html">font</a></td>
    <td>在一个声明中设置所有的字体属性</td>
  </tr>
<tr>
<td><a href="/cssref/pr-font-font-family.html">font-family</a></td>
    <td>指定文本的字体系列</td>
  </tr>
<tr>
<td><a href="/cssref/pr-font-font-size.html">font-size</a></td>
    <td>指定文本的字体大小</td>
  </tr>
<tr>
<td><a href="/cssref/pr-font-font-style.html">font-style</a></td>
    <td>指定文本的字体样式</td>
  </tr>
<tr>
<td><a href="/cssref/pr-font-font-variant.html">font-variant</a></td>
    <td>以小型大写字体或者正常字体显示文本。</td>
  </tr>
<tr>
<td><a href="/cssref/pr-font-weight.html">font-weight</a></td>
    <td>指定字体的粗细。</td>
  </tr>
</table>
## 五、CSS链接
不同的链接可以有不同的样式。
**链接样式**
链接的样式，可以用任何CSS属性（如颜色，字体，背景等）。
特别的链接，可以有不同的样式，这取决于他们是什么状态。
这四个链接状态是：
* a:link - 正常，未访问过的链接
* a:visited - 用户已访问过的链接
* a:hover - 当用户鼠标放在链接上时
* a:active - 链接被点击的那一刻
```css
a:link {color:#000000;}      /* 未访问链接*/
a:visited {color:#00FF00;}  /* 已访问链接 */
a:hover {color:#FF00FF;}  /* 鼠标移动到链接上 */
a:active {color:#0000FF;}  /* 鼠标点击时 */
```
当设置为若干链路状态的样式，也有一些顺序规则：
* a:hover 必须跟在 a:link 和 a:visited后面
* a:active 必须跟在 a:hover后面

**常见的链接样式**

**文本修饰**
text-decoration 属性主要用于删除链接中的下划线：
```css
a:link {text-decoration:none;}
a:visited {text-decoration:none;}
a:hover {text-decoration:underline;}
a:active {text-decoration:underline;}
```
**背景颜色**
背景颜色属性指定链接背景色：
```css
a:link {background-color:#B2FF99;}
a:visited {background-color:#FFFF85;}
a:hover {background-color:#FF704D;}
a:active {background-color:#FF704D;}
```
## 六、CSS 列表
CSS列表属性作用如下：
* 设置不同的列表项标记为有序列表
* 设置不同的列表项标记为无序列表
* 设置列表项标记为图像

**列表**
在HTML中，有两种类型的列表：
* 无序列表 - 列表项标记用特殊图形（如小黑点、小方框等）
* 有序列表 - 列表项的标记有数字或字母
使用CSS，可以列出进一步的样式，并可用图像作列表项标记。

**不同的列表项标记**
list-style-type属性指定列表项标记的类型是：
```css
ul.a {list-style-type: circle;}
ul.b {list-style-type: square;}
 
ol.c {list-style-type: upper-roman;}
ol.d {list-style-type: lower-alpha;}
```
一些值是无序列表，以及有些是有序列表。
**作为列表项标记的图像**
要指定列表项标记的图像，使用列表样式图像属性：
```css
ul
{
    list-style-image: url('sqpurple.gif');
}
```
上面的例子在所有浏览器中显示并不相同，IE和Opera显示图像标记比火狐，Chrome和Safari更高一点点。
如果你想在所有的浏览器放置同样的形象标志，就应使用浏览器兼容性解决方案，过程如下
**浏览器兼容性解决方案**
同样在所有的浏览器，下面的例子会显示的图像标记：
```css
ul
{
    list-style-type: none;
    padding: 0px;
    margin: 0px;
}
ul li
{
    background-image: url(sqpurple.gif);
    background-repeat: no-repeat;
    background-position: 0px 5px; 
    padding-left: 14px; 
}
```
例子解释：
* ul:
  * 设置列表类型为没有列表项标记
  * 设置填充和边距0px（浏览器兼容性）
* ul中所有li:
  * 设置图像的URL，并设置它只显示一次（无重复）
  * 您需要的定位图像位置（左0px和上下5px）
  * 用padding-left属性把文本置于列表中

**列表 -简写属性**
在单个属性中可以指定所有的列表属性。这就是所谓的简写属性。
为列表使用简写属性，列表样式属性设置如下：
```css
ul
{
    list-style: square url("sqpurple.gif");
}
```
可以按顺序设置如下属性：
* list-style-type
* list-style-position (有关说明，请参见下面的CSS属性表)
* list-style-image
如果上述值丢失一个，其余仍在指定的顺序，就没关系。

**所有的CSS列表属性**
<table class="reference">
<tr>
<th width="20%" align="left">属性</th>
    <th width="80%" align="left">描述</th>
  </tr>
<tr>
<td><a href="/cssref/pr-list-style.html">list-style</a></td>
    <td>简写属性。用于把所有用于列表的属性设置于一个声明中</td>
  </tr>
<tr>
<td><a href="/cssref/pr-list-style-image.html">list-style-image</a></td>
    <td>将图象设置为列表项标志。</td>
  </tr>
<tr>
<td><a href="/cssref/pr-list-style-position.html">list-style-position</a></td>
    <td>设置列表中列表项标志的位置。</td>
  </tr>
<tr>
<td><a href="/cssref/pr-list-style-type.html">list-style-type</a></td>
    <td>设置列表项标志的类型。</td>
  </tr>
</table>
## 七、CSS表格
**表格边框**
指定CSS表格边框，使用border属性。
下面的例子指定了一个表格的Th和TD元素的黑色边框：
```css
table, th, td
{
    border: 1px solid black;
}
```
请注意，在上面的例子中的表格有双边框。这是因为表和th/ td元素有独立的边界。
为了显示一个表的单个边框，使用 border-collapse属性。
**折叠边框**
border-collapse 属性设置表格的边框是否被折叠成一个单一的边框或隔开：
```css
table
{
    border-collapse:collapse;
}
table,th, td
{
    border: 1px solid black;
}
```
**表格宽度和高度**
Width和height属性定义表格的宽度和高度。
下面的例子是设置100％的宽度，50像素的th元素的高度的表格：
```css
table 
{
    width:100%;
}
th
{
    height:50px;
}
```
**表格文字对齐**
表格中的文本对齐和垂直对齐属性。
text-align属性设置水平对齐方式，向左，右，或中心：
```css
td
{
    text-align:right;
}
```
垂直对齐属性设置垂直对齐，比如顶部，底部或中间：
```css
td
{
    height:50px;
    vertical-align:bottom;
}
```
**表格填充**
如果在表的内容中控制空格之间的边框，应使用td和th元素的填充属性：
```css
td
{
    padding:15px;
}
```
**表格颜色**
下面的例子指定边框的颜色，和th元素的文本和背景颜色：
```css
table, td, th
{
    border:1px solid green;
}
th
{
    background-color:green;
    color:white;
}
```
##8、CSS盒子模型
**CSS 盒子模型(Box Model)**
所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。
CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。
盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。
下面的图片说明了盒子模型(Box Model)：
<img src='assets/boxmodel1.gif' alt='盒子模型'/>
不同部分的说明：
* Margin(外边距) - 清除边框外的区域，外边距是透明的。
* Border(边框) - 围绕在内边距和内容外的边框。
* Padding(内边距) - 清除内容周围的区域，内边距是透明的。
* Content(内容) - 盒子的内容，显示文本和图像。

为了正确设置元素在所有浏览器中的宽度和高度，你需要知道的盒模型是如何工作的。

**元素的宽度和高度**
*重要: 当您指定一个CSS元素的宽度和高度属性时，你只是设置内容区域的宽度和高度。要知道，完全大小的元素，你还必须添加填充，边框和边距。*
下面的例子中的元素的总宽度为300px：
```css
div {
    width: 300px;
    border: 25px solid green;
    padding: 25px;
    margin: 25px;
}
```
让我们自己算算：
300px (宽)
+ 50px (左 + 右填充)
+ 50px (左 + 右边框)
+ 50px (左 + 右边距)
= 450px

试想一下，你只有250像素的空间。让我们设置总宽度为250像素的元素:
```css
div {
    width: 220px;
    padding: 10px;
    border: 5px solid gray;
    margin: 0; 
}
```
最终元素的总宽度计算公式是这样的：
总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距
元素的总高度最终计算公式是这样的：
总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距
##9、CSS边框
**CSS边框属性**
CSS边框属性允许你指定一个元素边框的样式和颜色。
<div style="border: 1px solid #ccc!important;    border-color: #000!important;padding: 14px;">
<p>
在四边都有边框
</p>
</div><br>
```html
<div style="border: 1px solid #ccc!important;    border-color: #000!important;padding: 14px;">
<p>
在四边都有边框
</p>
</div>
```
<div style="border-bottom: 1px solid #ccc!important;padding:14px;border-color: #f44336!important;">
<p>
红色底部边框
</p>
</div><br>
<div style="border: 1px solid #ccc!important;padding:14px;border-radius: 16px!important;">
<p>
圆角边框
</p>
</div>
<br>
```css
<div style="border: 1px solid #ccc!important;padding:14px;border-radius: 16px!important;">
<p>
圆角边框
</p>
</div>
```
<div style="background-color: #ddffff!important;padding: 14px;border-left: 6px solid #ccc!important;border-color: #2196F3!important;">
<p>
左侧边框带宽度，颜色为蓝色
</p>
</div>
<hr>
```html
<div style="background-color: #ddffff!important;padding: 14px;border-left: 6px solid #ccc!important;border-color: #2196F3!important;">
<p>
左侧边框带宽度，颜色为蓝色
</p>
</div>
```

**边框样式**
边框样式属性指定要显示什么样的边界。
*border-style属性用来定义边框的样式*
border-style 值:
none: 默认无边框
<p style="border: 1px none #000000;padding:3px">none: 默认无边框</p><br>
<p style="border: 1px dotted #000000;padding:3px">dotted: 定义一个点线边框</p><br>
<p style="border: 1px dashed #000000;padding:3px">dashed: 定义一个虚线边框</p><br>
<p style="border: 1px solid #000000;padding:3px">solid: 定义实线边框</p><br>
<p style="border: 3px double #000000;padding:3px">double: 定义两个边框。 两个边框的宽度和 border-width 的值相同</p><br>
<p style="border: 5px groove #98bf21;padding:3px">groove: 定义3D沟槽边框。效果取决于边框的颜色值</p><br>
<p style="border: 5px ridge #98bf21;padding:3px">ridge: 定义3D脊边框。效果取决于边框的颜色值</p><br>
<p style="border: 5px inset #98bf21;padding:3px">inset:定义一个3D的嵌入边框。效果取决于边框的颜色值</p><br>
<p style="border: 5px outset #98bf21;padding:3px">outset: 定义一个3D突出边框。 效果取决于边框的颜色值</p><br>

**边框宽度**
您可以通过 border-width 属性为边框指定宽度。

为边框指定宽度有两种方法：可以指定长度值，比如 2px 或 0.1em(单位为 px, pt, cm, em 等)，或者使用 3 个关键字之一，它们分别是 thick 、medium（默认值） 和 thin。

**注意：** CSS 没有定义 3 个关键字的具体宽度，所以一个用户可能把 thick 、medium 和 thin 分别设置为等于 5px、3px 和 2px，而另一个用户则分别设置为 3px、2px 和 1px。
```css
p.one
{
    border-style:solid;
    border-width:5px;
}
p.two
{
    border-style:solid;
    border-width:medium;
}
```
**边框颜色**
border-color属性用于设置边框的颜色。可以设置的颜色：

* name - 指定颜色的名称，如 "red"
* RGB - 指定 RGB 值, 如 "rgb(255,0,0)"
* Hex - 指定16进制值, 如 "#ff0000"

您还可以设置边框的颜色为"transparent"。

**注意：** border-color单独使用是不起作用的，必须得先使用border-style来设置边框样式。
```css
p.one
{
    border-style:solid;
    border-color:red;
}
p.two
{
    border-style:solid;
    border-color:#98bf21;
}
```
**边框-单独设置各边**
在CSS中，可以指定不同的侧面不同的边框：
```css
p
{
    border-top-style:dotted;
    border-right-style:solid;
    border-bottom-style:dotted;
    border-left-style:solid;
}
```
上面的例子也可以设置一个单一属性：
```css
border-style:dotted solid;
```
border-style属性可以有1-4个值：

* border-style:dotted solid double dashed;
  * 上边框是 dotted
  * 右边框是 solid
  * 底边框是 double
  * 左边框是 dashed

* border-style:dotted solid double;
  * 上边框是 dotted
  * 左、右边框是 solid
  * 底边框是 double

* border-style:dotted solid;
  * 上、底边框是 dotted
  * 右、左边框是 solid

* border-style:dotted;
  * 四面边框是 dotted

上面的例子用了border-style。然而，它也可以和border-width 、 border-color一起使用。

**边框-简写属性**
上面的例子用了很多属性来设置边框。
你也可以在一个属性中设置边框。
你可以在"border"属性中设置：
* border-width
* border-style (required)
* border-color
```css
border:5px solid red;
```
**CSS 边框属性**
<table class="reference">
  <tbody><tr>
    <th>属性</th>
    <th>描述</th>
  </tr>
  <tr>
    <td><a title="CSS border 属性" href="/cssref/pr-border.html">border</a></td>
    <td>简写属性，用于把针对四个边的属性设置在一个声明。</td>
  </tr>
  <tr>
    <td><a title="CSS border-style 属性" href="/cssref/pr-border-style.html">border-style</a></td>
    <td>用于设置元素所有边框的样式，或者单独地为各边设置边框样式。</td>
  </tr>
  <tr>
    <td><a title="CSS border-width 属性" href="/cssref/pr-border-width.html">border-width</a></td>
    <td>简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度。</td>
  </tr>
  <tr>
    <td><a title="CSS border-color 属性" href="/cssref/pr-border-color.html">border-color</a></td>
    <td>简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色。</td>
  </tr>
  <tr>
    <td><a title="CSS border-bottom 属性" href="/cssref/pr-border-bottom.html">border-bottom</a></td>
    <td>简写属性，用于把下边框的所有属性设置到一个声明中。</td>
  </tr>
  <tr>
    <td><a title="CSS border-bottom-color 属性" href="/cssref/pr-border-bottom-color.html">border-bottom-color</a></td>
    <td>设置元素的下边框的颜色。</td>
  </tr>
  <tr>
    <td><a title="CSS border-bottom-style 属性" href="/cssref/pr-border-bottom-style.html">border-bottom-style</a></td>
    <td>设置元素的下边框的样式。</td>
  </tr>
  <tr>
    <td><a title="CSS border-bottom-width 属性" href="/cssref/pr-border-bottom-width.html">border-bottom-width</a></td>
    <td>设置元素的下边框的宽度。</td>
  </tr>
  <tr>
    <td><a title="CSS border-left 属性" href="/cssref/pr-border-left.html">border-left</a></td>
    <td>简写属性，用于把左边框的所有属性设置到一个声明中。</td>
  </tr>
  <tr>
    <td><a title="CSS border-left-color 属性" href="/cssref/pr-border-left-color.html">border-left-color</a></td>
    <td>设置元素的左边框的颜色。</td>
  </tr>
  <tr>
    <td><a title="CSS border-left-style 属性" href="/cssref/pr-border-left-style.html">border-left-style</a></td>
    <td>设置元素的左边框的样式。</td>
  </tr>
  <tr>
    <td><a title="CSS border-left-width 属性" href="/cssref/pr-border-left-width.html">border-left-width</a></td>
    <td>设置元素的左边框的宽度。</td>
  </tr>
  <tr>
    <td><a title="CSS border-right 属性" href="/cssref/pr-border-right.html">border-right</a></td>
    <td>简写属性，用于把右边框的所有属性设置到一个声明中。</td>
  </tr>
  <tr>
    <td><a title="CSS border-right-color 属性" href="/cssref/pr-border-right-color.html">border-right-color</a></td>
    <td>设置元素的右边框的颜色。</td>
  </tr>
  <tr>
    <td><a title="CSS border-right-style 属性" href="/cssref/pr-border-right-style.html">border-right-style</a></td>
    <td>设置元素的右边框的样式。</td>
  </tr>
  <tr>
    <td><a title="CSS border-right-width 属性" href="/cssref/pr-border-right-width.html">border-right-width</a></td>
    <td>设置元素的右边框的宽度。</td>
  </tr>
  <tr>
    <td><a title="CSS border-top 属性" href="/cssref/pr-border-top.html">border-top</a></td>
    <td>简写属性，用于把上边框的所有属性设置到一个声明中。</td>
  </tr>
  <tr>
    <td><a title="CSS border-top-color 属性" href="/cssref/pr-border-top-color.html">border-top-color</a></td>
    <td>设置元素的上边框的颜色。</td>
  </tr>
  <tr>
    <td><a title="CSS border-top-style 属性" href="/cssref/pr-border-top-style.html">border-top-style</a></td>
    <td>设置元素的上边框的样式。</td>
  </tr>
  <tr>
    <td><a title="CSS border-top-width 属性" href="/cssref/pr-border-top-width.html">border-top-width</a></td>
    <td>设置元素的上边框的宽度。</td>
  </tr>
</tbody></table>

## 10、CSS 轮廓（outline）
轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。
轮廓（outline）属性指定元素轮廓的样式、颜色和宽度。
<img src='assets/box_outline1.gif' alt='轮廓'/>
**所有CSS 轮廓（outline）属性**
<table width="100%" cellspacing="0" cellpadding="0" border="1" class="reference">
  <tbody><tr>
    <th width="20%" align="left">属性</th>
    <th width="53%" align="left">说明</th>
    <th width="20%" align="left">值</th>
    <th width="7%" align="left">CSS</th>
  </tr>
  <tr>
    <td><a href="/cssref/pr-outline.html">outline</a>
    </td>
    <td>在一个声明中设置所有的轮廓属性</td>
    <td><i>outline-color<br>
      outline-style<br>
      outline-width<br>
	</i>inherit</td>
    <td>2</td>
  </tr>
  <tr>
    <td>
      <a href="/cssref/pr-outline-color.html">
      outline-color</a>
    </td>
    <td>设置轮廓的颜色</td>
    <td><i>color-name<br>
	hex-number<br>
	rgb-number<br>
      </i>invert<br>
	inherit</td>
    <td>2</td>
  </tr>
  <tr>
    <td>
      <a href="/cssref/pr-outline-style.html">
      outline-style</a>
    </td>
    <td>设置轮廓的样式</td>
    <td>none<br>
      dotted<br>
      dashed<br>
      solid<br>
      double<br>
      groove<br>
      ridge<br>
      inset<br>
      outset<br>
	inherit</td>
    <td>2</td>
  </tr>
  <tr>
    <td>
      <a href="/cssref/pr-outline-width.html">
      outline-width</a>
    </td>
    <td>设置轮廓的宽度</td>
    <td>thin<br>
      medium<br>
      thick<br>
      <i>length<br>
	</i>inherit</td>
    <td>2</td>
  </tr>
</tbody></table>

*1.outline是不占空间的，既不会增加额外的width或者height（这样不会导致浏览器渲染时出现reflow或是repaint）*

*2.outline有可能是非矩形的（火狐浏览器下）*

##11、CSS margin(外边距)
CSS margin(外边距)属性定义元素周围的空间。
**margin**
margin 清除周围的（外边框）元素区域。margin 没有背景颜色，是完全透明的。
margin 可以单独改变元素的上，下，左，右边距，也可以一次改变所有的属性。
<img src='assets/margin1.png' alt='margin'/>
**可能的值**
<table width="100%" cellspacing="0" cellpadding="0" border="1" class="reference">
	<tbody><tr>
		<th align="left">值</th>
		<th align="left">说明</th>
	</tr>
	<tr>
		<td>auto</td>
		<td>设置浏览器边距。<br>这样做的结果会依赖于浏览器</td>
	</tr>
	<tr>
		<td><i>length</i></td>
		<td>定义一个固定的margin（使用像素，pt，em等） </td>
	</tr>
	<tr>
		<td><i>%</i></td>
		<td>定义一个使用百分比的边距</td>
	</tr>
</tbody></table>

**Margin - 单边外边距属性**
```css
margin-top:100px;
margin-bottom:100px;
margin-right:50px;
margin-left:50px;
```
**Margin - 简写属性**
为了缩短代码，有可能使用一个属性中margin指定的所有边距属性。这就是所谓的简写属性。
所有边距属性的简写属性是 margin :
```css
margin:100px 50px;
```
margin属性可以有一到四个值。
* margin:25px 50px 75px 100px;
  * 上边距为25px
  * 右边距为50px
  * 下边距为75px
  * 左边距为100px

* margin:25px 50px 75px;
  * 上边距为25px
  * 左右边距为50px
  * 下边距为75px

* margin:25px 50px;
  * 上下边距为25px
  * 左右边距为50px

* margin:25px;
  * 所有的4个边距都是25px
## 12、CSS padding（填充）
CSS padding（填充）是一个简写属性，定义元素边框与元素内容之间的空间，即上下左右的内边距。
**padding（填充）**
当元素的 padding（填充）内边距被清除时，所释放的区域将会受到元素背景颜色的填充。
单独使用 padding 属性可以改变上下左右的填充。
<img src='assets/margin1.png' alt='padding'/>
**可能的值**
<table class="reference">
	<tbody><tr>
		<th align="left">值</th>
		<th align="left">说明</th>
	</tr>
	<tr>
		<td><i>length</i></td>
		<td>定义一个固定的填充(像素, pt, em,等)</td>
	</tr>
	<tr>
		<td><i>%</i></td>
		<td>使用百分比值定义一个填充</td>
	</tr>
</tbody></table>
## 13、CSS 分组 和 嵌套 选择器
分组选择器，每个选择器用逗号分隔。
```css
h1,h2,p
{
    color:green;
}
```
**嵌套选择器**
在下面的例子设置了三个样式：
* p{ }: 为所有 p 元素指定一个样式。
* .marked{ }: 为所有 class="marked" 的元素指定一个样式。
* .marked p{ }: 为所有 class="marked" 元素内的 p 元素指定一个样式。
* p.marked{ }: 为所有 class="marked" 的 p 元素指定一个样式。
## 14、CSS 尺寸 (Dimension)
CSS 尺寸 (Dimension) 属性允许你控制元素的高度和宽度。同样，它允许你增加行间距。
**所有CSS 尺寸 (Dimension)属性**
<table class="reference">

  <tbody><tr>
    <th>属性</th>
    <th>描述</th>
  </tr>
  <tr>
    <td><a href="/cssref/pr-dim-height.html">height</a></td>
    <td>设置元素的高度。</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr-dim-line-height.html">line-height</a></td>
    <td>设置行高。</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr-dim-max-height.html">max-height</a></td>
    <td>设置元素的最大高度。</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr-dim-max-width.html">max-width</a></td>
    <td>设置元素的最大宽度。</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr-dim-min-height.html">min-height</a></td>
    <td>设置元素的最小高度。</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr-dim-min-width.html">min-width</a></td>
    <td>设置元素的最小宽度。</td>
  </tr>
  <tr>
    <td><a href="/cssref/pr-dim-width.html">width</a></td>
    <td>设置元素的宽度。</td>
  </tr>
</tbody></table>

**CSS Display(显示) 与 Visibility（可见性）**
display属性设置一个元素应如何显示，visibility属性指定一个元素应可见还是隐藏。
<div style="text-align:center">
<div style="width:394px;height:150px;margin-left:auto;margin-right:auto;text-align:left;border:1px solid gray">
<div class="imgbox" id="imgbox1">
Box 1<br>
<img class="thumbnail" src="assets/visibility1.jpg" width="107" height="90"><br>

</div>
<div class="imgbox" id="imgbox2">
Box 2<br>
<img class="thumbnail" src="assets/visibility2.jpg" width="107" height="80">

</div>
<div class="imgbox">
Box 3<br>
<img class="thumbnail" src="assets/visibility3.jpg" width="116" height="90">

</div>
</div>
</div>
<style>
.imgbox { float:left; text-align:center; width:120px; height:135px; border:1px solid gray; margin:4px; padding:0px; } 
</style>

```css
.imgbox { 
  float:left; 
  text-align:center; 
  width:120px; 
  height:135px; 
  border:1px solid gray; 
  margin:4px; 
  padding:0px; 
} 
```

**隐藏元素 - display:none或visibility:hidden**
隐藏一个元素可以通过把display属性设置为"none"，或把visibility属性设置为"hidden"。但是请注意，这两种方法会产生不同的结果。
visibility:hidden可以隐藏某个元素，但隐藏的元素仍需占用与未隐藏之前一样的空间。也就是说，该元素虽然被隐藏了，但仍然会影响布局。

**CSS Display - 块和内联元素**
块元素是一个元素，占用了全部宽度，在前后都是换行符。
块元素的例子：
* \<h1>
* \<p>
* \<div>

内联元素只需要必要的宽度，不强制换行。
内联元素的例子：
* \<span>
* \<a>

**如何改变一个元素显示**
可以更改内联元素和块元素，反之亦然，可以使页面看起来是以一种特定的方式组合，并仍然遵循web标准。
下面的示例把列表项显示为内联元素：
```css
li {display:inline;}
```
下面的示例把span元素作为块元素：
```css
span {display:block;}
```
**注意：** 变更元素的显示类型看该元素是如何显示，它是什么样的元素。例如：一个内联元素设置为display:block是不允许有它内部的嵌套块元素。
<hr>
<strong>块级元素(block)特性：</strong>
<ul><li>总是独占一行，表现为另起一行开始，而且其后的元素也必须另起一行显示;</li><li>宽度(width)、高度(height)、内边距(padding)和外边距(margin)都可控制;</li></ul><p><strong>内联元素(inline)特性：</strong></p><ul><li>和相邻的内联元素在同一行;</li><li>宽度(width)、高度(height)、内边距的top/bottom(padding-top/padding-bottom)和外边距的top/bottom(margin-top/margin-bottom)都不可改变，就是里面文字或图片的大小;</li></ul><p><strong>块级元素主要有：</strong></p><ul><li>&nbsp;address , blockquote , center , dir , div , dl , fieldset , form , h1 , h2 , h3 , h4 , h5 , h6 , hr , isindex , menu , noframes , noscript , ol , p , pre , table , ul , li</li></ul><p><strong>内联元素主要有：</strong></p><ul><li>a , abbr , acronym , b , bdo , big , br , cite , code , dfn , em , font , i , img , input , kbd , label , q , s , samp , select , small , span , strike , strong , sub , sup ,textarea , tt , u , var</li></ul><p><strong>可变元素(根据上下文关系确定该元素是块元素还是内联元素)：</strong></p><ul><li>applet ,button ,del ,iframe , ins ,map ,object , script</li></ul><p><strong>CSS中块级、内联元素的应用：</strong></p><p>利用CSS我们可以摆脱上面表格里HTML标签归类的限制，自由地在不同标签/元素上应用我们需要的属性。</p><p>主要用的CSS样式有以下三个：</p><ul><li>display:block&nbsp;&nbsp;-- 显示为块级元素</li><li>display:inline&nbsp;&nbsp;-- 显示为内联元素</li><li>display:inline-block&nbsp;-- 显示为内联块元素，表现为同行显示并可修改宽高内外边距等属性</li></ul><p>我们常将&lt;ul&gt;元素加上display:inline-block样式，原本垂直的列表就可以水平显示了。</p>
<hr>
<p>对于 CSS 里的 <strong>visibility</strong> 属性，通常其值被设置成 <strong>visible</strong> 或 <strong>hidden</strong>。</p>
<p><span class="marked">visibility: hidden</span> 相当于 <span class="marked">display:none</span>，能把元素隐藏起来，但两者的区别在于：</p>
<ul><li>
1、<span class="marked">display:none</span> 元素不再占用空间。
</li><li>
2、<span class="marked">visibility: hidden</span> 使元素在网页上不可见，但仍占用空间。
</li></ul>
<p>然而，visibility 还可能取值为 collapse 。</p>
<p>当设置元素 <strong>visibility: collapse</strong> 后，一般的元素的表现与 <strong>visibility: hidden</strong> 一样，也即其会占用空间。但如果该元素是与 table 相关的元素，例如 table row、table column、table column group、table column group 等，其表现却跟 <strong>display: none</strong> 一样，也即其占用的空间会释放。</p>
<p>在不同浏览器下，对 <span class="marked">visibility: collapse</span> 的处理方式不同：</p>
<ul><li>
1、<strong>visibility: collapse</strong> 的上述特性仅在 Firefox 下起作用。
</li><li>
2、在 IE 即使设置了 <strong>visibility: collapse</strong>，还是会显示元素。
</li><li>
3、在 Chrome 下，即使会将元素隐藏，但无论是否是与 table 相关的元素，<strong>visibility: collapse</strong> 与 <strong>visibility: hidden</strong> 没有什么区别，即仍会占用空间。</li></ul>

## 15、CSS Position(定位)
position 属性指定了元素的定位类型。
position 属性的五个值：
* static
* relative
* fixed
* absolute
* sticky

元素可以使用的顶部，底部，左侧和右侧属性定位。然而，这些属性无法工作，除非是先设定position属性。他们也有不同的工作方式，这取决于定位方法。
**static 定位**
HTML 元素的默认值，即没有定位，遵循正常的文档流对象。
静态定位的元素不会受到 top, bottom, left, right影响。
```css
div.static {
    position: static;
    border: 3px solid #73AD21;
}
```
**fixed 定位**
元素的位置相对于浏览器窗口是固定位置。
即使窗口是滚动的它也不会移动：
```css
p.pos_fixed
{
    position:fixed;
    top:30px;
    right:5px;
}
```
注意： Fixed 定位在 IE7 和 IE8 下需要描述 !DOCTYPE 才能支持。
Fixed定位使元素的位置与文档流无关，因此不占据空间。
Fixed定位的元素和其他元素重叠。
**relative 定位**
相对定位元素的定位是相对其正常位置。
```css
h2.pos_left
{
    position:relative;
    left:-20px;
}
h2.pos_right
{
    position:relative;
    left:20px;
}
```
移动相对定位元素，但它原本所占的空间不会改变。
```css
h2.pos_top
{
    position:relative;
    top:-50px;
}
```
**absolute 定位**
绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于\<html>:
```css
h2
{
    position:absolute;
    left:100px;
    top:150px;
}
```
absolute 定位使元素的位置与文档流无关，因此不占据空间。
absolute 定位的元素和其他元素重叠。
**sticky 定位**
sticky 英文字面意思是粘，粘贴，所以可以把它称之为粘性定位。
position: sticky; 基于用户的滚动位置来定位。
粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。
它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;它会固定在目标位置。
元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。
这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。
```css
div.sticky {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    background-color: green;
    border: 2px solid #4CAF50;
}
```
**重叠的元素**
元素的定位与文档流无关，所以它们可以覆盖页面上的其它元素
z-index属性指定了一个元素的堆叠顺序（哪个元素应该放在前面，或后面）
一个元素可以有正数或负数的堆叠顺序：
```css
img
{
    position:absolute;
    left:0px;
    top:0px;
    z-index:-1;
}
```
具有更高堆叠顺序的元素总是在较低的堆叠顺序元素的前面。
**注意：** 如果两个定位元素重叠，没有指定z - index，最后定位在HTML代码中的元素将被显示在最前面。

## 16、CSS 布局 - Overflow
CSS overflow 属性可以控制内容溢出元素框时在对应的元素区间内添加滚动条。
<table class="reference">

<tbody><tr>
<th>值</th>
<th>描述</th>
</tr>

<tr>
<td>visible</td>
<td>默认值。内容不会被修剪，会呈现在元素框之外。</td>
</tr>

<tr>
<td>hidden</td>
<td>内容会被修剪，并且其余内容是不可见的。</td>
</tr>

<tr>
<td>scroll</td>
<td>内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。</td>
</tr>

<tr>
<td>auto</td>
<td>如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。</td>
</tr>

<tr>
<td>inherit</td>
<td>规定应该从父元素继承 overflow 属性的值。</td>
</tr>
</tbody></table>

**注意:** overflow 属性只工作于指定高度的块元素上。
**注意:** 在 OS X Lion ( Mac 系统) 系统上，滚动条默认是隐藏的，使用的时候才会显示 (设置 "overflow:scroll" 也是一样的)。
##17、CSS Float(浮动)
<div class="imgbox" id="imgbox1">
<img class="thumbnail" src="assets/visibility1.jpg" width="107" height="90"><br>
</div>
<div class="imgbox" id="imgbox2">
<img class="thumbnail" src="assets/visibility2.jpg" width="107" height="80">
</div>
<div class="imgbox" id="imgbox3">
<img class="thumbnail" src="assets/visibility3.jpg" width="116" height="90">
</div>
<div class="imgbox" id="imgbox4">
<img class="thumbnail" src="assets/visibility3.jpg" width="107" height="90"><br>
</div>
<style>
.imgbox
{
float:left;
text-align:center;
width:120px;
height:120px;
border:1px solid gray;
margin:4px;
margin-bottom:8px;
padding:0px;
}
.thumbnail 
{
width:110px;
height:90px;
margin:3px;
}
</style>
<br>

```css
.imgbox
{
float:left;
text-align:center;
width:120px;
height:120px;
border:1px solid gray;
margin:4px;
margin-bottom:8px;
padding:0px;
}
```
CSS 的 Float（浮动），会使元素向左或向右移动，其周围的元素也会重新排列。
Float（浮动），往往是用于图像，但它在布局时一样非常有用。
**元素怎样浮动**
元素的水平方向浮动，意味着元素只能左右移动而不能上下移动。
一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。
浮动元素之后的元素将围绕它。
浮动元素之前的元素将不会受到影响。
如果图像是右浮动，下面的文本流将环绕在它左边：
```css
img
{
    float:right;
}
```
**彼此相邻的浮动元素**
如果你把几个浮动的元素放到一起，如果有空间的话，它们将彼此相邻。
在这里，我们对图片廊使用 float 属性：
```css
.thumbnail 
{
    float:left;
    width:110px;
    height:90px;
    margin:5px;
}
```
**清除浮动 - 使用 clear**
元素浮动之后，周围的元素会重新排列，为了避免这种情况，使用 clear 属性。
clear 属性指定元素两侧不能出现浮动元素。
使用 clear 属性往文本中添加图片廊：
```css
.text_line
{
    clear:both;
}
```
##18、CSS 布局 - 水平 & 垂直对齐
**元素居中对齐**
要水平居中对齐一个元素(如 \<div>), 可以使用 margin: auto;。
设置到元素的宽度将防止它溢出到容器的边缘。
元素通过指定宽度，并将两边的空外边距平均分配：
<div style="margin:0 auto;width:50%;border:3px solid green;padding:10px;">
  <p>div 元素是居中的</p>
</div>

```css
.center {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
}
```
**注意:** 如果没有设置 width 属性(或者设置 100%)，居中对齐将不起作用。
**文本居中对齐**
如果仅仅是为了文本在元素内居中对齐，可以使用 text-align: center;
<div style="text-align:center;border:3px solid green">
  <p>文本居中对齐</p>
</div>

```css
.center {
    text-align: center;
    border: 3px solid green;
}
```
**图片居中对齐**
要让图片居中对齐, 可以使用 margin: auto; 并将它放到 块 元素中:
<img src="assets/visibility2.jpg" alt="Paris" style="width:45%;display:block;margin:0 auto">
```css
img {
    display: block;
    margin: auto;
    width: 40%;
}
```

**左右对齐 - 使用定位方式**
我们可以使用 position: absolute; 属性来对齐元素:
<div style="position:relative;margin-bottom:180px">
<div style="position: absolute;right: 0px;width: 300px;border: 3px solid #73AD21;padding: 10px;">
 <p>菜鸟教程 -- 学的不仅是技术，更是梦想！！！</p>
</div>
</div>

```css
.right {
    position: absolute;
    right: 0px;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
}
```
注释：绝对定位元素会被从正常流中删除，并且能够交叠元素。
**提示:** 当使用 position 来对齐元素时, 通常 \<body> 元素会设置 margin 和 padding 。 这样可以避免在不同的浏览器中出现可见的差异。
当使用 position 属性时，IE8 以及更早的版本存在一个问题。如果容器元素（在我们的案例中是 \<div class="container">）设置了指定的宽度，并且省略了 !DOCTYPE 声明，那么 IE8 以及更早的版本会在右侧增加 17px 的外边距。这似乎是为滚动条预留的空间。当使用 position 属性时，请始终设置 !DOCTYPE 声明：
```css
body {
    margin: 0;
    padding: 0;
}
 
.container {
    position: relative;
    width: 100%;
}
 
.right {
    position: absolute;
    right: 0px;
    width: 300px;
    background-color: #b0e0e6;
}
```
**左右对齐 - 使用 float 方式**
我们也可以使用 float 属性来对齐元素:
```css
.right {
    float: right;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
}
```
当像这样对齐元素时，对 \<body> 元素的外边距和内边距进行预定义是一个好主意。这样可以避免在不同的浏览器中出现可见的差异。
*注意：如果子元素的高度大于父元素，且子元素设置了浮动，那么子元素将溢出，这时候你可以使用 "clearfix(清除浮动)" 来解决该问题。*
当使用 float 属性时，IE8 以及更早的版本存在一个问题。如果省略 !DOCTYPE 声明，那么 IE8 以及更早的版本会在右侧增加 17px 的外边距。这似乎是为滚动条预留的空间。当使用 float 属性时，请始终设置 !DOCTYPE 声明：
```css
body {
    margin: 0;
    padding: 0;
}
 
.right {
    float: right;
    width: 300px;
    background-color: #b0e0e6;
}
```
**垂直居中对齐 - 使用 padding**
CSS 中有很多方式可以实现垂直居中对齐。 一个简单的方式就是头部顶部使用 padding:
<div style="border:3px solid green;padding:70px 2px;">
  <p>我是垂直居中。</p>
</div><br>

```css
.center {
    padding: 70px 0;
    border: 3px solid green;
}
```
如果要水平和垂直都居中，可以使用 padding 和 text-align: center:
<div style="border:3px solid green;padding:70px 2px;;text-align:center;">
  <p>我是水平和垂直都居中的。</p>
</div>

```css
.center {
    padding: 70px 0;
    border: 3px solid green;
    text-align: center;
}
```
**垂直居中 - 使用 line-height**
<div style="line-height:200px; height:200px;border:3px solid green;text-align:center;">
  <p style=" line-height:1.2; display:inline-block; vertical-align:middle;">我是垂直居中的。</p>
</div>

```css
.center {
    line-height: 200px;
    height: 200px;
    border: 3px solid green;
    text-align: center;
}
 
/* 如果文本有多行，添加以下代码: */
.center p {
    line-height: 1.5;
    display: inline-block;
    vertical-align: middle;
}
```
**垂直居中 - 使用 position 和 transform**
除了使用 padding 和 line-height 属性外,我们还可以使用 transform 属性来设置垂直居中:
```css
.center { 
    height: 200px;
    position: relative;
    border: 3px solid green; 
}
 
.center p {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```
##19、CSS 组合选择符
**CSS 组合选择符**
==组合选择符说明了两个选择器直接的关系。==
CSS组合选择符包括各种简单选择符的组合方式。
在 CSS3 中包含了四种组合方式:
* 后代选择器(以空格分隔)
* 子元素选择器(以大于号分隔）
* 相邻兄弟选择器（以加号分隔）
* 普通兄弟选择器（以破折号分隔）

**后代选择器**
后代选择器用于选取某元素的后代元素。
以下实例选取所有 \<p> 元素插入到 \<div> 元素中: 
```css
div p
{
  background-color:yellow;
}
```
**子元素选择器**
与后代选择器相比，子元素选择器（Child selectors）只能选择作为某元素子元素的元素。
以下实例选择了\<div>元素中所有直接子元素 \<p> ：
```css
div>p
{
  background-color:yellow;
}
```
**相邻兄弟选择器**
相邻兄弟选择器（Adjacent sibling selector）可选择紧接在另一元素后的元素，且二者有相同父元素。
如果需要选择紧接在另一个元素后的元素，而且二者有相同的父元素，可以使用相邻兄弟选择器（Adjacent sibling selector）。
以下实例选取了所有位于 <div> 元素后的第一个 <p> 元素:
```css
div+p
{
  background-color:yellow;
}
```
**后续兄弟选择器**
后续兄弟选择器选取所有指定元素之后的相邻兄弟元素。
以下实例选取了所有 \<div> 元素之后的所有相邻兄弟元素 \<p> :
```css
div~p
{
  background-color:yellow;
}
```
## 20、伪类
CSS伪类是用来添加一些选择器的特殊效果。
**anchor伪类**
在支持 CSS 的浏览器中，链接的不同状态都可以以不同的方式显示
```css
a:link {color:#FF0000;} /* 未访问的链接 */
a:visited {color:#00FF00;} /* 已访问的链接 */
a:hover {color:#FF00FF;} /* 鼠标划过链接 */
a:active {color:#0000FF;} /* 已选中的链接 */
```
**注意：** 在CSS定义中，a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。
**注意：** 在 CSS 定义中，a:active 必须被置于 a:hover 之后，才是有效的。
**注意：** 伪类的名称不区分大小写。

**伪类和CSS类**
伪类可以与 CSS 类配合使用：
```css
a.red:visited {color:#FF0000;}
<a class="red" href="css-syntax.html">CSS 语法</a>
```
如果在上面的例子的链接已被访问，它会显示为红色。
**CSS :first-child 伪类**
您可以使用 :first-child 伪类来选择父元素的第一个子元素。
注意：在IE8的之前版本必须声明<!DOCTYPE> ，这样 :first-child 才能生效。
**匹配第一个 <p> 元素**
在下面的例子中，选择器匹配作为任何元素的第一个子元素的 \<p> 元素：
```css
p:first-child
{
    color:blue;
}
```
**匹配所有\<p> 元素中的第一个 \<i> 元素**
在下面的例子中，选择相匹配的所有\<p>元素的第一个 \<i> 元素：
```css
p > i:first-child
{
    color:blue;
}
```
**匹配所有作为第一个子元素的 \<p> 元素中的所有 \<i> 元素**
在下面的例子中，选择器匹配所有作为元素的第一个子元素的 \<p> 元素中的所有 \<i> 元素：
```css
p:first-child i
{
    color:blue;
}
```
**CSS - :lang 伪类**
:lang 伪类使你有能力为不同的语言定义特殊的规则
**注意：** IE8必须声明<!DOCTYPE>才能支持;lang伪类。
在下面的例子中，:lang 类为属性值为 no 的q元素定义引号的类型：
```css
q:lang(no) {quotes: "~" "~";}
```
**所有CSS伪类/元素**
<table width="100%" cellspacing="0" cellpadding="0" border="1" id="table13" class="reference">
  <tbody><tr>
    <th width="20%" align="left">选择器</th>
    <th width="17%" align="left">示例</th>
    <th width="63%" align="left">示例说明</th>
  </tr>
<tr>
    <td><a href="/cssref/sel-checked.html">:checked</a></td>
    <td>input:checked</td>
    <td>选择所有选中的表单元素</td>
  </tr>
<tr>
    <td><a href="cssref/sel-disabled.html">:disabled</a></td>
    <td>input:disabled</td>
    <td>选择所有禁用的表单元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-empty.html">:empty</a></td>
    <td>p:empty</td>
    <td>选择所有没有子元素的p元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-enable.html">:enabled</a></td>
    <td>input:enabled</td>
    <td>选择所有启用的表单元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-first-of-type.html">:first-of-type</a></td>
    <td>p:first-of-type</td>
    <td>选择的每个 p 元素是其父元素的第一个 p 元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-in-range.html">:in-range</a></td>
    <td>input:in-range</td>
    <td>选择元素指定范围内的值</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-invalid.html">:invalid</a></td>
    <td>input:invalid</td>
    <td>选择所有无效的元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-last-child.html">:last-child</a></td>
    <td>p:last-child</td>
    <td>选择所有p元素的最后一个子元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-last-of-type.html">:last-of-type</a></td>
    <td>p:last-of-type</td>
    <td>选择每个p元素是其母元素的最后一个p元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-not.html">:not(selector)</a></td>
    <td>:not(p)</td>
    <td>选择所有p以外的元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-nth-child.html">:nth-child(n)</a></td>
    <td>p:nth-child(2)</td>
    <td>选择所有 p 元素的父元素的第二个子元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-nth-last-child.html">:nth-last-child(n)</a></td>
    <td>p:nth-last-child(2)</td>
    <td>选择所有p元素倒数的第二个子元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-nth-last-of-type.html">:nth-last-of-type(n)</a></td>
    <td>p:nth-last-of-type(2)</td>
    <td>选择所有p元素倒数的第二个为p的子元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-nth-of-type.html">:nth-of-type(n)</a></td>
    <td>p:nth-of-type(2)</td>
    <td>选择所有p元素第二个为p的子元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-only-of-type.html">:only-of-type</a></td>
    <td>p:only-of-type</td>
    <td>选择所有仅有一个子元素为p的元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-only-child.html">:only-child</a></td>
    <td>p:only-child</td>
    <td>选择所有仅有一个子元素的p元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-optional.html">:optional</a></td>
    <td>input:optional</td>
    <td>选择没有"required"的元素属性</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-out-of-range.html">:out-of-range</a></td>
    <td>input:out-of-range</td>
    <td>选择指定范围以外的值的元素属性</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-read-only.html">:read-only</a></td>
    <td>input:read-only</td>
    <td>选择只读属性的元素属性</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-read-write.html">:read-write</a></td>
    <td>input:read-write</td>
    <td>选择没有只读属性的元素属性</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-required.html">:required</a></td>
    <td>input:required</td>
    <td>选择有"required"属性指定的元素属性</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-root.html">:root</a></td>
    <td>root</td>
    <td>选择文档的根元素</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-target.html">:target</a></td>
    <td>#news:target</td>
    <td>选择当前活动#news元素(点击URL包含锚的名字)</td>
  </tr>
<tr>
    <td><a href="/cssref/sel-valid.html">:valid</a></td>
    <td>input:valid</td>
    <td>选择所有有效值的属性</td>
  </tr>
  <tr>
    <td><a href="/cssref/sel-link.html">:link</a></td>
    <td>a:link</td>
    <td>选择所有未访问链接</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-visited.html">:visited</a></td>
    <td>a:visited</td>
    <td>选择所有访问过的链接</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-active.html">:active</a></td>
    <td>a:active</td>
    <td>选择正在活动链接</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-hover.html">:hover</a></td>
    <td>a:hover</td>
    <td>把鼠标放在链接上的状态</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-focus.html">:focus</a></td>
    <td>input:focus</td>
    <td>选择元素输入后具有焦点</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-firstletter.html">:first-letter</a></td>
    <td>p:first-letter</td>
    <td>选择每个&lt;p&gt; 元素的第一个字母</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-firstline.html">:first-line</a></td>
    <td>p:first-line</td>
    <td>选择每个&lt;p&gt; 元素的第一行</td>
  </tr>
  <tr>
    <td><a href="/cssref/sel-firstchild.html">:first-child</a></td>
    <td>p:first-child</td>
    <td>选择器匹配属于任意元素的第一个子元素的 &lt;p&gt; 元素</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-before.html">:before</a></td>
    <td>p:before</td>
    <td>在每个&lt;p&gt;元素之前插入内容</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-after.html">:after</a></td>
    <td>p:after</td>
    <td>在每个&lt;p&gt;元素之后插入内容</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-lang.html">:lang(<i>language</i>)</a></td>
    <td>p:lang(it)</td>
    <td>为&lt;p&gt;元素的lang属性选择一个开始值</td>
  </tr>
	</tbody></table>
##21、CSS 伪元素
CSS伪元素是用来添加一些选择器的特殊效果。
**:first-line 伪元素**
"first-line" 伪元素用于向文本的首行设置特殊样式。
在下面的例子中，浏览器会根据 "first-line" 伪元素中的样式对 p 元素的第一行文本进行格式化：
```css
p:first-line 
{
    color:#ff0000;
    font-variant:small-caps;
}
```
**注意：** "first-line" 伪元素只能用于块级元素。
**注意：** 下面的属性可应用于 "first-line" 伪元素：
* font properties
* color properties 
* background properties
* word-spacing
* letter-spacing
* text-decoration
* vertical-align
* text-transform
* line-height
* clear

**:first-letter 伪元素**
"first-letter" 伪元素用于向文本的首字母设置特殊样式：
```css
p:first-letter 
{
    color:#ff0000;
    font-size:xx-large;
}
```
**注意：** "first-letter" 伪元素只能用于块级元素。
**注意：** 下面的属性可应用于 "first-letter" 伪元素： 
* font properties
* color properties 
* background properties
* margin properties
* padding properties
* border properties
* text-decoration
* vertical-align (only if "float" is "none")
* text-transform
* line-height
* float
* clear

**伪元素和CSS类**
伪元素可以结合CSS类： 
```css
p.article:first-letter {color:#ff0000;}
<p class="article">文章段落</p>
```
上面的例子会使所有 class 为 article 的段落的首字母变为红色。
**多个伪元素**
可以结合多个伪元素来使用。
在下面的例子中，段落的第一个字母将显示为红色，其字体大小为 xx-large。第一行中的其余文本将为蓝色，并以小型大写字母显示。
段落中的其余文本将以默认字体大小和颜色来显示：
```css
p:first-letter
{
    color:#ff0000;
    font-size:xx-large;
}
p:first-line 
{
    color:#0000ff;
    font-variant:small-caps;
}
```
**CSS - :before 伪元素**
":before" 伪元素可以在元素的内容前面插入新内容。
下面的例子在每个 \<h1>元素前面插入一幅图片：
```css
h1:before 
{
    content:url(smiley.gif);
}
```
**CSS - :after 伪元素**
":after" 伪元素可以在元素的内容之后插入新内容。
下面的例子在每个 \<h1> 元素后面插入一幅图片：
```css
h1:after
{
    content:url(smiley.gif);
}
```
**所有CSS伪类/元素**
<table width="100%" cellspacing="0" cellpadding="0" border="1" id="table13" class="reference">
  <tbody><tr>
    <th width="20%" align="left">选择器</th>
    <th width="17%" align="left">示例</th>
    <th width="63%" align="left">示例说明</th>
  </tr>
  <tr>
    <td><a href="/cssref/sel-link.html">:link</a></td>
    <td class="notranslate">a:link</td>
    <td>选择所有未访问链接</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-visited.html">:visited</a></td>
    <td class="notranslate">a:visited</td>
    <td>选择所有访问过的链接</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-active.html">:active</a></td>
    <td class="notranslate">a:active</td>
    <td>选择正在活动链接</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-hover.html">:hover</a></td>
    <td class="notranslate">a:hover</td>
    <td>把鼠标放在链接上的状态</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-focus.html">:focus</a></td>
    <td class="notranslate">input:focus</td>
    <td>选择元素输入后具有焦点</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-firstletter.html">:first-letter</a></td>
    <td class="notranslate">p:first-letter</td>
    <td>选择每个&lt;p&gt; 元素的第一个字母</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-firstline.html">:first-line</a></td>
    <td class="notranslate">p:first-line</td>
    <td>选择每个&lt;p&gt; 元素的第一行</td>
  </tr>
  <tr>
    <td><a href="/cssref/sel-firstchild.html">:first-child</a></td>
    <td class="notranslate">p:first-child</td>
    <td>选择器匹配属于任意元素的第一个子元素的 &lt;p&gt; 元素</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-before.html">:before</a></td>
    <td class="notranslate">p:before</td>
    <td>在每个&lt;p&gt;元素之前插入内容</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-after.html">:after</a></td>
    <td class="notranslate">p:after</td>
    <td>在每个&lt;p&gt;元素之后插入内容</td>
  </tr>
	<tr>
    <td><a href="/cssref/sel-lang.html">:lang(<i>language</i>)</a></td>
    <td class="notranslate">p:lang(it)</td>
    <td>为&lt;p&gt;元素的lang属性选择一个开始值</td>
  </tr>
	</tbody></table>

## 22、CSS 导航栏
<style>
ul.horizontal {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

ul.horizontal li {
    float: left;
   padding: 0; 
   margin: 0;
   background-image:none;
}

ul.horizontal li a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

ul.horizontal li a:hover:not(.active) {
    background-color: #000;
}

ul.horizontal li a.active {
    background-color:#4CAF50;
}

ul.horizontal2 {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid #e7e7e7;
    background-color: #f3f3f3;
}

ul.horizontal2 li {
    float: left;
}

ul.horizontal2 li a {
    display: inline-block;
    color: #666;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

ul.horizontal2 li a:hover:not(.active) {
    background-color: #ddd;
}

ul.horizontal2 a.active {
    color: white;
    background-color: #4CAF50;
}
.width94 {
width:94%;
}
@media screen and (max-width: 600px) {
    .width94 {
       width:100%;
    }
}

ul.vertical {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
}
ul.vertical li{
  padding: 0; 
   margin: 0;
   background-image:none;
}
ul.vertical li a {
    display: block;
    color: #000;
    padding: 8px 0 8px 16px;
    text-decoration: none;
}

ul.vertical li a:hover:not(.active) {
    background-color: #555;
    color:white;
}

ul.vertical a.active {
    background-color: #4CAF50;
    color:white;
}

ul.gray {
border: 1px solid #e7e7e7;
    background-color: #f3f3f3;
}

ul.gray li a {
    display: block;
    color: #666;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

ul.gray li a:hover:not(.active) {
    background-color: #ddd;
}

ul.gray li a.active {
    color: white;
    background-color: #008CBA;
}
.rightli {
float:right;
}

@media screen and (max-width: 408px) {
    .rightli {
       display:none;
    }
}

ul.ex {
width:90%;
}
@media screen and (max-width: 600px) {
    ul.ex {
       width:100%;
    }
}

ul.divider li {
    float: left;
    border-right:1px solid #bbb;
}

ul.divider li:last-child {
    border-right: none;
}
ul.border {
    border: 1px solid #555;
}

ul.border li a {
    padding: 8px 16px;
}

ul.border li {
    text-align: center;
    border-bottom: 1px solid #555;
}

ul.border li:last-child {
    border-bottom: none;
}

</style>

<h3>垂直</h3>
<ul class="vertical ex">
  <li><a class="active" href="javascript:void(0)">主页</a></li>
  <li><a href="javascript:void(0)">新闻</a></li>
  <li><a href="javascript:void(0)">联系</a></li>
  <li><a href="javascript:void(0)">关于</a></li>
</ul>
<h3>水平</h3>
<ul class="horizontal">
  <li><a class="active" href="javascript:void(0)">主页</a></li>
  <li><a href="javascript:void(0)">新闻</a></li>
  <li><a href="javascript:void(0)">联系</a></li>
  <li class="rightli" style="float:right"><a href="javascript:void(0)">关于</a></li>
</ul>

<br>
<ul class="horizontal gray">
  <li><a href="javascript:void(0)">主页</a></li>
  <li><a href="javascript:void(0)">新闻</a></li>
  <li><a class="active" href="javascript:void(0)">联系</a></li>
  <li class="rightli" style="float:right"><a href="javascript:void(0)">关于</a></li>
</ul>
<hr>

**导航栏=链接列表**
作为标准的HTML基础一个导航栏是必须的。
在我们的例子中我们将建立一个标准的HTML列表导航栏。

导航条基本上是一个链接列表，所以使用 \<ul> 和 \<li>元素非常有意义：

```css
<ul>
  <li><a href="#home">主页</a></li>
  <li><a href="#news">新闻</a></li>
  <li><a href="#contact">联系</a></li>
  <li><a href="#about">关于</a></li>
</ul>
```
现在，让我们从列表中删除边距和填充：
```css
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
```
例子解析：
* list-style-type:none - 移除列表前小标志。一个导航栏并不需要列表标记
* 移除浏览器的默认设置将边距和填充设置为0

上面的例子中的代码是垂直和水平导航栏使用的标准代码。
**垂直导航栏**
上面的代码，我们只需要 \<a>元素的样式，建立一个垂直的导航栏：
```css
a
{
    display:block;
    width:60px;
}
```
示例说明：
* display:block - 显示块元素的链接，让整体变为可点击链接区域（不只是文本），它允许我们指定宽度
* width:60px - 块元素默认情况下是最大宽度。我们要指定一个60像素的宽度
**注意：** 请务必指定 \<a>元素在垂直导航栏的的宽度。如果省略宽度，IE6可能产生意想不到的效果。

**垂直导航条实例**
创建一个简单的垂直导航条实例，在鼠标移动到选项时，修改背景颜色：
<ul class="vertical">
  <li><a href="javascript:void(0)">主页</a></li>
  <li><a href="javascript:void(0)">新闻</a></li>
  <li><a href="javascript:void(0)">联系</a></li>
  <li><a href="javascript:void(0)">关于</a></li>
</ul><br>
```css
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
}
 
li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}
 
/* 鼠标移动到选项上修改背景颜色 */
li a:hover {
    background-color: #555;
    color: white;
}
```
**激活/当前导航条实例**
在点击了选项后，我们可以添加 "active" 类来标准哪个选项被选中：
<ul class="vertical">
  <li><a class="active" href="javascript:void(0)">主页</a></li>
  <li><a href="javascript:void(0)">新闻</a></li>
  <li><a href="javascript:void(0)">联系</a></li>
  <li><a href="javascript:void(0)">关于</a></li>
</ul>

```css
.active {
    background-color: #4CAF50;
    color: white;
}
```
**创建链接并添加边框**
可以在 \<li> or \<a> 上添加text-align:center 样式来让链接居中。
可以在 border \<ul> 上添加 border 属性来让导航栏有边框。如果要在每个选项上添加边框，可以在每个 \<li> 元素上添加border-bottom :
```css
ul {
    border: 1px solid #555;
}
li {
    text-align: center;
    border-bottom: 1px solid #555;
}
li:last-child {
    border-bottom: none;
}
```
**全屏高度的固定导航条**
接下来我们创建一个左边是全屏高度的固定导航条，右边是可滚动的内容。
```css
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 25%;
    background-color: #f1f1f1;
    height: 100%; /* 全屏高度 */
    position: fixed; 
    overflow: auto; /* 如果导航栏选项多，允许滚动 */
}
```
**注意:** 该实例可以在移动设备上使用。

**水平导航栏**
有两种方法创建横向导航栏。使用内联(inline)或浮动(float)的列表项。
这两种方法都很好，但如果你想链接到具有相同的大小，你必须使用浮动的方法。
**内联列表项**
建立一个横向导航栏的方法之一是指定元素， 上述代码是标准的内联:
```css
li
{
    display:inline;
}
```
实例解析：
* display:inline; -默认情况下，\<li>元素是块元素。在这里，我们删除换行符之前和之后每个列表项，以显示一行。

**浮动列表项**
在上面的例子中链接有不同的宽度。
对于所有的链接宽度相等，浮动 \<li>元素，并指定为 \<a>元素的宽度：
```css
li
{
    float:left;
}
a
{
    display:block;
    width:60px;
}
```
实例解析：
* float:left - 使用浮动块元素的幻灯片彼此相邻
* display:block - 显示块元素的链接，让整体变为可点击链接区域（不只是文本），它允许我们指定宽度
* width:60px - 块元素默认情况下是最大宽度。我们要指定一个60像素的宽度

**水平导航条实例**
创建一个水平导航条，在鼠标移动到选项后修改背景颜色。
```css
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}
 
li {
    float: left;
}
 
li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
 
/*鼠标移动到选项上修改背景颜色 */
li a:hover {
    background-color: #111;
}
```
**激活/当前导航条实例**
在点击了选项后，我们可以添加 "active" 类来标准哪个选项被选中：
```css
.active {
    background-color: #4CAF50;
}
```
**链接右对齐**
将导航条最右边的选项设置右对齐 (float:right;)：
```css
<ul>
  <li><a href="#home">主页</a></li>
  <li><a href="#news">新闻</a></li>
  <li><a href="#contact">联系</a></li>
  <li style="float:right"><a class="active" href="#about">关于</a></li>
</ul>
```
**添加分割线**
\<li> 通过 border-right 样式来添加分割线:
```css
/* 除了最后一个选项(last-child) 其他的都添加分割线 */
li {
    border-right: 1px solid #bbb;
}
 
li:last-child {
    border-right: none;
}
```
**固定导航条**
可以设置页面的导航条固定在头部或者底部：
```css
\\固定在头部
ul {
    position: fixed;
    top: 0;
    width: 100%;
}
```
```css
\\固定在底部
ul {
    position: fixed;
    bottom: 0;
    width: 100%;
}
```
**注意:** 该实例可以在移动设备上使用。

**灰色水平导航条**
```css
//固定在底部
ul {
    border: 1px solid #e7e7e7;
    background-color: #f3f3f3;
}
 
li a {
    color: #666;
}
```

##23、CSS 下拉菜单
使用 CSS 创建一个鼠标移动上去后显示下拉菜单的效果。
**基本下拉菜单**
当鼠标移动到指定元素上时，会出现下拉菜单。
```css
<style>
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>

<div class="dropdown">
  <span>Mouse over me</span>
  <div class="dropdown-content">
    <p>Hello World!</p>
  </div>
</div>
```

**实例解析**

**HTML 部分：**
我们可以使用任何的 HTML 元素来打开下拉菜单，如：\<span>, 或 a \<button> 元素。
使用容器元素 (如： \<div>) 来创建下拉菜单的内容，并放在任何你想放的位置上。
使用 \<div> 元素来包裹这些元素，并使用 CSS 来设置下拉内容的样式。
**CSS 部分：**
.dropdown 类使用 position:relative, 这将设置下拉菜单的内容放置在下拉按钮 (使用 position:absolute) 的右下角位置。
.dropdown-content 类中是实际的下拉菜单。默认是隐藏的，在鼠标移动到指定元素后会显示。 注意 min-width 的值设置为 160px。你可以随意修改它。 注意: 如果你想设置下拉内容与下拉按钮的宽度一致，可设置 width 为 100% ( overflow:auto 设置可以在小尺寸屏幕上滚动)。
我们使用 box-shadow 属性让下拉菜单看起来像一个"卡片"。
:hover 选择器用于在用户将鼠标移动到下拉按钮上时显示下拉菜单。

**下拉菜单**
创建下拉菜单，并允许用户选取列表中的某一项：
<div class="dropdown dropdown2">
  <button class="dropbtn dropbtn2">下拉菜单</button>
  <div class="dropdown-content">
    <a href="void(0)">菜鸟教程 1</a>
    <a href="void(0)">菜鸟教程 2</a>
    <a href="void(0)">菜鸟教程 3</a>
  </div>
</div>
<style>
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}
/* 容器 <div> - 需要定位下拉内容 */
.dropdown {
    position: relative;
    display: inline-block;
}
/* 下拉内容 (默认隐藏) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
/* 下拉菜单的链接 */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
/* 鼠标移上去后修改下拉菜单链接颜色 */
.dropdown-content a:hover {background-color: #f1f1f1}
/* 在鼠标移上去后显示下拉菜单 */
.dropdown:hover .dropdown-content {
    display: block;
}
/* 当下拉内容显示后修改下拉按钮的背景颜色 */
.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
</style>
```css
<style>
/* 下拉按钮样式 */
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}
/* 容器 <div> - 需要定位下拉内容 */
.dropdown {
    position: relative;
    display: inline-block;
}
/* 下拉内容 (默认隐藏) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
/* 下拉菜单的链接 */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
/* 鼠标移上去后修改下拉菜单链接颜色 */
.dropdown-content a:hover {background-color: #f1f1f1}
/* 在鼠标移上去后显示下拉菜单 */
.dropdown:hover .dropdown-content {
    display: block;
}
/* 当下拉内容显示后修改下拉按钮的背景颜色 */
.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
</style>
<div class="dropdown">
  <button class="dropbtn">下拉菜单</button>
  <div class="dropdown-content">
    <a href="#">菜鸟教程 1</a>
    <a href="#">菜鸟教程 2</a>
    <a href="#">菜鸟教程 3</a>
  </div>
</div>
```
##24、CSS 提示工具(Tooltip)
本文我们为大家介绍如何使用 HTML 与 CSS 来创建提示工具。
<style>
.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted #ccc;
    zcursor: help;
    color: #006080;
}
.tooltip .tooltiptext {
    visibility: hidden;
    position: absolute;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    z-index: 1;
    opacity: 0;
    transition: opacity .6s;
}
.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}
.tooltip .tooltiptext2 {
    visibility: hidden;
    position: absolute;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    z-index: 1;
}
.tooltip:hover .tooltiptext2 {
    visibility: visible;
}
.tooltip-right {
  top: -5px;
  left: 125%;  
}
.tooltip-right2 {
  top: -5px;
  left: 105%;  
}
.tooltip-right::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #555 transparent transparent;
}
.tooltip-bottom {
  top: 135%;
  left: 50%;  
  margin-left: -60px;
}
.tooltip-bottom2 {
  top: 125%;
  left: 50%;  
  margin-left: -60px;
}
.tooltip-bottom::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #555 transparent;
}
.tooltip-top {
  bottom: 125%;
  left: 50%;  
  margin-left: -60px;
}
.tooltip-top2 {
  bottom: 115%;
  left: 50%;  
  margin-left: -60px;
}
.tooltip-top::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}
.tooltip-left {
  top: -5px;
  bottom:auto;
  right: 128%;  
}
.tooltip-left2 {
  top: -5px;
  bottom:auto;
  right: 105%;  
}
.tooltip-left::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent #555;
}
.tooltip .tooltiptext-bottomarrow {
    visibility: hidden;
    width: 120px;
    background-color: #111;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 130%;
    left: 50%;
    margin-left: -60px;
}
.tooltip .tooltiptext-bottomarrow::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}
.tooltip:hover .tooltiptext-bottomarrow {
    visibility: visible;
}
.tooltip .tooltiptext-toparrow {
    visibility: hidden;
    width: 120px;
    background-color: #111;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 150%;
    left: 50%;
    margin-left: -60px;
}
.tooltip .tooltiptext-toparrow::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
}
.tooltip:hover .tooltiptext-toparrow {
    visibility: visible;
}
.tooltip .tooltiptext-leftarrow {
    visibility: hidden;
    width: 120px;
    background-color: #111;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: -5px;
    left: 110%;
}
.tooltip .tooltiptext-leftarrow::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
}
.tooltip:hover .tooltiptext-leftarrow {
    visibility: visible;
}
.tooltip .tooltiptext-rightarrow {
    visibility: hidden;
    width: 120px;
    background-color: #111;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: -5px;
    right: 110%;
}
.tooltip .tooltiptext-rightarrow::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent black;
}
.tooltip:hover .tooltiptext-rightarrow {
    visibility: visible;
}
</style>
<table class="reference">
<tr><td>
  <div class="tooltip">头部显示
    <span class="tooltiptext tooltip-top">提示框文本</span>
  </div>
</td><td>
  <div class="tooltip">右边显示
    <span class="tooltiptext tooltip-right">提示框文本</span>
  </div>
</td><td>


  <div class="tooltip">底部显示
    <span class="tooltiptext tooltip-bottom">提示框文本</span>
  </div>

</td><td>
  <div class="tooltip">左边显示
    <span class="tooltiptext tooltip-left">提示框文本</span>
  </div>
</td></tr></table>
<hr>

**基础提示框(Tooltip)**
提示框在鼠标移动到指定元素上显示：
```css
<style>
/* Tooltip 容器 */
.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black; /* 悬停元素上显示点线 */
}
/* Tooltip 文本 */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
 
    /* 定位 */
    position: absolute;
    z-index: 1;
}
/* 鼠标移动上去后显示提示框 */
.tooltip:hover .tooltiptext {
    visibility: visible;
}
</style>
<div class="tooltip">鼠标移动到这
  <span class="tooltiptext">提示文本</span>
</div>
```
**添加箭头**
我们可以用CSS 伪元素 ::after 及 content 属性为提示工具创建一个小箭头标志，箭头是由边框组成的，但组合起来后提示工具像个语音信息框。
以下实例演示了如何为显示在顶部的提示工具添加底部箭头：
```css
//顶部提示框/底部箭头：
.tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 100%; /* 提示工具底部 */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}
```
**实例解析**
在提示工具内定位箭头: top: 100% , 箭头将显示在提示工具的底部。left: 50% 用于居中对齐箭头。
注意：border-width 属性指定了箭头的大小。如果你修改它，也要修改 margin-left 值。这样箭头在能居中显示。
border-color 用于将内容转换为箭头。设置顶部边框为黑色，其他是透明的。如果设置了其他的也是黑色则会显示为一个黑色的四边形。

**淡入效果**
我们可以使用 CSS3 transition 属性及 opacity 属性来实现提示工具的淡入效果:
```css
//左侧提示框/右侧箭头：
.tooltip .tooltiptext {
    opacity: 0;
    transition: opacity 1s;
}
.tooltip:hover .tooltiptext {
    opacity: 1;
}
```
##24、CSS 属性 选择器
**具有特定属性的HTML元素样式**
具有特定属性的HTML元素样式不仅仅是class和id。
**属性选择器**
下面的例子是把包含标题（title）的所有元素变为蓝色：
```css
[title]
{
    color:blue;
}
```
**属性和值选择器**
下面的实例改变了标题title='runoob'元素的边框样式:
```css
[title=runoob]
{
    border:5px solid green;
}
```
**属性和值的选择器 - 多值**
下面是包含指定值的title属性的元素样式的例子，使用（~）分隔属性和值:
```css
[title~=hello] { color:blue; }
```
下面是包含指定值的lang属性的元素样式的例子，使用（|）分隔属性和值:
```css
[lang|=en] { color:blue; }
```
**表单样式**
属性选择器样式无需使用class或id的形式:
```css
input[type="text"]
{
    width:150px;
    display:block;
    margin-bottom:10px;
    background-color:yellow;
}
input[type="button"]
{
    width:120px;
    margin-left:35px;
    display:block;
}
```
##25、CSS 表单
**输入框(input) 样式**
```css
input {
  width: 100%;
}
```
以上实例中设置了所有 <input> 元素的宽度为 100%，如果你只想设置指定类型的输入框可以使用以下属性选择器：
* input[type=text] - 选取文本输入框
* input[type=password] - 选择密码的输入框
* input[type=number] - 选择数字的输入框

**输入框填充**
使用 padding 属性可以在输入框中添加内边距。
```css
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
```
**注意：** 我们设置了 box-sizing 属性为 border-box。这样可以确保浏览器呈现出带有指定宽度和高度的输入框是把边框和内边距一起计算进去的。 
**输入框(input) 边框**
使用 border 属性可以修改 input 边框的大小或颜色，使用 border-radius 属性可以给 input 添加圆角：
```css
input[type=text] {
  border: 2px solid red;
  border-radius: 4px;
}
```
如果你只想添加底部边框可以使用 border-bottom 属性:
```css
input[type=text] {
  border: none;
  border-bottom: 2px solid red;
}
```
**输入框(input) 颜色**
可以使用 background-color 属性来设置输入框的背景颜色，color 属性用于修改文本颜色：
```css
input[type=text] {
  background-color: #3CBC8D;
  color: white;
}
```
**输入框(input) 聚焦**
默认情况下，一些浏览器在输入框获取焦点时（点击输入框）会有一个蓝色轮廓。我们可以设置 input 样式为 outline: none; 来忽略该效果。
使用 :focus 选择器可以设置输入框在获取焦点时的样式：
```css
input[type=text]:focus {
  background-color: lightblue;
}
```
```css
input[type=text]:focus {
  border: 3px solid #555;
}
```
**输入框(input) 图标**
如果你想在输入框中添加图标，可以使用 background-image 属性和用于定位的background-position 属性。注意设置图标的左边距，让图标有一定的空间：
```css
input[type=text] {
  background-color: white;
  background-image: url('searchicon.png');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding-left: 40px;
}
```
**带动画的搜索框**
以下实例使用了 CSS transition 属性，该属性设置了输入框在获取焦点时会向右延展。
```css
input[type=text] {
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
input[type=text]:focus {
  width: 100%;
}
```
**文本框（textarea）样式**
**注意:** 使用 resize 属性来禁用文本框可以重置大小的功能（一般拖动右下角可以重置大小）。
```css
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}
```
**下拉菜单（select）样式**
```css
select {
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
}
```
**按钮样式**
```css
input[type=button], input[type=submit], input[type=reset] {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
/* 提示: 使用 width: 100% 设置全宽按钮 */
```
**响应式表单**
响应式表单可以根据浏览器窗口的大小重新布局各个元素，我们可以通过重置浏览器窗口大小来查看效果：
```css
* {
  box-sizing: border-box;
}
 
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
 
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
 
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
 
input[type=submit]:hover {
  background-color: #45a049;
}
 
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
 
.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}
 
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}
 
/* 清除浮动 */
.row:after {
  content: "";
  display: table;
  clear: both;
}
 
/* 响应式布局 layout - 在屏幕宽度小于 600px 时， 设置为上下堆叠元素 */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
```
## 26、CSS 计数器
CSS 计数器通过一个变量来设置，根据规则递增变量。
**使用计数器自动编号**
CSS 计数器根据规则来递增变量。
CSS 计数器使用到以下几个属性：
* counter-reset - 创建或者重置计数器
* counter-increment - 递增变量
* content - 插入生成的内容
* counter() 或 counters() 函数 - 将计数器的值添加到元素
要使用 CSS 计数器，得先用 counter-reset 创建：
以下实例在页面创建一个计数器 (在 body 选择器中)，每个 \<h2> 元素的计数值都会递增，并在每个 \<h2> 元素前添加 "Section <计数值>:"
```css
body {
  counter-reset: section;
}
 
h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}
```
**嵌套计数器**
以下实例在页面创建一个计数器，在每一个 \<h1> 元素前添加计数值 "Section <主标题计数值>.", 嵌套的计数值则放在 \<h2> 元素的前面，内容为 "<主标题计数值>.<副标题计数值>":
```css
body {
  counter-reset: section;
}
 
h1 {
  counter-reset: subsection;
}
 
h1::before {
  counter-increment: section;
  content: "Section " counter(section) ". ";
}
 
h2::before {
  counter-increment: subsection;
  content: counter(section) "." counter(subsection) " ";
}
```
计数器也可用于列表中，列表的子元素会自动创建。这里我们使用了 counters() 函数在不同的嵌套层级中插入字符串:
```css
ol {
  counter-reset: section;
  list-style-type: none;
}
li::before {
  counter-increment: section;
  content: counters(section,".") " ";
}
```
**CSS 计数器属性**
<table class="reference">
  <tbody><tr>
    <th style="width:20%">属性</th>
    <th>描述</th>
  </tr>
  <tr>
    <td><a target="_blank" href="/cssref/pr-gen-content.html" rel="noopener noreferrer">content</a></td>
    <td>使用 ::before 和 ::after 伪元素来插入自动生成的内容</td>
  </tr>
  <tr>
    <td><a target="_blank" href="/cssref/pr-gen-counter-increment.html" rel="noopener noreferrer">counter-increment</a></td>
    <td>递增一个或多个值</td>
  </tr>
  <tr>
    <td><a target="_blank" href="/cssref/pr-gen-counter-reset.html" rel="noopener noreferrer">counter-reset</a></td>
    <td>创建或重置一个或多个计数器</td>
  </tr>
</tbody></table>







