<p align='center'>Bootstrap教程</p>
=

[toc]

## 1、Bootstrap4网格系统
Bootstrap 提供了一套响应式、移动设备优先的流式网格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多 12 列。
Bootstrap 4 的网格系统是响应式的，列会根据屏幕大小自动重新排列。
**网格类**
Bootstrap 4 网格系统有以下 5 个类:
* .col- 针对所有设备
* .col-sm- 平板 - 屏幕宽度等于或大于 576px
* .col-md- 桌面显示器 - 屏幕宽度等于或大于 768px)
* .col-lg- 大桌面显示器 - 屏幕宽度等于或大于 992px)
* .col-xl- 超大桌面显示器 - 屏幕宽度等于或大于 1200px)

**网格系统规则**
Bootstrap4 网格系统规则:
* 网格每一行需要放在设置了 .container (固定宽度) 或 .container-fluid (全屏宽度) 类的容器中，这样就可以自动设置一些外边距与内边距。
* 使用行来创建水平的列组。
* 内容需要放置在列中，并且只有列可以是行的直接子节点。
* 预定义的类如 .row 和 .col-sm-4 可用于快速制作网格布局。
* 列通过填充创建列内容之间的间隙。 这个间隙是通过 .rows 类上的负边距设置第一行和最后一列的偏移。
* 网格列是通过跨越指定的 12 个列来创建。 例如，设置三个相等的列，需要使用用三个.col-sm-4 来设置。
* Bootstrap 3 和 Bootstrap 4 最大的区别在于 Bootstrap 4 现在使用 flexbox（弹性盒子） 而不是浮动。 Flexbox 的一大优势是，没有指定宽度的网格列将自动设置为等宽与等高列 。
下表总结了 Bootstrap 网格系统如何在不同设备上工作的：
<table class="reference">
  <thead>
    <tr>
      <th></th>
      <th class="text-center">
        超小设备<br>
        <small>&lt;576px</small>
      </th>
      <th class="text-center">
        平板<br>
        <small>≥576px</small>
      </th>
      <th class="text-center">
        桌面显示器<br>
        <small>≥768px</small>
      </th>
      <th class="text-center">
        大桌面显示器<br>
        <small>≥992px</small>
      </th>
      <th class="text-center">
        超大桌面显示器<br>
        <small>≥1200px</small>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="text-nowrap" scope="row">容器最大宽度</th>
      <td>None (auto)</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">类前缀</th>
      <td><code>.col-</code></td>
      <td><code>.col-sm-</code></td>
      <td><code>.col-md-</code></td>
      <td><code>.col-lg-</code></td>
      <td><code>.col-xl-</code></td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">列数量和</th>
      <td colspan="5">12</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">间隙宽度</th>
      <td colspan="5">30px
（一个列的每边分别 15px）</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">可嵌套</th>
      <td colspan="5">Yes</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">列排序</th>
      <td colspan="5">Yes</td>
    </tr>
  </tbody>
</table>

**Bootstrap 4 网格的基本结构**
以下代码为 Bootstrap 4 网格的基本结构:
```html
<!-- 第一个例子：控制列的宽度及在不同的设备上如何显示 -->
<div class="row">
  <div class="col-*-*"></div>
</div>
<div class="row">
  <div class="col-*-*"></div>
  <div class="col-*-*"></div>
  <div class="col-*-*"></div>
</div>
 
<!-- 第二个例子：或让 Bootstrap 者自动处理布局 -->
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```
**等宽响应式列**
以下实例演示了如何在平板及更大屏幕上创建等宽度的响应式列。 *在移动设备上，即屏幕宽度小于 576px 时，四个列将会上下堆叠排版:*
```html
<div class="col-sm-3">.col-sm-3</div>
<div class="col-sm-3">.col-sm-3</div>
<div class="col-sm-3">.col-sm-3</div>
<div class="col-sm-3">.col-sm-3</div>
````
**不等宽响应式列**
以下实例演示了在平板及更大屏幕上创建不等宽度的响应式列。 在移动设备上，即屏幕宽度小于 576px 时，两个列将会上下堆叠排版:
```html
<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-8">.col-sm-8</div>
</div>
```
**平板和桌面端**
以下实例演示了在桌面设备的显示器上两个列的宽度各占 50%，如果在平板端则左边的宽度为 25%，右边的宽度为 75%, 在移动手机等小型设备上会堆叠显示。


**平板、桌面、大桌面显示器、超大桌面显示器**
以下实例在平板、桌面、大桌面显示器、超大桌面显示器的宽度比例为分别为：25%/75%、50%/50%、33.33%/66.67%、16.67/83.33%, 在移动手机等小型设备上会堆叠显示。

**偏移列**
偏移列通过 offset-\*-\* 类来设置。第一个星号( * )可以是 sm、md、lg、xl，表示屏幕设备类型，第二个星号( * )可以是 1 到 11 的数字。
为了在大屏幕显示器上使用偏移，请使用 .offset-md-* 类。这些类会把一个列的左外边距（margin）增加 * 列，其中 * 范围是从 1 到 11。
例如：.offset-md-4 是把.col-md-4 往右移了四列格。


## 2、Bootstrap4 文字排版
**Bootstrap 4 默认设置**
Bootstrap 4 默认的 font-size 为 16px, line-height 为 1.5。
默认的 font-family 为 "Helvetica Neue", Helvetica, Arial, sans-serif。
此外，所有的 \<p> 元素 margin-top: 0 、 margin-bottom: 1rem (16px)。
**\<h1> - \<h6>**
Bootstrap 中定义了所有的 HTML 标题（h1 到 h6）的样式。请看下面的实例：
```html
<div class="container">
  <h1>h1 Bootstrap 标题 (2.5rem = 40px)</h1>
  <h2>h2 Bootstrap 标题 (2rem = 32px)</h2>
  <h3>h3 Bootstrap 标题 (1.75rem = 28px)</h3>
  <h4>h4 Bootstrap 标题 (1.5rem = 24px)</h4>
  <h5>h5 Bootstrap 标题 (1.25rem = 20px)</h5>
  <h6>h6 Bootstrap 标题 (1rem = 16px)</h6>
</div>
```
**Display 标题类**
Bootstrap 还提供了四个 Display 类来控制标题的样式: .display-1, .display-2, .display-3, .display-4。
```html
<div class="container">
  <h1>Display 标题</h1>
  <h1 class="display-1">Display 1</h1>
  <h1 class="display-2">Display 2</h1>
  <h1 class="display-3">Display 3</h1>
  <h1 class="display-4">Display 4</h1>
</div>
```
**\<small>**
在 Bootstrap 4 中 HTML \<small> 元素用于创建字号更小的颜色更浅的文本:
```html
<div class="container">
  <h1>更小文本标题</h1>     
  <h1>h1 标题 <small>副标题</small></h1>
  <h2>h2 标题 <small>副标题</small></h2>
  <h3>h3 标题 <small>副标题</small></h3>
  <h4>h4 标题 <small>副标题</small></h4>
  <h5>h5 标题 <small>副标题</small></h5>
  <h6>h6 标题 <small>副标题</small></h6>
</div>
```
**\<mark>**
Bootstrap 4 定义 \<mark> 为黄色背景及有一定的内边距:
```css
<div class="container">
  <h1>高亮文本</h1>    
  使用 mark 元素来 <mark>高亮</mark> 文本。
</div>
```
**\<abbr>**
Bootstrap 4 定义 HTML \<abbr> 元素的样式为显示在文本底部的一条虚线边框:
```html
<div class="container">
  <h1>Abbreviations</h1>
  The abbr element is used to mark up an abbreviation or acronym:
  The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.
</div>
```
**\<blockquote>**
对于引用的内容可以在 \<blockquote> 上添加 .blockquote 类 :
```html
<div class="container">
  <h1>Blockquotes</h1>
  The blockquote element is used to present content from another source:
  <blockquote class="blockquote">
    For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
    <footer class="blockquote-footer">From WWF's website</footer>
  </blockquote>
</div>
```
**\<dl>**
Bootstrap 4 定义 HTML \<dl> 元素的样式如下:
```html
<div class="container">
  <h1>Description Lists</h1>    
  The dl element indicates a description list:
  <dl>
    <dt>Coffee</dt>
    <dd>- black hot drink</dd>
    <dt>Milk</dt>
    <dd>- white cold drink</dd>
  </dl>     
</div>
```
**\<code>**
Bootstrap 4 定义 HTML \<code> 元素的样式如下:
```html
<div class="container">
  <h1>代码片段</h1>
  可以将一些代码元素放到 code 元素里面:
  以下 HTML 元素: <code>span</code>, <code>section</code>, 和 <code>div</code> 用于定义部分文档内容。
</div>
```
**\<kbd>**
Bootstrap 4 定义 HTML \<kbd> 元素的样式如下:
```html
<div class="container">
  <h1>Keyboard Inputs</h1>
  To indicate input that is typically entered via the keyboard, use the kbd element:
  Use <kbd>ctrl + p</kbd> to open the Print dialog box.
