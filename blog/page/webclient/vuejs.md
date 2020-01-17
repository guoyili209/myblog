<p align='center'>Vue.js教程</p>
=

[toc]

**第一个实例**
Vue 2.0 Hello World
```html
<div id="app">
  <p>{{ message }}</p>
</div>
```
## 1、Vue.js条件判断
条件判断使用 v-if 指令。
在元素 和 template 中使用 v-if 指令：
```html
<div id="app">
    <p v-if="seen">现在你看到我了</p>
    <template v-if="ok">
      <h1>菜鸟教程</h1>
      <p>学的不仅是技术，更是梦想！</p>
      <p>哈哈哈，打字辛苦啊！！！</p>
    </template>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    seen: true,
    ok: true
  }
})
</script>
```
这里， v-if 指令将根据表达式 seen 的值(true 或 false )来决定是否插入 p 元素。
在字符串模板中，如 Handlebars ，我们得像这样写一个条件块：
```html
<!-- Handlebars 模板 -->
{{#if ok}}
  <h1>Yes</h1>
{{/if}}
```
**v-else**
可以用 v-else 指令给 v-if 添加一个 "else" 块：
```html
<!-- v-else 指令
随机生成一个数字，判断是否大于0.5，然后输出对应信息： -->
<div id="app">
    <div v-if="Math.random() > 0.5">
      Sorry
    </div>
    <div v-else>
      Not sorry
    </div>
</div>
    
<script>
new Vue({
  el: '#app'
})
</script>
```
**v-else-if**
v-else-if 在 2.1.0 新增，顾名思义，用作 v-if 的 else-if 块。可以链式的多次使用：
```html
<div id="app">
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    type: 'C'
  }
})
</script>
```
*v-else 、v-else-if 必须跟在 v-if 或者 v-else-if之后。*
**v-show**
我们也可以使用 v-show 指令来根据条件展示元素：
```html
<h1 v-show="ok">Hello!</h1>
```
## 2、循环
循环使用 v-for 指令。
v-for 指令需要以 site in sites 形式的特殊语法， sites 是源数据数组并且 site 是数组元素迭代的别名。
v-for 可以绑定数据到数组来渲染一个列表：
```html
<div id="app">
  <ol>
    <li v-for="site in sites">
      {{ site.name }}
    </li>
  </ol>
</div>
 
<script>
new Vue({
  el: '#app',
  data: {
    sites: [
      { name: 'Runoob' },
      { name: 'Google' },
      { name: 'Taobao' }
    ]
  }
})
</script>
```
模板中使用 v-for：
```html
<ul>
  <template v-for="site in sites">
    <li>{{ site.name }}</li>
    <li>--------------</li>
  </template>
</ul>
```
**v-for 迭代对象**
v-for 可以通过一个对象的属性来迭代数据：
```html
<div id="app">
  <ul>
    <li v-for="value in object">
    {{ value }}
    </li>
  </ul>
</div>
 
<script>
new Vue({
  el: '#app',
  data: {
    object: {
      name: '菜鸟教程',
      url: 'http://www.runoob.com',
      slogan: '学的不仅是技术，更是梦想！'
    }
  }
})
</script>
```
你也可以提供第二个的参数为键名：
```html
<div id="app">
  <ul>
    <li v-for="(value, key) in object">
    {{ key }} : {{ value }}
    </li>
  </ul>
</div>
```
第三个参数为索引：
```html
<div id="app">
  <ul>
    <li v-for="(value, key, index) in object">
     {{ index }}. {{ key }} : {{ value }}
    </li>
  </ul>
</div>
```
**v-for 迭代整数**
v-for 也可以循环整数
```html
<div id="app">
  <ul>
    <li v-for="n in 10">
     {{ n }}
    </li>
  </ul>
</div>
```
## 3、Vue.js 计算属性
计算属性关键词: computed。
计算属性在处理一些复杂逻辑时是很有用的。
可以看下以下反转字符串的例子：
```html
<div id="app">
  {{ message.split('').reverse().join('') }}
</div>
```
实例 1 中模板变的很复杂起来，也不容易看懂理解。
接下来我们看看使用了计算属性的实例：
```html
<div id="app">
  <p>原始字符串: {{ message }}</p>
  <p>计算后反转字符串: {{ reversedMessage }}</p>
</div>
<script>
var vm = new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
</script>
```
实例 2 中声明了一个计算属性 reversedMessage 。
提供的函数将用作属性 vm.reversedMessage 的 getter 。
vm.reversedMessage 依赖于 vm.message，在 vm.message 发生改变时，vm.reversedMessage 也会更新。
<hr>

**computed vs methods**
我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
```javascript
methods: {
  reversedMessage2: function () {
    return this.message.split('').reverse().join('')
  }
```
可以说使用 computed 性能会更好，但是如果你不希望缓存，你可以使用 methods 属性。

