<p align='center'>CSS3 教程</p>
=
[toc]

## 一、简介

CSS 用于控制网页的样式和布局。
CSS3 是最新的 CSS 标准。
对CSS3已完全向后兼容，所以你就不必改变现有的设计。浏览器将永远支持CSS2。

### 1、CSS3模块

CSS3被拆分为"模块"。旧规范已拆分成小块，还增加了新的。

一些最重要CSS3模块如下：

* 选择器
* 盒模型
* 背景和边框
* 文字特效
* 2D/3D转换
* 动画
* 多列布局
* 用户界面

## 二、CSS3边框

用 CSS3，你可以创建圆角边框，添加阴影框，并作为边界的形象而不使用设计程序，如 Photoshop。
在本章中，您将了解以下的边框属性：

* border-radius
* box-shadow
* border-image

**1、CSS3圆角**
在 CSS2 中添加圆角棘手。我们不得不在每个角落使用不同的图像。

在 CSS3 中，很容易创建圆角。

在 CSS3 中 border-radius 属性被用于创建圆角：

``` css
div {
    border: 2px solid;
    border-radius: 25px;
}
```

**2、CSS3 盒阴影**
CSS3 中的 box-shadow 属性被用来添加阴影:

``` css
div {
    box-shadow: 10px 10px 5px #888888;
}
```

**3、CSS3 边界图片**
有了 CSS3 的 border-image 属性，你可以使用图像创建一个边框：

border-image 属性允许你指定一个图片作为边框！ 用于创建上文边框的原始图像：
在 div 中使用图片创建边框:

``` css
div {
    border-image: url(border.png) 30 30 round;
    -webkit-border-image: url(border.png) 30 30 round;
    /* Safari 5 and older */
    -o-border-image: url(border.png) 30 30 round;
    /* Opera */
}
```

**新边框属性**

<table class="reference">
  <tbody><tr>

    <th width="30%" align="left">属性</th>
    <th width="65%" align="left">说明</th>
    <th width="5%" align="left">CSS</th>

  </tr>
  <tr>

    <td><a href="/cssref/css3-pr-border-image.html">border-image</a></td>
    <td>设置所有边框图像的速记属性。</td>
    <td>3</td>

  </tr>
  <tr>

    <td><a href="/cssref/css3-pr-border-radius.html">border-radius</a></td>
    <td>一个用于设置所有四个边框- *-半径属性的速记属性</td>
    <td>3</td>

  </tr>
  <tr>

    <td><a href="/cssref/css3-pr-box-shadow.html">box-shadow</a></td>
    <td>附加一个或多个下拉框的阴影</td>
    <td>3</td>

  </tr>
</tbody></table>

## 三、CSS3圆角

使用 CSS3 border-radius 属性，你可以给任何元素制作 "圆角"。
**1、CSS3 border-radius 属性**
如果你在 border-radius 属性中只指定一个值，那么将生成 4 个 圆角。

* 四个值: 第一个值为左上角，第二个值为右上角，第三个值为右下角，第四个值为左下角。
* 三个值: 第一个值为左上角, 第二个值为右上角和左下角，第三个值为右下角
* 两个值: 第一个值为左上角与右下角，第二个值为右上角与左下角
* 一个值： 四个圆角值相同

``` css
#rcorners4 {

    border-radius: 15px 50px 30px 5px;
    background: #8AC007;
    padding: 20px;
    width: 200px;
    height: 150px;

}

#rcorners5 {

    border-radius: 15px 50px 30px;
    background: #8AC007;
    padding: 20px;
    width: 200px;
    height: 150px;

}

#rcorners6 {

    border-radius: 15px 50px;
    background: #8AC007;
    padding: 20px;
    width: 200px;
    height: 150px;

}
```

椭圆

``` css
#rcorners7 {
    border-radius: 50px/15px;
    background: #8AC007;
    padding: 20px;
    width: 200px;
    height: 150px;
}

#rcorners8 {
    border-radius: 15px/50px;
    background: #8AC007;
    padding: 20px;
    width: 200px;
    height: 150px;
}

#rcorners9 {
    border-radius: 50%;
    background: #8AC007;
    padding: 20px;
    width: 200px;
    height: 150px;
}
```