</div>
```
**\<pre>**
Bootstrap 4 定义 HTML \<pre> 元素的样式如下:
```html
<div class="container">
<h1>Multiple Code Lines</h1>
For multiple lines of code, use the pre element:
<pre>
Text in a pre element
is displayed in a fixed-width
font, and it preserves
both      spaces and
line breaks.
</pre>
</div>
```
**更多排版类**
下表提供了 Bootstrap4 更多排版类的实例：
<table class="reference">
  <tbody><tr>
    <th style="width:25%;">类名</th>
    <th style="width:63%;">描述</th>
  </tr>
  <tr>
    <td><span class="marked">.font-weight-bold</span></td>
    <td>加粗文本</td>
  </tr>
  <tr>
    <td><span class="marked">.font-weight-normal</span></td>
    <td>普通文本</td>
  </tr>
  <tr>
    <td><span class="marked">.font-weight-light</span></td>
    <td>更细的文本</td>
  </tr>
  <tr>
    <td><span class="marked">.font-italic</span></td>
    <td>斜体文本</td>
  </tr>
  <tr>
    <td><span class="marked">.lead</span></td>
    <td>让段落更突出</td>
  </tr>
  <tr>
    <td><span class="marked">.small</span></td>
    <td>指定更小文本 (为父元素的 85% )</td>
  </tr>
  <tr>
    <td><span class="marked">.text-left</span></td>
    <td>左对齐</td>
  </tr>
  <tr>
    <td><span class="marked">.text-center</span></td>
    <td>居中</td>
  </tr>
  <tr>
    <td><span class="marked">.text-right</span></td>
    <td>右对齐</td>
  </tr>
  <tr>
    <td><span class="marked">.text-justify</span></td>
    <td>设定文本对齐,段落中超出屏幕部分文字自动换行</td>
  </tr>
  <tr>
    <td><span class="marked">.text-nowrap</span></td>
    <td>段落中超出屏幕部分不换行</td>
  </tr>
  <tr>
    <td><span class="marked">.text-lowercase</span></td>
    <td>设定文本小写</td>
  </tr>
  <tr>
    <td><span class="marked">.text-uppercase</span></td>
    <td>设定文本大写</td>
  </tr>
  <tr>
    <td><span class="marked">.text-capitalize</span></td>
    <td>设定单词首字母大写</td>
  </tr>
  <tr>
    <td><span class="marked">.initialism</span></td>
    <td>显示在 &lt;abbr&gt; 元素中的文本以小号字体展示，且可以将小写字母转换为大写字母</td>
  </tr>
  <tr>
    <td><span class="marked">.list-unstyled</span></td>
   <td>移除默认的列表样式，列表项中左对齐 ( &lt;ul&gt; 和 &lt;ol&gt; 中)。 这个类仅适用于直接子列表项  
  (如果需要移除嵌套的列表项，你需要在嵌套的列表中使用该样式)</td>
  </tr>
  <tr>
    <td><span class="marked">.list-inline</span></td>
    <td>将所有列表项放置同一行</td>
  </tr>
  <tr>
    <td><span class="marked">.pre-scrollable</span></td>
    <td>使 &lt;pre&gt; 元素可滚动，代码块区域最大高度为340px,一旦超出这个高度,就会在Y轴出现滚动条</td>
  </tr>
</tbody></table>
##3、Bootstrap4 颜色
Bootstrap 4 提供了一些有代表意义的颜色类：.text-muted, .text-primary, .text-success, .text-info, .text-warning, .text-danger, .text-secondary, .text-white, .text-dark and .text-light:

```html
<div class="container">
  <h2>代表指定意义的文本颜色</h2>
   class="text-muted">柔和的文本。
   class="text-primary">重要的文本。
   class="text-success">执行成功的文本。
   class="text-info">代表一些提示信息的文本。
   class="text-warning">警告文本。
   class="text-danger">危险操作文本。
   class="text-secondary">副标题。
   class="text-dark">深灰色文字。
   class="text-light">浅灰色文本（白色背景上看不清楚）。
   class="text-white">白色文本（白色背景上看不清楚）。
</div>
```
**在链接中使用**
```html
<div class="container">
  <h2>文本颜色</h2>
  鼠标移动到链接。
  <a href="#" class="text-muted">柔和的链接。</a>
  <a href="#" class="text-primary">主要链接。</a>
  <a href="#" class="text-success">成功链接。</a>
  <a href="#" class="text-info">信息文本链接。</a>
  <a href="#" class="text-warning">警告链接。</a>
  <a href="#" class="text-danger">危险链接。</a>
  <a href="#" class="text-secondary">副标题链接。</a>
  <a href="#" class="text-dark">深灰色链接。</a>
  <a href="#" class="text-light">浅灰色链接。</a>
</div>
```
**背景颜色**
提供背景颜色的类有: .bg-primary, .bg-success, .bg-info, .bg-warning, .bg-danger, .bg-secondary, .bg-dark 和 .bg-light。

注意背景颜色不会设置文本的颜色，在一些实例中你需要与 .text-* 类一起使用。
```html
<div class="container">
  <h2>背景颜色</h2>
  <p class="bg-primary text-white">重要的背景颜色。
  <p class="bg-success text-white">执行成功背景颜色。
  <p class="bg-info text-white">信息提示背景颜色。
  <p class="bg-warning text-white">警告背景颜色
  <p class="bg-danger text-white">危险背景颜色。
  <p class="bg-secondary text-white">副标题背景颜色。
  <p class="bg-dark text-white">深灰背景颜色。
  <p class="bg-light text-dark">浅灰背景颜色。
</div>
```
## 4、Bootstrap4 表格
Bootstrap4 基础表格
Bootstrap4 通过 .table 类来设置基础表格的样式，实例如下:
```html
<table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
</table>
```
**条纹表格**
通过添加 .table-striped 类，您将在 \<tbody> 内的行上看到条纹，如下面的实例所示：
```html
<table class="table table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
</table>
```
**带边框表格**
.table-bordered 类可以为表格添加边框
```html
<table class="table table-bordered">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
</table>
```
**鼠标悬停状态表格**
.table-hover 类可以为表格的每一行添加鼠标悬停效果（灰色背景）

**黑色背景表格**
.table-dark 类可以为表格添加黑色背景

**黑色条纹表格**
联合使用 .table-dark 和 .table-striped 类可以创建黑色的条纹表格

**鼠标悬停效果 - 黑色背景表格**
联合使用 .table-dark 和 .table-hover 类可以设置黑色背景表格的鼠标悬停效果

**指定意义的颜色类**
通过指定意义的颜色类可以为表格的行或者单元格设置颜色

下表列出了表格颜色类的说明:
<table class="reference">
<thead>
<tr>
  <th>类名</th>
  <th>描述</th>
</tr>
</thead>
<tbody>
<tr>
  <td><span class="marked">.table-primary</span></td>
  <td>蓝色: 指定这是一个重要的操作</td>
</tr>
<tr>
  <td><span class="marked">.table-success</span></td>
  <td>绿色: 指定这是一个允许执行的操作</td>
</tr>
<tr>
  <td><span class="marked">.table-danger</span></td>
  <td>红色: 指定这是可以危险的操作</td>
</tr>
<tr>
  <td><span class="marked">.table-info</span></td>
  <td>浅蓝色: 表示内容已变更</td>
</tr>
<tr>
  <td><span class="marked">.table-warning</span></td>
  <td>橘色: 表示需要注意的操作</td>
</tr>
<tr>
  <td><span class="marked">.table-active</span></td>
  <td>灰色: 用于鼠标悬停效果</td>
</tr>
<tr>
  <td><span class="marked">.table-secondary</span></td>
  <td>灰色: 表示内容不怎么重要</td>
</tr>
<tr>
  <td><span class="marked">.table-light</span></td>
  <td>浅灰色，可以是表格行的背景</td>
</tr>
<tr>
  <td><span class="marked">.table-dark</span></td>
  <td>深灰色，可以是表格行的背景</td>
</tr>
</tbody>
</table>
<hr>

**表头颜色**
在 Bootstrap v4.0.0-beta.2 中.thead-dark 类用于给表头添加黑色背景， .thead-light 类用于给表头添加灰色背景:
*在 Bootstrap v4.0.0-beta 这个版本中，.thead-inverse 类用于给表头添加黑色背景，.thead-default 类用于给表头添加灰色背景。*

**较小的表格**
.table-sm 类用于通过减少内边距来设置较小的表格

**响应式表格**
.table-responsive 类用于创建响应式表格：在屏幕宽度小于 992px 时会创建水平滚动条，如果可视区域宽度大于 992px 则显示不同效果（没有滚动条）

你可以通过以下类设定在指定屏幕宽度下显示滚动条：
<table class="reference">
    <thead>
      <tr>
        <th>类名</th>
        <th>屏幕宽度</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="marked">.table-responsive-sm</span></td>
        <td>&lt; 576px</td>
      </tr>      
      <tr>
        <td><span class="marked">.table-responsive-md</span></td>
        <td>&lt; 768px</td>
      </tr>      
      <tr>
        <td><span class="marked">.table-responsive-lg</span></td>
        <td>&lt; 992px</td>
      </tr>      
      <tr>
        <td><span class="marked">.table-responsive-xl</span></td>
        <td>&lt; 1200px</td>
      </tr>      
    </tbody>
  </table>

```html
<div class="table-responsive-sm">
  <table class="table">
    ...
  </table>
