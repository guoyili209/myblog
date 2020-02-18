<p style="text-align:center;">Vue-router</p>
==

[toc]

## 1、安装
```sh
npm install vue-router --save
```
## 2、使用
<ol>
<li>导入路由对象，并且调用Vue.use(VueRouter)</li>
<li>创建路由实例，并且传入路由映射配置</li>
<li>在Vue实例中挂载创建的路由实例</li>
</ol>

```js
//配置路由相关的信息
import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from '../components/Home'
import About from '../components/about'

//1、通过Vue.use(插件),安装插件
Vue.use(VueRouter)

//2、创建VueRouter对象
const routes=[
  {
    path:'/home',
    component:Home
  },
  {
    path:'/about',
    component:About
  }
]
const router=new VueRouter({
  //配置路由和组件之间的应用关系
  routes
})
export default router
```
router-link组件：
```js
<template>
  <div id="app">
    <router-link to='/home' tag='button'>首页</router-link>
    <router-link to='/about' tag='button'>关于</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
```
## 3、动态修改router