**CSS3 圆角属性**
<table class="reference">
  <tbody><tr>
    <th style="width:30%">属性</th>
    <th>描述</th>
  </tr>
  <tr>
    <td><a href="/cssref/css3-pr-border-radius.html" target="_blank">border-radius</a></td>
    <td>所有四个边角 border-*-*-radius 属性的缩写 </td>
  </tr>
  <tr>
    <td>
   <a href="/cssref/css3-pr-border-top-left-radius.html" target="_blank">border-top-left-radius</a></td>
    <td>定义了左上角的弧度</td>
  </tr>
  <tr>
    <td>
   <a href="/cssref/css3-pr-border-top-right-radius.html" target="_blank">border-top-right-radius</a></td>
    <td>定义了右上角的弧度</td>
  </tr>
  <tr>
    <td>
   <a href="/cssref/css3-pr-border-bottom-right-radius.html" target="_blank">border-bottom-right-radius</a></td>
    <td>定义了右下角的弧度</td>
  </tr>
  <tr>
    <td>
   <a href="/cssref/css3-pr-border-bottom-left-radius.html" target="_blank">border-bottom-left-radius</a></td>
    <td>定义了左下角的弧度</td>
  </tr>
  </tbody></table>

## 四、CSS3 背景
CSS3中包含几个新的背景属性，提供更大背景元素控制。
* background-image
* background-size
* background-origin
* background-clip

**1、CSS3 background-image属性**
CSS3中可以通过background-image属性添加背景图片。
不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张。
```css
#example1 { 
    background-image: url(img_flwr.gif), url(paper.gif); 
    background-position: right bottom, left top; 
    background-repeat: no-repeat, repeat; 
}
```
可以给不同的图片设置多个不同的属性
```css
#example1 {
    background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
}
```
**2、CSS3 background-size 属性**
background-size指定背景图像的大小。CSS3以前，背景图像大小由图像的实际大小决定。
CSS3中可以指定背景图片，让我们重新在不同的环境中指定背景图片的大小。您可以指定像素或百分比大小。
重置背景图像：
```css
div
{
    background:url(img_flwr.gif);
    background-size:80px 60px;
    background-repeat:no-repeat;
}
```
伸展背景图像完全填充内容区域：
```css
div
{
    background:url(img_flwr.gif);
    background-size:100% 100%;
    background-repeat:no-repeat;
}
```
**3、CSS3的background-Origin属性**
background-Origin属性指定了背景图像的位置区域。
content-box, padding-box,和 border-box区域内可以放置背景图像。
<img src='assets/background-origin.gif' alt='background-origin'/>

在 content-box 中定位背景图片：
```css
div
{
    background:url(img_flwr.gif);
    background-repeat:no-repeat;
    background-size:100% 100%;
    background-origin:content-box;
}
```
**4、CSS3多个背景图像**
```css
body
{ 
    background-image:url(img_flwr.gif),url(img_tree.gif);
}
```
**5、CSS3 background-clip属性**
CSS3中background-clip背景剪裁属性是从指定位置开始绘制。
```css
#example1 { 
    border: 10px dotted black; 
    padding: 35px; 
    background: yellow; 
    background-clip: content-box; 
}
```
**新的背景属性**
<table class="reference">
<tr>
<th width="28%" align="left">顺序</th>
    <th width="67%" align="left">描述</th>
    <th width="5%" align="left">CSS</th>
  </tr>
<tr>
<td><a href="/cssref/css3-pr-background-clip.html">background-clip</a></td>
    <td>规定背景的绘制区域。</td>
    <td>3</td>
  </tr>
<tr>
<td><a href="/cssref/css3-pr-background-origin.html">background-origin</a></td>
    <td>规定背景图片的定位区域。</td>
    <td>3</td>
  </tr>
<tr>
<td><a href="/cssref/css3-pr-background-size.html">background-size</a></td>
    <td>规定背景图片的尺寸。</td>
    <td>3</td>
  </tr>
</table>

## 五、CSS3 渐变（Gradients）
CSS3 定义了两种类型的渐变（gradients）：

