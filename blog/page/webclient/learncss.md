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
8、CSS盒子模型
**CSS 盒子模型(Box Model)**
所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。
CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。
盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。
下面的图片说明了盒子模型(Box Model)：
<img src='assets/boxmodel1.gif' alt='盒子模型'/>