</div>
```
## 5、Bootstrap4 图像形状
**圆角图片**
.rounded 类可以让图片显示圆角效果：
```html
<img src="cinqueterre.jpg" class="rounded" alt="Cinque Terre">
```
**椭圆图片**
.rounded-circle 类可以设置椭圆形图片:
```html
<img src="cinqueterre.jpg" class="rounded-circle" alt="Cinque Terre">
```
**缩略图**
.img-thumbnail 类用于设置图片缩略图(图片有边框):
```html
<img src="cinqueterre.jpg" class="img-thumbnail" alt="Cinque Terre">
```
**图片对齐方式**
使用 .float-right 类来设置图片右对齐，使用 .float-left 类设置图片左对齐:
```html
<img src="paris.jpg" class="float-left"> 
<img src="cinqueterre.jpg" class="float-right">
```
**响应式图片**
图像有各种各样的尺寸，我们需要根据屏幕的大小自动适应。
我们可以通过在 \<img> 标签中添加 .img-fluid 类来设置响应式图片。
.img-fluid 类设置了 max-width: 100%; 、 height: auto; :
```html
<img class="img-fluid" src="img_chania.jpg" alt="Chania">
```
## 6、Bootstrap4 Jumbotron
Jumbotron（超大屏幕）会创建一个大的灰色背景框，里面可以设置一些特殊的内容和信息。
提示: Jumbotron 里头可以放一些 HTML标签，也可以是 Bootstrap 的元素。
我们可以通过在 \<div> 元素 中添加 .jumbotron 类来创建 jumbotron:
```html
<div class="jumbotron">
  <h1>菜鸟教程</h1> 
  学的不仅是技术，更是梦想！！！
</div>
```
**全屏幕的 Jumbotron**
如果你想创建一个没有圆角的全屏幕，可以在 .jumbotron-fluid 类里头的 div添加 .container 或 .container-fluid 类来实现:
```html
<div class="jumbotron jumbotron-fluid">
  <div class="container">
      <h1>菜鸟教程</h1> 
      学的不仅是技术，更是梦想！！！
  </div>
</div>
```
## 7、Bootstrap4 信息提示框
Bootstrap 4 可以很容易实现信息提示框。
提示框可以使用 .alert 类, 后面加上 .alert-success, .alert-info, .alert-warning, .alert-danger, .alert-primary, .alert-secondary, .alert-light 或 .alert-dark 类来实现:
```html
<div class="alert alert-success">
  <strong>成功!</strong> 指定操作成功提示信息。
</div>
```
**提示框添加链接**
提示框中在链接的标签上添加 alert-link 类来设置匹配提示框颜色的链接：
```html
<div class="alert alert-success">
  <strong>成功!</strong> 你应该认真阅读 <a href="#" class="alert-link">这条信息</a>。
</div>
```
**关闭提示框**
我们可以在提示框中的 div 中添加 .alert-dismissible 类，然后在关闭按钮的链接上添加 class="close" 和 data-dismiss="alert" 类来设置提示框的关闭操作。
```html
<div class="alert alert-success alert-dismissible">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>成功!</strong> 指定操作成功提示信息。
</div>
```
提示: \&times; (×) 是 HTML 实体字符，来表示关闭操作，而不是字母 "x"。
**提示框动画**
.fade 和 .show 类用于设置提示框在关闭时的淡出和淡入效果：
```html
<div class="alert alert-danger alert-dismissible fade show">
```
## 8、Bootstrap4 按钮
Bootstrap 4 提供了不同样式的按钮。
```html
<button type="button" class="btn">基本按钮</button>
<button type="button" class="btn btn-primary">主要按钮</button>
<button type="button" class="btn btn-secondary">次要按钮</button>
<button type="button" class="btn btn-success">成功</button>
<button type="button" class="btn btn-info">信息</button>
<button type="button" class="btn btn-warning">警告</button>
<button type="button" class="btn btn-danger">危险</button>
<button type="button" class="btn btn-dark">黑色</button>
<button type="button" class="btn btn-light">浅色</button>
<button type="button" class="btn btn-link">链接</button>
```
按钮类可用于 \<a>, \<button>, 或 \<input> 元素上:
```html
<a href="#" class="btn btn-info" role="button">链接按钮</a>
<button type="button" class="btn btn-info">按钮</button>
<input type="button" class="btn btn-info" value="输入框按钮">
<input type="submit" class="btn btn-info" value="提交按钮">
```
**按钮设置边框**
```html
<button type="button" class="btn btn-outline-primary">主要按钮</button>
<button type="button" class="btn btn-outline-secondary">次要按钮</button>
<button type="button" class="btn btn-outline-success">成功</button>
<button type="button" class="btn btn-outline-info">信息</button>
<button type="button" class="btn btn-outline-warning">警告</button>
<button type="button" class="btn btn-outline-danger">危险</button>
<button type="button" class="btn btn-outline-dark">黑色</button>
<button type="button" class="btn btn-outline-light text-dark">浅色</button>
```
**不同大小的按钮**
Bootstrap 4 可以设置按钮的大小：
```html
<button type="button" class="btn btn-primary btn-lg">大号按钮</button>
<button type="button" class="btn btn-primary">默认按钮</button>
<button type="button" class="btn btn-primary btn-sm">小号按钮</button>
```
**块级按钮**
通过添加 .btn-block 类可以设置块级按钮：
```html
<button type="button" class="btn btn-primary btn-block">按钮 1</button>
```
**激活和禁用的按钮**
按钮可设置为激活或者禁止点击的状态。
.active 类可以设置按钮是可用的， disabled 属性可以设置按钮是不可点击的。 注意 \<a> 元素不支持 disabled 属性，你可以通过添加 .disabled 类来禁止链接的点击。
```html
<button type="button" class="btn btn-primary active">点击后的按钮</button>
<button type="button" class="btn btn-primary" disabled>禁止点击的按钮</button>
<a href="#" class="btn btn-primary disabled">禁止点击的链接</a>
```
## 9、Bootstrap4 按钮组
Bootstrap 4 中允许我们将按钮放在同一行上。
可以在 \<div> 元素上添加 .btn-group 类来创建按钮组。
```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <button type="button" class="btn btn-primary">Sony</button>
</div>
```
提示: 我们可以使用 .btn-group-lg|sm 类来设置按钮组的大小。
```html
<div class="btn-group btn-group-lg">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <button type="button" class="btn btn-primary">Sony</button>
</div>
```
**垂直按钮组**
可以使用 .btn-group-vertical 类来创建垂直的按钮组：
```html
<div class="btn-group-vertical">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <button type="button" class="btn btn-primary">Sony</button>
</div>
```
**内嵌按钮组及下拉菜单**
我们可以在按钮组内设置下拉菜单：
```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
       Sony
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Tablet</a>
      <a class="dropdown-item" href="#">Smartphone</a>
    </div>
  </div>
</div>
```
**拆分按钮下拉菜单**
```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Sony</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
    <span class="caret"></span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Tablet</a>
    <a class="dropdown-item" href="#">Smartphone</a>
  </div>
</div>
```
**垂直按钮组及下拉菜单**
```html
<div class="btn-group-vertical">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
       Sony
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Tablet</a>
      <a class="dropdown-item" href="#">Smartphone</a>
    </div>
  </div>
</div>
```
## 10、Bootstrap4 徽章（Badges）
徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要将 .badge 类加上带有指定意义的颜色类 (如 .badge-secondary) 添加到 \<span> 元素上即可。 徽章可以根据父元素的大小的变化而变化。
**各种颜色类型的徽章**
以下列出了所有颜色类型的徽章:
```html
<span class="badge badge-primary">主要</span>
<span class="badge badge-secondary">次要</span>
<span class="badge badge-success">成功</span>
<span class="badge badge-danger">危险</span>
<span class="badge badge-warning">警告</span>
<span class="badge badge-info">信息</span>
<span class="badge badge-light">浅色</span>
<span class="badge badge-dark">深色</span>
```
**药丸形状徽章**
使用 .badge-pill 类来设置药丸形状徽章:
```html
<span class="badge badge-pill badge-default">默认</span>
<span class="badge badge-pill badge-primary">主要</span>
<span class="badge badge-pill badge-success">成功</span>
<span class="badge badge-pill badge-info">信息</span>
<span class="badge badge-pill badge-warning">警告</span>
<span class="badge badge-pill badge-danger">危险</span>
```
**徽章插入到元素内**
以下实例将徽章嵌入到按钮内：
```html
<button type="button" class="btn btn-primary">
  Messages <span class="badge badge-light">4</span>