* 线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
* 径向渐变（Radial Gradients）- 由它们的中心定义
**线性渐变 - 从上到下（默认情况下）**
```css
#grad {
    background-image: linear-gradient(#e66465, #9198e5);
}
```
从左到右
```css
#grad {
  height: 200px;
  background-image: linear-gradient(to right, red , yellow);
}
```
对角
```css
#grad {
  height: 200px;
  background-image: linear-gradient(to bottom right, red, yellow);
}
```
**使用角度**
如果你想要在渐变的方向上做更多的控制，你可以定义一个角度，而不用预定义方向（to bottom、to top、to right、to left、to bottom right，等等）。
```css
background-image: linear-gradient(angle, color-stop1, color-stop2);
```
**使用多个颜色结点**
带有多个颜色结点的从上到下的线性渐变：
```css
#grad {
  background-image: linear-gradient(red, yellow, green);
}
```
下面的实例演示了如何创建一个带有彩虹颜色和文本的线性渐变：
```css
#grad {
  /* 标准的语法 */
  background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
}
```
**使用透明度（transparent）**
CSS3 渐变也支持透明度（transparent），可用于创建减弱变淡的效果。
从左到右的线性渐变，带有透明度：
```css
#grad {
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
}
```
**重复的线性渐变**
repeating-linear-gradient() 函数用于重复线性渐变：
```css
//一个重复的线性渐变：
#grad {
  /* 标准的语法 */
  background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
}
```
**CSS3 径向渐变**
径向渐变 - 颜色结点均匀分布（默认情况下）
```css
#grad {
  background-image: radial-gradient(red, yellow, green);
}
```
径向渐变 - 颜色结点不均匀分布
```css
#grad {
  background-image: radial-gradient(red 5%, yellow 15%, green 60%);
}
```
**设置形状**
shape 参数定义了形状。它可以是值 circle 或 ellipse。其中，circle 表示圆形，ellipse 表示椭圆形。默认值是 ellipse。
```css
#grad {
  background-image: radial-gradient(circle, red, yellow, green);
}
```
**不同尺寸大小关键字的使用**
size 参数定义了渐变的大小。它可以是以下四个值：

* closest-side
* farthest-side
* closest-corner
* farthest-corner
```css
#grad1 {
  background-image: radial-gradient(closest-side at 60% 55%, red, yellow, black);
}
 
#grad2 {
  background-image: radial-gradient(farthest-side at 60% 55%, red, yellow, black);
}
```
**重复的径向渐变**
repeating-radial-gradient() 函数用于重复径向渐变：
```css
#grad {
  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
}
```
## 六、CSS3文本效果
CSS3中包含几个新的文本特征。
在本章中您将了解以下文本属性：
* text-shadow
* box-shadow
* text-overflow
* word-wrap
* word-break

**CSS3中，text-shadow属性适用于文本阴影。**
```css
h1
{
    text-shadow: 5px 5px 5px #FF0000;
}
```

**CSS3 box-shadow属性**
CSS3 中 CSS3 box-shadow 属性适用于盒子阴影
```css
div {
    box-shadow: 10px 10px 5px #888888;
}
//阴影添加颜色
div {
    box-shadow: 10px 10px grey;
}
//阴影添加模糊效果
div {
    box-shadow: 10px 10px 5px grey;
}
```
**::before 和 ::after 两个伪元素中添加阴影效果**
```css
#boxshadow {
    position: relative;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
    padding: 10px;
    background: white;
} 
#boxshadow img {
     width: 100%;
     border: 1px solid #8a4419;
     border-style: inset;
} 
#boxshadow::after {
    content: '';
    position: absolute;
    z-index: -1; /* hide shadow behind image */
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3); 
    width: 70%; 
    left: 15%; /* one half of the remaining 30% */
    height: 100px;
    bottom: 0;
}
```
**卡片效果**
```css
div.card {
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
}
```
**CSS3 Text Overflow属性**
CSS3文本溢出属性指定应向用户如何显示溢出内容
```css
p.test1 {
    white-space: nowrap; 
    width: 200px; 
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: clip; 
}
 
p.test2 {
    white-space: nowrap; 
    width: 200px; 
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: ellipsis; 
}
```
**CSS3换行**
允许长文本换行
```css
p {word-wrap:break-word;}
```
**CSS3单词拆分换行**
CSS3 单词拆分换行属性指定换行规则：
```css
p.test1 {
    word-break: keep-all;
}
 
p.test2 {
    word-break: break-all;
}
```
**新文本属性**
<table class="reference">

