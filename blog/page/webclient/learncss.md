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