**computed setter**
computed 属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：
```javascript
var vm = new Vue({
  el: '#app',
  data: {
    name: 'Google',
    url: 'http://www.google.com'
  },
  computed: {
    site: {
      // getter
      get: function () {
        return this.name + ' ' + this.url
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.name = names[0]
        this.url = names[names.length - 1]
      }
    }
  }
})
// 调用 setter， vm.name 和 vm.url 也会被对应更新
vm.site = '菜鸟教程 http://www.runoob.com';
document.write('name: ' + vm.name);
document.write('<br>');
document.write('url: ' + vm.url);
```
## 4、Vue.js 监听属性
本章节，我们将为大家介绍 Vue.js 监听属性 watch，我们可以通过 watch 来响应数据的变化。
以下实例通过使用 watch 实现计数器：
```html
<div id = "app">
    <p style = "font-size:25px;">计数器: {{ counter }}</p>
    <button @click = "counter++" style = "font-size:25px;">点我</button>
</div>
<script type = "text/javascript">
var vm = new Vue({
    el: '#app',
    data: {
        counter: 1
    }
});
vm.$watch('counter', function(nval, oval) {
    alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
});
</script>
```
以下实例进行千米与米之间的换算：
```html
<div id = "computed_props">
    千米 : <input type = "text" v-model = "kilometers">
    米 : <input type = "text" v-model = "meters">
</div>
<p id="info"></p>
<script type = "text/javascript">
    var vm = new Vue({
    el: '#computed_props',
    data: {
        kilometers : 0,
        meters:0
    },
    methods: {
    },
    computed :{
    },
    watch : {
        kilometers:function(val) {
            this.kilometers = val;
            this.meters = this.kilometers * 1000
        },
        meters : function (val) {
            this.kilometers = val/ 1000;
            this.meters = val;
        }
    }
    });
    // $watch 是一个实例方法
    vm.$watch('kilometers', function (newValue, oldValue) {
    // 这个回调将在 vm.kilometers 改变后调用
    document.getElementById ("info").innerHTML = "修改前值为: " + oldValue + "，修改后值为: " + newValue;
})
</script>
```
## 5、Vue.js 样式绑定
**Vue.js class**
class 与 style 是 HTML 元素的属性，用于设置元素的样式，我们可以用 v-bind 来设置样式属性。
Vue.js v-bind 在处理 class 和 style 时， 专门增强了它。表达式的结果类型除了字符串之外，还可以是对象或数组。

**class 属性绑定**
我们可以为 v-bind:class 设置一个对象，从而动态的切换 class:
```html
<!-- 实例中将 isActive 设置为 true 显示了一个绿色的 div 块，如果设置为 false 则不显示： -->
<div v-bind:class="{ active: isActive }"></div>
```
**以上实例 div class 为：**
```html
<div class="active"></div>
```
我们也可以在对象中传入更多属性用来动态切换多个 class 。

```html
<!-- text-danger 类背景颜色覆盖了 active 类的背景色： -->
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
```
以上实例 div class 为：
```html
<div class="static active text-danger"></div>
```
我们也可以直接绑定数据里的一个对象：
```html
<!-- text-danger 类背景颜色覆盖了 active 类的背景色： -->
<div id="app">
  <div v-bind:class="classObject"></div>
</div>
```
实例 3 与 实例 2 的渲染结果是一样的。
此外，我们也可以在这里绑定返回对象的计算属性。这是一个常用且强大的模式：
```javascript
new Vue({
  el: '#app',
  data: {
    isActive: true,
    error: {
      value: true,
      type: 'fatal'
    }
  },
  computed: {
    classObject: function () {
      return {
  base: true,
        active: this.isActive && !this.error.value,
        'text-danger': this.error.value && this.error.type === 'fatal',
      }
    }
  }
})
```
**数组语法**
我们可以把一个数组传给 v-bind:class ，实例如下：
```html
<div v-bind:class="[activeClass, errorClass]"></div>
```
以上实例 div class 为：
```html
<div class="active text-danger"></div>
```
我们还可以使用三元表达式来切换列表中的 class ：
```html
<!-- errorClass 是始终存在的，isActive 为 true 时添加 activeClass 类 -->
<div v-bind:class="[errorClass ,isActive ? activeClass : '']"></div>
```
**Vue.js style(内联样式)**
我们可以在 v-bind:style 直接设置样式：
```html
<div id="app">
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">菜鸟教程</div>
</div>
```
以上实例 div style 为：
```html
<div style="color: green; font-size: 30px;">菜鸟教程</div>
```
也可以直接绑定到一个样式对象，让模板更清晰：
```html
<div id="app">
  <div v-bind:style="styleObject">菜鸟教程</div>
</div>
```
v-bind:style 可以使用数组将多个样式对象应用到一个元素上：
```html
<div id="app">
  <div v-bind:style="[baseStyles, overridingStyles]">菜鸟教程</div>
</div>
```
*注意：当 v-bind:style 使用需要特定前缀的 CSS 属性时，如 transform ，Vue.js 会自动侦测并添加相应的前缀。*
## 6、Vue.js 事件处理器