<tbody><tr>
<th style="width:25%">属性</th>
<th>描述</th>
<th style="width:5%">CSS</th>
</tr>

<tr>
<td><a href="/cssref/css3-pr-hanging-punctuation.html" title="CSS3 hanging-punctuation 属性">hanging-punctuation</a></td>
<td>规定标点字符是否位于线框之外。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/css3-pr-punctuation-trim.html" title="CSS3 punctuation-trim 属性">punctuation-trim</a></td>
<td>规定是否对标点字符进行修剪。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/css3-pr-text-align-last.html" target="_blank">text-align-last</a></td>
<td>设置如何对齐最后一行或紧挨着强制换行符之前的行。</td>
<td>3</td>
</tr>

<tr>
<td><a href="css3-pr-text-emphasis.html" target="_blank">text-emphasis</a></td>
<td>向元素的文本应用重点标记以及重点标记的前景色。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/css3-pr-text-justify.html" title="CSS3 text-justify 属性">text-justify</a></td>
<td>规定当  text-align 设置为 "justify" 时所使用的对齐方法。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/css3-pr-text-outline.html" title="CSS3 text-outline 属性">text-outline</a></td>
<td>规定文本的轮廓。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/css3-pr-text-overflow.html" title="CSS3 text-overflow 属性">text-overflow</a></td>
<td>规定当文本溢出包含元素时发生的事情。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/css3-pr-text-shadow.html" title="CSS3 text-shadow 属性">text-shadow</a></td>
<td>向文本添加阴影。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/css3-pr-text-wrap.html" title="CSS3 text-wrap 属性">text-wrap</a></td>
<td>规定文本的换行规则。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/css3-pr-word-break.html" title="CSS3 word-break 属性">word-break</a></td>
<td>规定非中日韩文本的换行规则。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/css3-pr-word-wrap.html" title="CSS3 word-wrap 属性">word-wrap</a></td>
<td>允许对长的不可分割的单词进行分割并换行到下一行。</td>
<td>3</td>
</tr>
</tbody></table>

## 七、CSS3字体
语法
```html
<style> 
@font-face
{
    font-family: myFirstFont;
    src: url(sansation_light.woff);
}
 
div
{
    font-family:myFirstFont;
}
</style>
```
**使用粗体文本**
```css
@font-face
{
    font-family: myFirstFont;
    src: url(sansation_bold.woff);
    font-weight:bold;
}
```
**CSS3字体描述**
<table class="reference">

<tbody><tr>
<th style="width:20%">描述符</th>
<th style="width:25%">值</th>
<th>描述</th>
</tr>

<tr>
<td>font-family</td>
<td><i>name</i></td>
<td>必需。规定字体的名称。</td>
</tr>

<tr>
<td>src</td>
<td><i>URL</i></td>
<td>必需。定义字体文件的 URL。</td>
</tr>

<tr>
<td>font-stretch</td>
<td>
	<ul>
	<li>normal</li>
	<li>condensed</li>
	<li>ultra-condensed</li>
	<li>extra-condensed</li>
	<li>semi-condensed</li>
	<li>expanded</li>
	<li>semi-expanded</li>
	<li>extra-expanded</li>
	<li>ultra-expanded</li>
	</ul>
</td>
<td>可选。定义如何拉伸字体。默认是 "normal"。</td>
</tr>

<tr>
<td>font-style</td>
<td>
	<ul>
	<li>normal</li>
	<li>italic</li>
	<li>oblique</li>
	</ul>
</td>
<td>可选。定义字体的样式。默认是 "normal"。</td>
</tr>

<tr>
<td>font-weight</td>
<td>
	<ul>
	<li>normal</li>
	<li>bold</li>
	<li>100</li>
	<li>200</li>
	<li>300</li>
	<li>400</li>
	<li>500</li>
	<li>600</li>
	<li>700</li>
	<li>800</li>
	<li>900</li>
	</ul>
</td>
<td>可选。定义字体的粗细。默认是 "normal"。</td>
</tr>

