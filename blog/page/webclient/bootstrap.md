<p align='center'>Bootstrap教程
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