</button>
```
## 11、Bootstrap4 进度条
进度条可以显示用户任务的完成过程。
创建一个基本的进度条的步骤如下：
* 添加一个带有 .progress 类的 \<div>。
* 接着，在上面的 \<div> 内，添加一个带有 class .progress-bar 的空的 \<div>。
* 添加一个带有百分比表示的宽度的 style 属性，例如 style="width:70%" 表示进度条在 70% 的位置。

**进度条高度**
进度条高度默认为 16px。我们可以使用 CSS 的 height 属性来修改他：
```html
<div class="progress" style="height:20px;">
  <div class="progress-bar" style="width:40%;"></div>
</div>
```
**进度条标签**
可以在进度条内添加文本，如进度的百分比：
```html
<div class="progress">
  <div class="progress-bar" style="width:70%">70%</div>
</div>
```
**不同颜色的进度条**
默认情况下进度条为蓝色，Bootstrap4 还提供了以下颜色的进度条：
```html
<div class="progress">
  <div class="progress-bar bg-success" style="width:40%"></div>
</div>
 
<div class="progress">
  <div class="progress-bar bg-info" style="width:50%"></div>
</div>
 
<div class="progress">
  <div class="progress-bar bg-warning" style="width:60%"></div>
</div>
 
<div class="progress">
  <div class="progress-bar bg-danger" style="width:70%"></div>
</div>
```
**条纹的进度条**
可以使用 .progress-bar-striped 类来设置条纹进度条：
```html
<div class="progress">
  <div class="progress-bar progress-bar-striped" style="width:40%"></div>
</div>
```
**动画进度条**
使用 .progress-bar-animated 类可以为进度条添加动画：
```html
<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 40%"></div>
```
**混合色彩进度条**
进度条可以设置多种颜色：
```html
<div class="progress">
  <div class="progress-bar bg-success" style="width:40%">
    Free Space
  </div>
  <div class="progress-bar bg-warning" style="width:10%">
    Warning
  </div>
  <div class="progress-bar bg-danger" style="width:20%">
    Danger
  </div>
</div>
```
## 12、Bootstrap4 分页
网页开发过程，如果碰到内容过多，一般都会做分页处理。
Bootstrap 4 可以很简单的实现分页效果。
要创建一个基本的分页可以在 \<ul> 元素上添加 .pagination 类。然后在 \<li> 元素上添加 .page-item 类：:
```html
<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
```
**当前页页码状态**
当前页可以使用 .active 类来高亮显示：
```html
<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item active"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
```
**不可点击的分页链接**
.disabled 类可以设置分页链接不可点击:
```html
<ul class="pagination">
  <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
```
**分页显示大小**
可以将分页条目设置为不同的大小。
.pagination-lg 类设置大字体的分页条目，.pagination-sm 类设置小字体的分页条目:
```html
<ul class="pagination pagination-lg">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
 
<ul class="pagination pagination-sm">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
```
**面包屑导航**
.breadcrumb 和 .breadcrumb-item 类用于设置面包屑导航：
```html
<ul class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Photos</a></li>
  <li class="breadcrumb-item"><a href="#">Summer 2017</a></li>
  <li class="breadcrumb-item"><a href="#">Italy</a></li>
  <li class="breadcrumb-item active">Rome</li>
</ul>
```
## 13、Bootstrap4 列表组
大部分基础列表组都是无序的。
要创建列表组，可以在 \<ul> 元素上添加 .list-group 类, 在 \<li> 元素上添加 .list-group-item 类:
```html
<ul class="list-group">
  <li class="list-group-item">First item</li>
  <li class="list-group-item">Second item</li>
  <li class="list-group-item">Third item</li>
</ul>
```
**激活状态的列表项**
通过添加 .active 类来设置激活状态的列表项:
```html
<ul class="list-group">
  <li class="list-group-item active">Active item</li>
  <li class="list-group-item">Second item</li>
  <li class="list-group-item">Third item</li>
</ul>
```

**禁用的列表项**
.disabled 类用于设置禁用的列表项:
```html
<ul class="list-group">
  <li class="list-group-item disabled">Disabled item</li>
  <li class="list-group-item">Second item</li>
  <li class="list-group-item">Third item</li>
</ul>
```
**链接列表项**
要创建一个链接的列表项，可以将 \<ul> 替换为 \<div> ， \<a> 替换 \<li>。如果你想鼠标悬停显示灰色背景就添加.list-group-item-action 类:
```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">First item</a>
  <a href="#" class="list-group-item list-group-item-action">Second item</a>
  <a href="#" class="list-group-item list-group-item-action">Third item</a>
</div>
```
**多种颜色列表项**
列表项目的颜色可以通过以下列来设置： .list-group-item-success, list-group-item-secondary, list-group-item-info, list-group-item-warning, .list-group-item-danger, list-group-item-dark 和 list-group-item-light:
```html
<ul class="list-group">
  <li class="list-group-item list-group-item-success">成功列表项</li>
  <li class="list-group-item list-group-item-secondary">次要列表项</li>
  <li class="list-group-item list-group-item-info">信息列表项</li>
  <li class="list-group-item list-group-item-warning">警告列表项</li>
  <li class="list-group-item list-group-item-danger">危险列表项</li>
  <li class="list-group-item list-group-item-primary">主要列表项</li>
  <li class="list-group-item list-group-item-dark">深灰色列表项</li>
  <li class="list-group-item list-group-item-light">浅色列表项</li>
</ul>
```
**链接的多种颜色列表项**
```html
<div class="list-group">
    <a href="#" class="list-group-item list-group-item-action">激活列表项</a>
    <a href="#" class="list-group-item list-group-item-success">成功列表项</a>
    <a href="#" class="list-group-item list-group-item-secondary">次要列表项</a>
    <a href="#" class="list-group-item list-group-item-info">信息列表项</a>
    <a href="#" class="list-group-item list-group-item-warning">警告列表项</a>
    <a href="#" class="list-group-item list-group-item-danger">危险列表项</a>
    <a href="#" class="list-group-item list-group-item-primary">主要列表项</a>
    <a href="#" class="list-group-item list-group-item-dark">深灰色列表项</a>
    <a href="#" class="list-group-item list-group-item-light">浅色列表项</a>
</div>
```
## 14、Bootstrap4 卡片
**简单的卡片**
我们可以通过 Bootstrap4 的 .card 与 .card-body 类来创建一个简单的卡片，实例如下:
```html
<div class="card">
  <div class="card-body">简单的卡片</div>
</div>
```
*Bootstrap4 的卡片类似 Bootstrap 3 中的面板、图片缩略图、well。*
**头部和底部**
.card-header类用于创建卡片的头部样式， .card-footer 类用于创建卡片的底部样式：
```html
<div class="card">
  <div class="card-header">头部</div>
  <div class="card-body">内容</div> 
  <div class="card-footer">底部</div>
</div>
```
**多种颜色卡片**
Bootstrap 4 提供了多种卡片的背景颜色类： .bg-primary, .bg-success, .bg-info, .bg-warning, .bg-danger, .bg-secondary, .bg-dark 和 .bg-light。
```html
<div class="container">
  <h2>多种颜色卡片</h2>
  <div class="card">
    <div class="card-body">Basic card</div>
  </div>
  <br>
  <div class="card bg-primary text-white">
    <div class="card-body">Primary card</div>
  </div>
  <br>
  <div class="card bg-success text-white">
    <div class="card-body">Success card</div>
  </div>
  <br>
  <div class="card bg-info text-white">
    <div class="card-body">Info card</div>
  </div>
  <br>
  <div class="card bg-warning text-white">
    <div class="card-body">Warning card</div>
  </div>
  <br>
  <div class="card bg-danger text-white">
    <div class="card-body">Danger card</div>
  </div>
  <br>
  <div class="card bg-secondary text-white">
    <div class="card-body">Secondary card</div>
  </div>
  <br>
  <div class="card bg-dark text-white">
    <div class="card-body">Dark card</div>
  </div>
  <br>
  <div class="card bg-light text-dark">
    <div class="card-body">Light card</div>
  </div>
</div>
```
**标题、文本和链接**
我们可以在头部元素上使用 .card-title 类来设置卡片的标题 。 .card-text 类用于设置卡片正文的内容。 .card-link 类用于给链接设置颜色。
```html
<div class="card">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some example text. Some example text.
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
```
**图片卡片**
我们可以给 \<img> 添加 .card-img-top（图片在文字上方） 或 .card-img-bottom（图片在文字下方 来设置图片卡片：
```html
<div class="card" style="width:400px">
  <img class="card-img-top" src="img_avatar1.png" alt="Card image">
  <div class="card-body">
    <h4 class="card-title">John Doe</h4>
    <p class="card-text">Some example text.
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
```
如果图片要设置为背景，可以使用 .card-img-overlay 类:
```html
<div class="card" style="width:500px">
  <img class="card-img-top" src="img_avatar1.png" alt="Card image">
  <div class="card-img-overlay">
    <h4 class="card-title">John Doe</h4>
    <p class="card-text">Some example text.
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
```
## 15、Bootstrap4 下拉菜单
Bootstrap4 下拉菜单依赖于 popper.min.js。
下拉菜单是可切换的，是以列表格式显示链接的上下文菜单。
```html
<div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    Dropdown button
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Link 1</a>
    <a class="dropdown-item" href="#">Link 2</a>
    <a class="dropdown-item" href="#">Link 3</a>
  </div>