<tr>
<td>unicode-range</td>
<td><i>unicode-range</i></td>
<td>可选。定义字体支持的 UNICODE 字符范围。默认是 "U+0-10FFFF"。</td>
</tr>
</tbody></table>
## 八、CSS3 2D、3D转换、过渡、动画、多列
略
## 九、CSS3 多列
CSS3 有以下几个多列属性:

* column-count 属性指定了需要分割的列数。
* column-gap 属性指定了列与列间的间隙。
* column-rule-style  属性指定了列与列间的边框样式
* column-rule-width 属性指定了两列的边框厚度
* column-rule-color 属性指定了两列的边框颜色
* column-rule 属性是 column-rule-* 所有属性的简写。
* column-span 以下实例指定 \<h2> 元素跨越所有列
* column-width 属性指定了列的宽度。
* columns 设置 column-width 和 column-count 的简写
示列:
```css
//以下实例将 <div> 元素中的文本分为 3 列
div {
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    -moz-column-count: 3; /* Firefox */
    column-count: 3;
}
//以下实例指定了列与列间的间隙为 40 像素
div {
    -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
    -moz-column-gap: 40px; /* Firefox */
    column-gap: 40px;
}
//指定了列与列间的边框样式
div {
    -webkit-column-rule-style: solid; /* Chrome, Safari, Opera */
    -moz-column-rule-style: solid; /* Firefox */
    column-rule-style: solid;
}
//指定了两列的边框厚度
div {
    -webkit-column-rule-width: 1px; /* Chrome, Safari, Opera */
    -moz-column-rule-width: 1px; /* Firefox */
    column-rule-width: 1px;
}
//指定了两列的边框颜色
div {
    -webkit-column-rule-color: lightblue; /* Chrome, Safari, Opera */
    -moz-column-rule-color: lightblue; /* Firefox */
    column-rule-color: lightblue;
}
//以下实例设置了列直接的边框的厚度，样式及颜色
div {
    -webkit-column-rule: 1px solid lightblue; /* Chrome, Safari, Opera */
    -moz-column-rule: 1px solid lightblue; /* Firefox */
    column-rule: 1px solid lightblue;
}
//以下实例指定 <h2> 元素跨越所有列
h2 {
    -webkit-column-span: all; /* Chrome, Safari, Opera */
    column-span: all;
}
//指定了列的宽度。
div {
    -webkit-column-width: 100px; /* Chrome, Safari, Opera */
    column-width: 100px;
}
```
## 十、CSS3用户界面
在 CSS3 中, 增加了一些新的用户界面特性来调整元素尺寸，框尺寸和外边框。
* resize 调整尺寸(Resizing)
* box-sizing 允许您以确切的方式定义适应某个区域的具体内容。
* outline-offset 对轮廓进行偏移，并在超出边框边
缘的位置绘制轮廓

轮廓与边框有两点不同：
* 轮廓不占用空间
* 轮廓可能是非矩形

这个 div 在边框之外 15 像素处有一个轮廓。
```css
//由用户指定一个div元素尺寸大小
div
{
    resize:both;
    overflow:auto;
}
//规定两个并排的带边框方框
div
{
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    width:50%;
    float:left;
}
//规定边框边缘之外 15 像素处的轮廓
div
{
    border:2px solid black;
    outline:2px solid red;
    outline-offset:15px;
}

```
## 十一、CSS图片
**圆角图片**
```css
img {
    border-radius: 8px;
}
```
**椭圆图片**
```css
img {
    border-radius: 50%;
}
```
**缩略图**
我们使用 border 属性来创建缩略图。
```css
img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
}

<img src="paris.jpg" alt="Paris">
```
```css
a {
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    transition: 0.3s;
}

a:hover {
    box-shadow: 0 0 2px 1px rgba
    (0, 140, 186, 0.5);
}

<a href="paris.jpg">
  <img src="paris.jpg" alt="Paris">
</a>
```
**响应式图片**
```css
img {
    max-width: 100%;
    height: auto;
}
```
**图片滤镜**
修改所有图片的颜色为黑白 (100% 灰度)
```css
img {
    -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
    filter: grayscale(100%);
}
```
## 十二、CSS3框大小
**不使用 CSS3 box-sizing 属性**
默认情况下，元素的宽度与高度计算方式如下
**width(宽) + padding(内边距) + border(边框) = 元素实际宽度**

