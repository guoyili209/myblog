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