</div>
```
**实例解析**
.dropdown 类用来指定一个下拉菜单。
我们可以使用一个按钮或链接来打开下拉菜单， 按钮或链接需要添加 .dropdown-toggle 和 data-toggle="dropdown" 属性。
\<div> 元素上添加 .dropdown-menu 类来设置实际下拉菜单，然后在下拉菜单的选项中添加 .dropdown-item 类。
我们也可以在 \<a> 标签中使用：
```html
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>
 
  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```
**下拉菜单中的分割线**
.dropdown-divider 类用于在下拉菜单中创建一个水平的分割线：
```html
<div class="dropdown-divider"></div>
```
**下拉菜单中的标题**
.dropdown-header 类用于在下拉菜单中添加标题：
```html
<div class="dropdown-header">Dropdown header 1</div>
```
**下拉菜单中的可用项与禁用项**
.active 类会让下拉菜单的选项高亮显示 (添加蓝色背景)。
如果要禁用下拉菜单的选项，可以使用.disabled 类。
```html
<a class="dropdown-item active" href="#">Active</a>
<a class="dropdown-item disabled" href="#">Disabled</a>
```
**下拉菜单的定位**
如果我们想让下拉菜单右对齐，可以在元素上的 .dropdown-menu 类后添加 .dropdown-menu-right 类。
```html
<div class="dropdown-menu dropdown-menu-right">
```
**下拉菜单弹出方向设置**
下拉菜单弹出方向默认为向下，当然我们也可以设置不同的方向。
**指定向右弹出的下拉菜单**
如果你希望下拉菜单向右弹出，可以在 div 元素上添加 "dropright" 类:
```html
<!-- Default dropright button -->
<div class="btn-group dropright">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropright
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>
 
<!-- Split dropright button -->
<div class="btn-group dropright">
  <button type="button" class="btn btn-secondary">
    Split dropright
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropright</span>
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>
```
**指定向上弹出的上拉菜单**
如果你希望上拉菜单向上弹出，可以在 div 元素上添加 "dropup" 类
**指定向左边弹出的下拉菜单**
如果你希望下拉菜单向上弹出，可以在 div 元素上添加 "dropleft" 类
**按钮中设置下拉菜单**
我们可以在按钮中添加下拉菜单
```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Sony</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
    <span class="caret"></span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Tablet</a>
    <a class="dropdown-item" href="#">Smartphone</a>
  </div>
</div>
```
## 16、Bootstrap4 折叠
Bootstrap4 折叠可以很容易的实现内容的显示与隐藏。
```html
<button data-toggle="collapse" data-target="#demo">折叠</button>
 
<div id="demo" class="collapse">
Lorem ipsum dolor text....
</div>
```
.collapse 类用于指定一个折叠元素 (实例中的 \<div>); 点击按钮后会在隐藏与显示之间切换。
控制内容的隐藏与显示，需要在 \<a> 或 \<button> 元素上添加 data-toggle="collapse" 属性。 data-target="#id" 属性是对应折叠的内容 (\<div id="demo">)。
注意: \<a> 元素上你可以使用 href 属性来代替 data-target 属性:
```html
<a href="#demo" data-toggle="collapse">Collapsible</a>
<div id="demo" class="collapse">
Lorem ipsum dolor text....
</div>
```
默认情况下折叠的内容是隐藏的，你可以添加 .show 类让内容默认显示:
```html
<div id="demo" class="collapse show">
Lorem ipsum dolor text....
</div>
```
以下实例通过扩展卡片组件来显示简单的手风琴。
注意: 使用 data-parent 属性来确保所有的折叠元素在指定的父元素下，这样就能实现在一个折叠选项显示时其他选项就隐藏。
```html
<div id="accordion">
<div class="card">
  <div class="card-header">
    <a class="card-link" data-toggle="collapse" href="#collapseOne">
      选项一
    </a>
  </div>
  <div id="collapseOne" class="collapse show" data-parent="#accordion">
    <div class="card-body">
      #1 内容：菜鸟教程 -- 学的不仅是技术，更是梦想！！！
    </div>
  </div>
</div>
<div class="card">
  <div class="card-header">
    <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
    选项二
  </a>
  </div>
  <div id="collapseTwo" class="collapse" data-parent="#accordion">
    <div class="card-body">
      #2 内容：菜鸟教程 -- 学的不仅是技术，更是梦想！！！
    </div>
  </div>
</div>
<div class="card">
  <div class="card-header">
    <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
      选项三
    </a>
  </div>
  <div id="collapseThree" class="collapse" data-parent="#accordion">
    <div class="card-body">
      #3 内容：菜鸟教程 -- 学的不仅是技术，更是梦想！！！
    </div>
  </div>
</div>
</div>
```
## 17、Bootstrap4 导航
如果你想创建一个简单的水平导航栏，可以在 \<ul> 元素上添加 .nav类，在每个 \<li> 选项上添加 .nav-item 类，在每个链接上添加 .nav-link 类:
```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
```
**导航对齐方式**
.justify-content-center 类设置导航居中显示， .justify-content-end 类设置导航右对齐。
```html
<!-- 导航居中 -->
<ul class="nav justify-content-center">
 
<!-- 导航右对齐 -->
<ul class="nav justify-content-end">
</div>
```
**垂直导航**
.flex-column 类用于创建垂直导航：
```html
<ul class="nav flex-column">
```
**选项卡**
使用 .nav-tabs 类可以将导航转化为选项卡。然后对于选中的选项使用 .active 类来标记。
```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
```
**胶囊导航**
.nav-pills 类可以将导航项设置成胶囊形状。
```html
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
```
**导航等宽**
.nav-justified 类可以设置导航项齐行等宽显示。
```html
<ul class="nav nav-pills nav-justified">..</ul>
<ul class="nav nav-tabs nav-justified">..</ul>
```
**胶囊下拉菜单**
```html
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Link 1</a>
      <a class="dropdown-item" href="#">Link 2</a>
      <a class="dropdown-item" href="#">Link 3</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
```
**选项卡下拉菜单**
```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Link 1</a>
      <a class="dropdown-item" href="#">Link 2</a>
      <a class="dropdown-item" href="#">Link 3</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
```
**动态选项卡**
如果你要设置选项卡是动态可切换的，可以在每个链接上添加 data-toggle="tab" 属性。 然后在每个选项对应的内容的上添加 .tab-pane 类。
如果你希望有淡入效果可以在 .tab-pane 后添加 .fade类:
```html
<!-- Nav tabs -->
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
  </li>
</ul>
 
<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active container" id="home">...</div>
  <div class="tab-pane container" id="menu1">...</div>
  <div class="tab-pane container" id="menu2">...</div>
</div>
```
**胶囊状动态选项卡**
胶囊状动态选项卡只需要将以上实例的代码中 data-toggle 属性设置为 data-toggle="pill":
```html
<!-- Nav pills -->
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="pill" href="#home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="pill" href="#menu1">Menu 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="pill" href="#menu2">Menu 2</a>
  </li>
</ul>
 
<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active container" id="home">...</div>
  <div class="tab-pane container" id="menu1">...</div>
  <div class="tab-pane container" id="menu2">...</div>
</div>
```
## 18、Bootstrap4 导航栏
导航栏一般放在页面的顶部。
我们可以使用 .navbar 类来创建一个标准的导航栏，后面紧跟: .navbar-expand-xl|lg|md|sm 类来创建响应式的导航栏 (大屏幕水平铺开，小屏幕垂直堆叠)。
导航栏上的选项可以使用 \<ul> 元素并添加 class="navbar-nav" 类。 然后在 \<li> 元素上添加 .nav-item 类， \<a> 元素上使用 .nav-link 类:
```html
<!-- 小屏幕上水平导航栏会切换为垂直的 -->
<nav class="navbar navbar-expand-sm bg-light">
 
  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 3</a>
    </li>
  </ul> 
</nav>
```
**垂直导航栏**
通过删除 .navbar-expand-xl|lg|md|sm 类来创建垂直导航栏:
```html
<!-- 垂直导航栏 -->
<nav class="navbar bg-light">
  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 3</a>
    </li>
  </ul>
</nav>
```
**不同颜色导航栏**
可以使用以下类来创建不同颜色导航栏：.bg-primary, .bg-success, .bg-info, .bg-warning, .bg-danger, .bg-secondary, .bg-dark 和 .bg-light)。
*提示: 对于暗色背景需要设置文本颜色为浅色的，对于浅色背景需要设置文本颜色为深色的。*
```html
<!-- 灰底黑字 -->
<nav class="navbar navbar-expand-sm bg-light navbar-light">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
</nav>
<!-- 黑底白字 -->
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">...</nav>
<!-- 蓝底白字 -->
<nav class="navbar navbar-expand-sm bg-primary navbar-dark">...</nav>
```
激活和禁用状态: 可以在 \<a> 元素上添加 .active 类来高亮显示选中的选项。 .disabled 类用于设置该链接是不可点击的。
**品牌/Logo**
.navbar-brand 类用于高亮显示品牌/Logo:
```html
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="#">Logo</a>
  ...