**height(高) + padding(内边距) + border(边框) = 元素实际高度**

这就意味着我们在设置元素的 width/height 时，元素真实展示的高度与宽度会更大(因为元素的边框与内边距也会计算在 width/height 中)。
<style>
 #div1 {     
   width: 300px;     
   height: 100px;     
   border: 1px solid blue;     
   box-sizing: content-box; 
   }  
 #div2 {     
  width: 300px;
  height: 100px;         
  padding: 50px;     
  border: 1px solid red;}
 </style>
<div id="div1">这个是个较小的框 (width 为 300px ，height 为 100px)。</div>
<br>
<div id="div2">这个是个较大的框 (width 为 300px ，height 为 100px)。</div>

```css
.div1 {
    width: 300px;
    height: 100px;
    border: 1px solid blue; 
}

.div2 {
    width: 300px;
    height: 100px;
    padding: 50px;
    border: 1px solid red;
}
```
使用这种方式如果想要获得较小的那个框且包含内边距，就不得不考虑到边框和内边距的宽度。

CSS3 的 box-sizing 属性很好的解决了这个问题。

**使用 CSS3 box-sizing 属性**
CSS3 box-sizing 属性在一个元素的 width 和 height 中包含 padding(内边距) 和 border(边框)。
如果在元素上设置了 box-sizing: border-box; 则 padding(内边距) 和 border(边框) 也包含在 width 和 height 中。
<div class='div1'>两个 div 现在是一样大小的!</div>

<div class='div2'>两个 div 现在是一样大小的!</div>
<style>
.div1 {
    width: 300px;
    height: 100px;
    border: 1px solid blue;
    box-sizing: border-box;
}
.div2 {
    width: 300px;
    height: 100px;
    padding: 50px;
    border: 1px solid red;
    box-sizing: border-box;
}
</style>
从结果上看 box-sizing: border-box; 效果更好，也正是很多开发人员需要的效果。

```css
.div1 {
    width: 300px;
    height: 100px;
    border: 1px solid blue;
    box-sizing: border-box;
}
.div2 {
    width: 300px;
    height: 100px;
    padding: 50px;
    border: 1px solid red;
    box-sizing: border-box;
}
```
所有元素使用 box-sizing 是比较推荐的：
```css
* {
    box-sizing: border-box;
}
```
## 十三、CSS3 弹性盒子(Flex Box)
**CSS3 弹性盒子内容**
弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。

弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。

弹性容器内包含了一个或多个弹性子元素。

注意： 弹性容器外及弹性子元素内是正常渲染的。弹性盒子只定义了弹性子元素如何在弹性容器内布局。

弹性子元素通常在弹性盒子内一行显示。默认情况每个容器只有一行。

以下元素展示了弹性子元素在一行内显示，从左到右:
<div class="flex-container">
  <div class="flex-item">flex item 1</div>
  <div class="flex-item">flex item 2</div>
  <div class="flex-item">flex item 3</div> 
</div>
<style>
.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
.flex-item {
    background-color: cornflowerblue;
    width: 100px;
    height: 100px;
    margin: 10px;
}
</style>
```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
.flex-item {
    background-color: cornflowerblue;
    width: 100px;
    height: 100px;
    margin: 10px;
}
</style>
</head>
<body>
 
<div class="flex-container">
  <div class="flex-item">flex item 1</div>
  <div class="flex-item">flex item 2</div>
  <div class="flex-item">flex item 3</div> 
</div>
 
</body>
</html>
```
当然我们可以修改排列方式。

如果我们设置 direction 属性为 rtl (right-to-left),弹性子元素的排列方式也会改变，页面布局也跟着改变:
```css
body {
    direction: rtl;
}
 
.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
 
.flex-item {
    background-color: cornflowerblue;
    width: 100px;
    height: 100px;
    margin: 10px;
}
```
**flex-direction**
flex-direction 属性指定了弹性子元素在父容器中的位置。
```css
flex-direction: row | row-reverse | column | column-reverse
```
flex-direction的值有:

* row：横向从左到右排列（左对齐），默认的排列方式。
* row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
* column：纵向排列。
* column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。
以下实例演示了 row-reverse 的使用:
```css
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
```
以下实例演示了 column 的使用:
```css
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
```
**justify-content 属性**
内容对齐（justify-content）属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐。
justify-content 语法如下：
```css
justify-content: flex-start | flex-end | center | space-between | space-around
```
各个值解析:

* flex-start：
弹性项目向行头紧挨着填充。这个是默认值。第一个弹性项的main-start外边距边线被放置在该行的main-start边线，而后续弹性项依次平齐摆放。

* flex-end：
弹性项目向行尾紧挨着填充。第一个弹性项的main-end外边距边线被放置在该行的main-end边线，而后续弹性项依次平齐摆放。

* center：
弹性项目居中紧挨着填充。（如果剩余的自由空间是负的，则弹性项目将在两个方向上同时溢出）。

* space-between：
弹性项目平均分布在该行上。如果剩余空间为负或者只有一个弹性项，则该值等同于flex-start。否则，第1个弹性项的外边距和行的main-start边线对齐，而最后1个弹性项的外边距和行的main-end边线对齐，然后剩余的弹性项分布在该行上，相邻项目的间隔相等。

* space-around：
弹性项目平均分布在该行上，两边留有一半的间隔空间。如果剩余空间为负或者只有一个弹性项，则该值等同于center。否则，弹性项目沿该行分布，且彼此间隔相等（比如是20px），同时首尾两边和弹性容器之间留有一半的间隔（1/2*20px=10px）。
效果图展示：
<img src='assets/flex1.jpg' alt='justify-content'/>
**align-items 属性**
align-items 设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。
```html
align-items: flex-start | flex-end | center | baseline | stretch
```
各个值解析:

* flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
* flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
* center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
* baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
* stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。
**flex-wrap 属性**
flex-wrap 属性用于指定弹性盒子的子元素换行方式。
```css
flex-wrap: nowrap|wrap|wrap-reverse|initial|inherit;
```
各个值解析:

* nowrap - 默认， 弹性容器为单行。该情况下弹性子项可能会溢出容器。
* wrap - 弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行
* wrap-reverse -反转 wrap 排列。

**align-content 属性**
align-content 属性用于修改 flex-wrap 属性的行为。类似于 align-items, 但它不是设置弹性子元素的对齐，而是设置各个行的对齐。
```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch
```
各个值解析:

* stretch - 默认。各行将会伸展以占用剩余的空间。
* flex-start - 各行向弹性盒容器的起始位置堆叠。
* flex-end - 各行向弹性盒容器的结束位置堆叠。
* center -各行向弹性盒容器的中间位置堆叠。
* space-between -各行在弹性盒容器中平均分布。
* space-around - 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。

**弹性子元素属性**
排序
语法
```css
order: 
```
各个值解析:

* \<integer>：用整数值来定义排列顺序，数值小的排在前面。可以为负值。
```css
.flex-item {
    background-color: cornflowerblue;
    width: 100px;
    height: 100px;
    margin: 10px;
}
 
.first {
    -webkit-order: -1;
    order: -1;
}
```
**对齐**
设置"margin"值为"auto"值，自动获取弹性容器中剩余的空间。所以设置垂直方向margin值为"auto"，可以使弹性子元素在弹性容器的两上轴方向都完全居中。

以下实例在第一个弹性子元素上设置了 margin-right: auto; 。 它将剩余的空间放置在元素的右侧：
```css
.flex-item {
    background-color: cornflowerblue;
    width: 75px;
    height: 75px;
    margin: 10px;
}
 
.flex-item:first-child {
    margin-right: auto;
}
```
**完美的居中**
以下实例将完美解决我们平时碰到的居中问题。

使用弹性盒子，居中变的很简单，只想要设置 margin: auto; 可以使得弹性子元素在两上轴方向上完全居中:
```css
.flex-item {
    background-color: cornflowerblue;
    width: 75px;
    height: 75px;
    margin: auto;
}
```
**align-self**
align-self 属性用于设置弹性元素自身在侧轴（纵轴）方向上的对齐方式。
```css
align-self: auto | flex-start | flex-end | center | baseline | stretch
```
各个值解析:

* auto：如果'align-self'的值为'auto'，则其计算值为元素的父元素的'align-items'值，如果其没有父元素，则计算值为'stretch'。
* flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
* flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
* center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
* baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
* stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。