</nav>
```
如果使用图片，可以使用 .navbar-brand 类来设置图片自适应导航栏。
```html
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
   <a class="navbar-brand" href="#">
    <img src="bird.jpg" alt="Logo" style="width:40px;">
  </a>
  ...
</nav>
```
**折叠导航栏**
通常，小屏幕上我们都会折叠导航栏，通过点击来显示导航选项。
要创建折叠导航栏，可以在按钮上添加 class="navbar-toggler", data-toggle="collapse" 与 data-target="#thetarget" 类。然后在设置了 class="collapse navbar-collapse" 类的 div 上包裹导航内容（链接）, div 元素上的 id 匹配按钮 data-target 的上指定的 id:
```html
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <!-- Brand -->
  <a class="navbar-brand" href="#">Navbar</a>
 
  <!-- Toggler/collapsibe Button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
 
  <!-- Navbar links -->
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li> 
    </ul>
  </div> 
</nav>
```
**导航栏使用下拉菜单**
导航栏上可以设置下拉菜单：
```html
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <!-- Brand -->
  <a class="navbar-brand" href="#">Logo</a>
 
  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>
 
    <!-- Dropdown -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Dropdown link
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
        <a class="dropdown-item" href="#">Link 3</a>
      </div>
    </li>
  </ul>
</nav>
```
**导航栏的表单与按钮**
导航栏的表单 \<form> 元素使用 class="form-inline" 类来排版输入框与按钮：
```html
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <form class="form-inline">
    <input class="form-control" type="text" placeholder="Search">
    <button class="btn btn-success" type="submit">Search</button>
  </form>
</nav>
```
你也可以使用其他的输入框类，如 .input-group-addon 类用于在输入框前添加小标签。
```html
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <form class="form-inline">
    <div class="input-group">
      <span class="input-group-addon">@</span>
      <input type="text" class="form-control" placeholder="Username">
    </div> 
  </form>
</nav>
```
**导航栏文本**
使用 .navbar-text 类来设置导航栏上非链接文本，可以保证水平对齐，颜色与内边距一样。
```html
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

<!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>
  </ul>
 
  <!-- Navbar text-->
  <span class="navbar-text">
    Navbar text
  </span>
 
</nav>
```
**固定导航栏**
导航栏可以固定在头部或者底部。
我们使用 .fixed-top 类来实现导航栏的固定：
```html
<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  ...
</nav>
```
.fixed-bottom 类用于设置导航栏固定在底部：
```html
<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom">
  ...
</nav>
```
## 19、Bootstrap4 面包屑导航（Breadcrumb）
面包屑导航是一种基于网站层次信息的显示方式。以博客为例，面包屑导航可以显示发布日期、类别或标签。它们表示当前页面在导航层次结构内的位置，是在用户界面中的一种导航辅助。
Bootstrap 中的面包屑导航是一个简单的带有 .breadcrumb class 的无序列表。分隔符会通过 CSS（bootstrap.min.css）中的 ::before 和 content 来添加，下面所示的 class 自动被添加：
```css
.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: "/";
}
```
**Bootstrap4 面包屑导航实例**
```html
<ol class="breadcrumb">
  <li class="breadcrumb-item active">Home</li>
</ol>
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item active">Library</li>
</ol>
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item"><a href="#">Library</a></li>
  <li class="breadcrumb-item active">Data</li>
</ol>
```
我们也可以不用列表形式：
**Bootstrap4 面包屑导航实例**
```html
<nav class="breadcrumb">
  <a class="breadcrumb-item" href="#">Home</a>
  <a class="breadcrumb-item" href="#">Library</a>
  <a class="breadcrumb-item" href="#">Data</a>
  <span class="breadcrumb-item active">Bootstrap</span>
</nav>
```
## 20、Bootstrap4 表单
在本章中，我们将学习如何使用 Bootstrap 创建表单。Bootstrap 通过一些简单的 HTML 标签和扩展的类即可创建出不同样式的表单。
表单元素 \<input>, \<textarea>, 和 \<select> elements 在使用 .form-control 类的情况下，宽度都是设置为 100%。
**Bootstrap4 表单布局**
* 堆叠表单 (全屏宽度)：垂直方向
* 内联表单：水平方向
Bootstrap 提供了两种类型的表单布局:
**堆叠表单**
以下实例使用两个输入框，一个复选框，一个提交按钮来创建堆叠表单：
```html
<form>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email">
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd">
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox"> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```
**内联表单**
所有内联表单中的元素都是左对齐的。
*注意：在屏幕宽度小于 576px 时为垂直堆叠，如果屏幕宽度大于等于576px时表单元素才会显示在同一个水平线上。*
内联表单需要在 \<form> 元素上添加 .form-inline类。
以下实例使用两个输入框，一个复选框，一个提交按钮来创建内联表单：
```html
<form class="form-inline">
  <label for="email">Email address:</label>
  <input type="email" class="form-control" id="email">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="pwd">
  <div class="form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox"> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```
## 21、Bootstrap4 表单控件
Bootstrap4 支持以下表单控件：
* input
* textarea
* checkbox
* radio
* select