**flex**
flex 属性用于指定弹性子元素如何分配空间。
```css
flex: auto | initial | none | inherit |  [ flex-grow ] || [ flex-shrink ] || [ flex-basis ]
```
各个值解析:

* auto: 计算值为 1 1 auto
* initial: 计算值为 0 1 auto
* none：计算值为 0 0 auto
* inherit：从父元素继承
* [ flex-grow ]：定义弹性盒子元素的扩展比率。
* [ flex-shrink ]：定义弹性盒子元素的收缩比率。
* [ flex-basis ]：定义弹性盒子元素的默认基准值。

**==提示==**
块元素垂直居中问题采用 flex 解决。
行内元素垂直居中问题解决如下：
1）单行
该元素 css 属性 line-height 的值与该元素的父级元素 css 属性 height 一致即可。

2）多行
设置该元素 css 属性：display: table-cell; vertical-align: middle;，还需设置该元素的父级元素 css 属性：display: table;。
## 十四、CSS3多媒体查询
**CSS3 多媒体查询**
CSS3 的多媒体查询继承了 CSS2 多媒体类型的所有思想： 取代了查找设备的类型，CSS3 根据设置自适应显示。
媒体查询可用于检测很多事情，例如：
* viewport(视窗) 的宽度与高度
* 设备的宽度与高度
* 朝向 (智能手机横屏，竖屏) 。
* 分辨率

目前很多针对苹果手机，Android 手机，平板等设备都会使用到多媒体查询。

**多媒体查询语法**
多媒体查询由多种媒体组成，可以包含一个或多个表达式，表达式根据条件是否成立返回 true 或 false。
```css
@media not|only mediatype and (expressions) {
    CSS 代码...;
}
```
除非你使用了 not 或 only 操作符，否则所有的样式会适应在所有设备上显示效果。

* **not**: not是用来排除掉某些特定的设备的，比如 @media not print（非打印设备）。

* **only**: 用来定某种特别的媒体类型。对于支持Media Queries的移动设备来说，如果存在only关键字，移动设备的Web浏览器会忽略only关键字并直接根据后面的表达式应用样式文件。对于不支持Media Queries的设备但能够读取Media Type类型的Web浏览器，遇到only关键字时会忽略这个样式文件。

* **all**: 所有设备，这个应该经常看到。
你也可以在不同的媒体上使用不同的样式文件：
```css
<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
```
**CSS3 多媒体类型**
<table class="reference">
  <tbody><tr>
    <th style="width:25%">值</th>
    <th>描述</th>
  </tr>  
  <tr>
    <td>all</td>
    <td>用于所有多媒体类型设备</td>
  </tr>
  <tr>
    <td>print</td>
    <td>用于打印机</td>
  </tr>
    <tr>
    <td>screen</td>
    <td>用于电脑屏幕，平板，智能手机等。</td>
    </tr>
  <tr>
    <td>speech</td>
    <td>用于屏幕阅读器</td>
  </tr>
  </tbody></table>

**多媒体查询简单实例**
使用多媒体查询可以在指定的设备上使用对应的样式替代原有的样式。
以下实例中在屏幕可视窗口尺寸小于 480 像素的设备上修改背景颜色:
```css
media screen and (max-width: 480px) {
    body {
        background-color: lightgreen;
    }
}
```
以下实例在屏幕可视窗口尺寸大于 480 像素时将菜单浮动到页面左侧：
```css
@media screen and (min-width: 480px) {
    #leftsidebar {width: 200px; float: left;}
    #main {margin-left:216px;}
}
```
```css
@media screen and (max-width: 699px) and (min-width: 520px) {
    ul li a {
        padding-left: 30px;
        background: url(email-icon.png) left center no-repeat;
    }
}
```

**大于 1151px 宽度 - 添加图标**
当浏览器的宽度大于 1001px 时，会在人名前添加图标。

实例中，我们没有编写额外的查询块，我们可以在已有的查询媒体后使用逗号分隔来添加其他媒体查询 (类似 OR 操作符):

```css
@media screen and (max-width: 699px) and (min-width: 520px), (min-width: 1151px) {
    ul li a {
        padding-left: 30px;
        background: url(email-icon.png) left center no-repeat;
    }
}
```