**Bootstrap Input**
Bootstrap 支持所有的 HTML5 输入类型: text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, 以及 color。
*注意：: 如果 input 的 type 属性未正确声明，输入框的样式将不会显示。*
以下实例使用两个 input 元素，一个是 text，一个是 password ：
```html
<div class="form-group">
  <label for="usr">用户名:</label>
  <input type="text" class="form-control" id="usr">
</div>
<div class="form-group">
  <label for="pwd">密码:</label>
  <input type="password" class="form-control" id="pwd">
</div>
```
**Bootstrap textarea**
以下实例演示了 textarea 的样式。
```html
<div class="form-group">
  <label for="comment">评论:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
```
**Bootstrap 复选框(checkbox)**
复选框用于让用户从一系列预设置的选项中进行选择，可以选一个或多个。
以下实例包含了三个选项。最后一个是禁用的：
```html
<div class="form-check">
  <label class="form-check-label">
    <input type="checkbox" class="form-check-input" value="">Option 1
  </label>
</div>
<div class="form-check">
  <label class="form-check-label">
    <input type="checkbox" class="form-check-input" value="">Option 2
  </label>
</div>
<div class="form-check disabled">
  <label class="form-check-label">
    <input type="checkbox" class="form-check-input" value="" disabled>Option 3
  </label>
</div>
```
使用 .form-check-inline 类可以让选项显示在同一行上：
```html
<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input type="checkbox" class="form-check-input" value="">Option 1
  </label>
</div>
<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input type="checkbox" class="form-check-input" value="">Option 2
  </label>
</div>
<div class="form-check form-check-inline disabled">
  <label class="form-check-label">
    <input type="checkbox" class="form-check-input" value="" disabled>Option 3
  </label>
</div>
```
**Bootstrap 单选框(Radio)**
单选框用于让用户从一系列预设置的选项中进行选择，只能选一个。
以下实例包含了三个选项。最后一个是禁用的：
```html
<div class="radio">
  <label><input type="radio" name="optradio">Option 1</label>
</div>
<div class="radio">
  <label><input type="radio" name="optradio">Option 2</label>
</div>
<div class="radio disabled">
  <label><input type="radio" name="optradio" disabled>Option 3</label>
</div>
```
使用 .radio-inline 类可以让选项显示在同一行上：
```html
<label class="radio-inline"><input type="radio" name="optradio">Option 1</label>
<label class="radio-inline"><input type="radio" name="optradio">Option 2</label>
<label class="radio-inline"><input type="radio" name="optradio">Option 3</label>
```
**Bootstrap select 下拉菜单**
当您想让用户从多个选项中进行选择，但是默认情况下只能选择一个选项时，则使用选择框。
以下实例包含了两个下拉菜单：
```html
<div class="form-group">
  <label for="sel1">下拉菜单:</label>
  <select class="form-control" id="sel1">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>
</div>
```
## 22、Bootstrap4 输入框组
我们可以使用 .input-group 类来向表单输入框中添加更多的样式，如图标、文本或者按钮。
使用 .input-group-prepend 类可以在输入框的的前面添加文本信息， .input-group-append 类添加在输入框的后面。
最后，我们还需要使用 .input-group-text 类来设置文本的样式。
```html
<form>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">@</span>
    </div>
    <input type="text" class="form-control" placeholder="Username">
  </div>
 
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Your Email">
    <div class="input-group-append">
      <span class="input-group-text">@runoob.com</span>
    </div>
  </div>
</form>
```
**输入框大小**
使用 .input-group-sm 类来设置小的输入框， .input-group-lg 类设置大的输入框：
```html
<form>
  <div class="input-group mb-3 input-group-sm">
     <div class="input-group-prepend">
       <span class="input-group-text">Small</span>
    </div>
    <input type="text" class="form-control">
  </div>
</form>
<form>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">Default</span>
    </div>
    <input type="text" class="form-control">
  </div>
</form>
<form>
  <div class="input-group mb-3 input-group-lg">
    <div class="input-group-prepend">
      <span class="input-group-text">Large</span>
    </div>
    <input type="text" class="form-control">
  </div>
</form>
```
**多个输入框和文本**
```html
<!-- 多个输入框 -->
<form>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">Person</span>
    </div>
    <input type="text" class="form-control" placeholder="First Name">
    <input type="text" class="form-control" placeholder="Last Name">
  </div>
</form>
 
<!-- 多个文本信息 -->
<form>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">One</span>
      <span class="input-group-text">Two</span>
      <span class="input-group-text">Three</span>
    </div>
    <input type="text" class="form-control">
  </div>
</form>
```
**复选框与单选框**
文本信息可以使用复选框与单选框替代：
```html
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="input-group-text">
      <input type="checkbox"> 
    </div>
  </div>
  <input type="text" class="form-control" placeholder="RUNOOB">
</div>
 
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="input-group-text">
      <input type="radio"> 
    </div>
  </div>
  <input type="text" class="form-control" placeholder="GOOGLE">
</div>
```
**输入框添加按钮组**
```html
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button">Basic Button</button> 
  </div>
  <input type="text" class="form-control" placeholder="Some text">
</div>
 
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search">
  <div class="input-group-append">
    <button class="btn btn-success" type="submit">Go</button> 
  </div>
</div>
 
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Something clever..">
  <div class="input-group-append">
    <button class="btn btn-primary" type="button">OK</button> 
    <button class="btn btn-danger" type="button">Cancel</button> 
  </div>
</div>
```
**设置下拉菜单**
输入框中添加下拉菜单不需要使用 .dropdown 类。
```html
<div class="input-group mt-3 mb-3">
  <div class="input-group-prepend">
    <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
      选择网站
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="https://www.google.com">GOOGLE</a>
      <a class="dropdown-item" href="https://www.runoob.com">RUNOOB</a>
      <a class="dropdown-item" href="https://www.taobao.com">TAOBAO</a>
    </div>
  </div>
  <input type="text" class="form-control" placeholder="网站地址">
</div>
```
**输入框组标签**
在输入框组通过在输入框组外围的 label 来设置标签，标签的 for 属性需要与输入框组的 id 对应，点击标签后可以聚焦输入框：
```html
<label for="demo">Write your email here:</label>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Email" id="demo" name="email">
  <div class="input-group-append">
    <span class="input-group-text">@runoob.com</span>
  </div>
</div>
```
## 23、Bootstrap4 自定义表单
Bootstrap4 可以自定义一些表单的样式来替换浏览器默认的样式。
**自定义复选框**
如果要自定义一个复选框，可以设置 \<div> 为父元素，类为 .custom-control 和 .custom-checkbox，复选框作为子元素放在该 \<div> 里头，然后复选框设置为 type="checkbox"，类为 .custom-control-input。
复选框的文本使用 label 标签，标签使用 .custom-control-label 类，label 的 for 属性值需要匹配复选框的 id。
```html
<form>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck" name="example1">
    <label class="custom-control-label" for="customCheck">自定义复选框</label>
  </div>
</form>
```
**自定义单选框**
如果要自定义一个单选框，可以设置 \<div> 为父元素，类为 .custom-control 和 .custom-radio，单选框作为子元素放在该 \<div> 里头，然后单选框设置为 type="radio"，类为 .custom-control-input。
单选框的文本使用 label 标签，标签使用 .custom-control-label 类，label 的 for 属性值需要匹配单选框的 id。
```html
<form>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="customRadio" name="example1" value="customEx">
    <label class="custom-control-label" for="customRadio">自定义单选框</label>
  </div> 
</form>
```
**自定义控件显示在同一行**
我们可以在外部元素上使用 .custom-control-inline 类来包裹自定义表单控件，这样自定义表单控件就能显示在同一行：
```html
<form>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" class="custom-control-input" id="customRadio" name="example" value="customEx">
    <label class="custom-control-label" for="customRadio">自定义单选框 1</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" class="custom-control-input" id="customRadio2" name="example" value="customEx">
    <label class="custom-control-label" for="customRadio2">自定义单选框 2</label>
  </div> 
</form>
```
**自定义选择菜单**
创建自定义选择菜单可以在 \<select> 元素上添加 .custom-select 类:
```html
<form>
  <select name="cars" class="custom-select-sm">
    <option selected>自定义选择菜单</option>
    <option value="Google">Google</option>
    <option value="Runoob">Runoob</option>
    <option value="Taobao">Taobao</option>
  </select>
</form>
```
如果我们要设置自定义选择菜单大小，可以使用 .custom-select-sm、.custom-select-lg 来设置它们的大小:
```html
<form>
  <!-- 小 -->
  <select name="cars" class="custom-select-sm">
    <option selected>比较小的自定义选择菜单</option>
    <option value="Google">Google</option>
    <option value="Runoob">Runoob</option>
    <option value="Taobao">Taobao</option>
  </select>
 
  <!-- 大 -->
  <select name="cars" class="custom-select-lg">
    <option selected>比较大的自定义选择菜单</option>
    <option value="Google">Google</option>
    <option value="Runoob">Runoob</option>
    <option value="Taobao">Taobao</option>
  </select>
</form>
```
**自定义滑块控件**
我们可以在 input 为 type="range" 的输入框中添加 .custom-range 类来设置自定义滑块控件:
```html
<form>
  <label for="customRange">自定义滑块控件</label>
  <input type="range" class="custom-range" id="customRange" name="points1">
</form>
```
**自定义文件上传控件**
我们可以在父元素添加 .custom-file 类，然后在 input 设置为 type="file" 并添加 .custom-file-input:
上传控件的文本使用 label 标签，标签使用 .custom-file-label 类，label 的 for 属性值需要匹配复选框的 id。
```html
<form>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="customFile">
    <label class="custom-file-label" for="customFile">选择文件</label>
  </div>
</form>
```
## 23、Bootstrap4 轮播
**如何创建轮播**
以下实例创建了一个简单的图片轮播效果 ：
```html
<div id="demo" class="carousel slide" data-ride="carousel">
 
  <!-- 指示符 -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
 
  <!-- 轮播图片 -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg">
    </div>
    <div class="carousel-item">
      <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg">
    </div>
    <div class="carousel-item">
      <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg">
    </div>
  </div>
 
  <!-- 左右切换按钮 -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
```
**轮播图片上添加描述**
在每个 \<div class="carousel-item"> 内添加 \<div class="carousel-caption"> 来设置轮播图片的描述文本：:
```html
<div class="carousel-item">
  <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg">
  <div class="carousel-caption">
    <h3>第一张图片描述标题</h3>
    <p>描述文字!
  </div>
</div>
```
**以上实例中使用的类说明**
<table class="reference">
  <tbody><tr>
    <th style="width:30%;">类</th>
    <th style="width:70%;">描述</th>
  </tr>
  <tr>
    <td><code>.carousel</code></td>
    <td>创建一个轮播</td>
  </tr>
  <tr>
    <td><code>.carousel-indicators</code></td>
    <td>为轮播添加一个指示符，就是轮播图底下的一个个小点，轮播的过程可以显示目前是第几张图。</td>
  </tr>
  <tr>
    <td><code>.carousel-inner</code></td>
    <td>添加要切换的图片</td>
  </tr>
  <tr>
    <td><code>.carousel-item</code></td>
    <td>指定每个图片的内容</td>
  </tr>
  <tr>
    <td><code>.carousel-control-prev</code></td>
    <td>添加左侧的按钮，点击会返回上一张。</td>
  </tr>
  <tr>
    <td><code>.carousel-control-next</code></td>
    <td>添加右侧按钮，点击会切换到下一张。</td>
  </tr>
  <tr>
    <td><code>.carousel-control-prev-icon</code></td>
    <td>与 .carousel-control-prev 一起使用，设置左侧的按钮</td>
  </tr>
  <tr>
    <td><code>.carousel-control-next-icon</code></td>
    <td>与 .carousel-control-next 一起使用，设置右侧的按钮</td>
  </tr>
  <tr>
    <td><code>.slide</code></td>
    <td>切换图片的过渡和动画效果，如果你不需要这样的效果，可以删除这个类。</td>
  </tr>
</tbody></table>
## 24、Bootstrap4 模态框
模态框（Modal）是覆盖在父窗体上的子窗体。通常，目的是显示来自一个单独的源的内容，可以在不离开父窗体的情况下有一些互动。子窗体可提供信息交互等。
**如何创建模态框**
以下实例创建了一个简单的模态框效果 ：
```html
<!-- 按钮：用于打开模态框 -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  打开模态框
</button>
 
<!-- 模态框 -->
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
 
      <!-- 模态框头部 -->
      <div class="modal-header">
        <h4 class="modal-title">模态框头部</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
 
      <!-- 模态框主体 -->
      <div class="modal-body">
        模态框内容..
      </div>
 
      <!-- 模态框底部 -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
      </div>
 
    </div>
  </div>
</div>
```
**模态框尺寸**
我们可以通过添加 .modal-sm 类来创建一个小模态框，.modal-lg 类可以创建一个大模态框。
尺寸类放在 \<div>元素的 .modal-dialog 类后 :
```html
<!-- 小模态框 -->
<div class="modal-dialog modal-sm">
```
```html
<!-- 大模态框 -->
<div class="modal-dialog modal-lg">
```

## 25、Bootstrap4 提示框
提示框是一个小小的弹窗，在鼠标移动到元素上显示，鼠标移到元素外就消失。
**如何创建提示框**
通过向元素添加 data-toggle="tooltip" 来来创建提示框。
title 属性的内容为提示框显示的内容：
```html
<a href="#" data-toggle="tooltip" title="我是提示内容!">鼠标移动到我这</a>
```
注意: 提示框要写在 jQuery 的初始化代码里: 然后在指定的元素上调用 tooltip() 方法。
以下实例可以在文档的任何地方使用提示框：
```javascript
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
```
**指定提示框的位置**
默认情况下提示框显示在元素上方。
可以使用 data-placement 属性来设定提示框显示的方向: top, bottom, left 或 right:
```html
<a href="#" data-toggle="tooltip" data-placement="top" title="我是提示内容!">鼠标移动到我这</a>
<a href="#" data-toggle="tooltip" data-placement="bottom" title="我是提示内容!">鼠标移动到我这</a>
<a href="#" data-toggle="tooltip" data-placement="left" title="我是提示内容!">鼠标移动到我这</a>
<a href="#" data-toggle="tooltip" data-placement="right" title="我是提示内容!">鼠标移动到我这</a>
```
在按钮中使用：
```html
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
  Tooltip on left
</button>
```
提示内容添加 HTML 标签，设置 data-html="true"，内容放在 title 标签里头:
```html
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
```
禁用按钮：
```html
<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip">
  <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
</span>
```
## 26、Bootstrap4 弹出框
弹出框控件类似于提示框，它在鼠标点击到元素后显示，与提示框不同的是它可以显示更多的内容。
**如何创建弹出框**
通过向元素添加 data-toggle="popover" 来来创建弹出框。
title 属性的内容为弹出框的标题，data-content 属性显示了弹出框的文本内容：
```html
<a href="#" data-toggle="popover" title="弹出框标题" data-content="弹出框内容">多次点我</a>
```
注意: 弹出框要写在 jQuery 的初始化代码里: 然后在指定的元素上调用 popover() 方法。
以下实例可以在文档的任何地方使用弹出框：
```javascript
$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});
```
**指定弹出框的位置**
默认情况下弹出框显示在元素右侧。
可以使用 data-placement 属性来设定弹出框显示的方向: top, bottom, left 或 right:
```html
<a href="#" title="Header" data-toggle="popover" data-placement="top" data-content="Content">点我</a>
<a href="#" title="Header" data-toggle="popover" data-placement="bottom" data-content="Content">点我</a>
<a href="#" title="Header" data-toggle="popover" data-placement="left" data-content="Content">点我</a>
<a href="#" title="Header" data-toggle="popover" data-placement="right" data-content="Content">点我</a>
```
按钮中使用:
```html
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>
 
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button>
 
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>
 
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on left
</button>
```
**关闭弹出框**
默认情况下，弹出框在再次点击指定元素后就会关闭，你可以使用 data-trigger="focus" 属性来设置在鼠标点击元素外部区域来关闭弹出框：
```html
<a href="#" title="取消弹出框" data-toggle="popover" data-trigger="focus" data-content="点击文档的其他地方关闭我">点我</a>
```
提示:如果你想实现在鼠标移动到元素上显示，移除后消失的效果，可以使用 data-trigger 属性，并设置值为 "hover":
```html
<a href="#" title="Header" data-toggle="popover" data-trigger="hover" data-content="一些内容">鼠标移动到我这</a>
```
## 27、Bootstrap 滚动监听(Scrollspy)
滚动监听（Scrollspy）插件，即自动更新导航插件，会根据滚动条的位置自动更新对应的导航目标。其基本的实现是随着您的滚动。
**如何创建滚动监听**
以下实例演示了如何创建滚动监听：
```html
<!-- 可滚动区域 -->
<body data-spy="scroll" data-target=".navbar" data-offset="50">
<!-- The navbar - The <a> elements are used to jump to a section in the scrollable area -->
<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
...
  <ul class="navbar-nav">
    <li><a href="#section1">Section 1</a></li>
    ...
</nav>
<!-- 第一部分内容 -->
<div id="section1">
  <h1>Section 1</h1>
  Try to scroll this page and look at the navigation bar while scrolling!
</div>
...
</body>
```
实例解析
向您想要监听的元素（通常是 body）添加 data-spy="scroll" 。
然后添加 data-target 属性，它的值为导航栏的 id 或 class (.navbar)。这样就可以联系上可滚动区域。
注意可滚动项元素上的 id （\<div id="section1">） 必须匹配导航栏上的链接选项 （\<a href="#section1">)。
可选项data-offset 属性用于计算滚动位置时，距离顶部的偏移像素。 默认为 10 px。
设置相对定位: 使用 data-spy="scroll" 的元素需要将其 CSS position 属性设置为 "relative" 才能起作用。
以下实例设置了垂直滚动监听：
```html
<body data-spy="scroll" data-target="#myScrollspy" data-offset="1">
  <div class="container-fluid">
    <div class="row">
      <nav class="col-sm-3 col-4" id="myScrollspy">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#section1">Section 1</a>
          </li>
          ...
        </ul>
      </nav>
      <div class="col-sm-9 col-8">
        <div id="section1"> 
          <h1>Section 1</h1>
          Try to scroll this page and look at the navigation list while scrolling!
        </div> 
        ...
      </div>
    </div>
  </div>
</body>
```
## 28、Bootstrap4 小工具
Bootstrap4 提供了一些小工具，可以让我们不用写 CSS 代码就能实现想要的效果。
**边框**
使用 border 类可以添加或移除边框:
```html
<span class="border"></span>
<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-right-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-left-0"></span>
```
**边框颜色**
Bootstrap4 提供了一些类来设置边框颜色:
```html
<span class="border border-primary"></span>
<span class="border border-secondary"></span>
<span class="border border-success"></span>
<span class="border border-danger"></span>
<span class="border border-warning"></span>
<span class="border border-info"></span>
<span class="border border-light"></span>
<span class="border border-dark"></span>
<span class="border border-white"></span>
```
**边框圆角设置**
使用rounded 类可以添加圆角边框:
```html
<span class="rounded"></span>
<span class="rounded-top"></span>
<span class="rounded-right"></span>
<span class="rounded-bottom"></span>
<span class="rounded-left"></span>
<span class="rounded-circle"></span>
<span class="rounded-0"></span>
```
浮动
.float-right 类用于设置元素右浮动， .float-left 设置元素左浮动, .clearfix 类用于清除浮动:
```html
<div class="clearfix">
  <span class="float-left">左浮动</span>
  <span class="float-right">右浮动</span>
</div>
```
**响应式浮动**
我们看可以设置浮动 (.float-*-left|right - * 为 sm, md, lg 或 xl)的方向依赖于屏幕的大小:
```html
<div class="float-sm-right">在大于小屏幕尺寸上右浮动</div><br>
<div class="float-md-right">在大于中等屏幕尺寸上右浮动</div><br>
<div class="float-lg-right">在大于大屏幕尺寸上右浮动</div><br>
<div class="float-xl-right">在大于超大屏幕尺寸上右浮动</div><br>
<div class="float-none">没有浮动</div>
```
**居中对齐**
使用 .mx-auto 类来设置居中对齐:
```html
<div class="mx-auto bg-warning" style="width:150px">居中显示</div>
```
**宽度**
元素上使用 w-* 类 (.w-25, .w-50, .w-75, .w-100, .mw-100) 来设置宽度:
```html
<div class="w-25 bg-warning">宽度 25%</div>
<div class="w-50 bg-warning">宽度 50%</div>
<div class="w-75 bg-warning">宽度 75%</div>
<div class="w-100 bg-warning">宽度 100%</div>
<div class="mw-100 bg-warning">最大宽度 100%</div>
```
**高度**
元素上使用 h-* 类 (.h-25, .h-50, .h-75, .h-100, .mh-100) 来设置高度:
```html
<div style="height:200px;background-color:#ddd">
    <div class="h-25 bg-warning">高度 25%</div>
    <div class="h-50 bg-warning">高度 50%</div>
    <div class="h-75 bg-warning">高度 75%</div>
    <div class="h-100 bg-warning">高度 100%</div>
    <div class="mh-100 bg-warning" style="height:500px">最大高度 100%</div>
</div>
```
## 29、Bootstrap 4 Flex（弹性）布局

参考：https://www.runoob.com/bootstrap4/bootstrap4-flex.html

## 30、Bootstrap 4 多媒体对象
参考： https://www.runoob.com/bootstrap4/bootstrap4-media-objects.html