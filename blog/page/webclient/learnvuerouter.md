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
## 3、动态修改router（动态路由）
<small>路由配置文件index.js中设置动态路径</small>

```js
//配置路由相关的信息
import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

//1、通过Vue.use(插件),安装插件
Vue.use(VueRouter)

//2、创建VueRouter对象
const routes=[
  ...
  {
    path:'/user/:userId',
    component:User
  }
  ...
]
const router=new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode:'history'
})
export default router
```
<small>组件中增加动态数据</small>
```js
<template>
  <div id="app">
    ...
    <router-link v-bind:to="'/user/'+userId" tag='button'>用户</router-link>
    <router-view/>
    ...
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'lisi'
    }
  }
}
</script>

<style>

</style>

```

<small>跳转到对应页面</small>

```js
<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户内容</p>
        <h2>{{userId}}</h2>
    </div>
</template>
<script>
export default {
    name:"User",
    computed:{
        userId(){
            return this.$route.params.userId
        }
    }
}
</script>

<style scoped>

</style>>
```

## 4、路由懒加载（游戏中称为分包）
基本上一个路由对应一个js文件。
```js
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home=()=>import('../components/Home')
const About=()=>import('../components/About')
const User=()=>import('../components/User')
```

## 5、路由嵌套
<small>index.js路由配置文件</small>

```js
import VueRouter from 'vue-router';
import Vue from 'vue';

const Home=()=>import('../components/Home')
const HomeNews=()=>import('../components/HomeNews')
const HomeMessage=()=>import('../components/HomeMessage')
...
const routes=[
  ...
  {
    path:'/home',
    component:Home,
    children:[ //嵌套子路由
      {
        path:'',
        redirect:'news'//重定向
      },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]
  }
  ...
]
const router=new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode:'history'
})
export default router
···
```
<small>在需要嵌套的组件里边增加router-link组件进行跳转,router-view进行显示</small>
```js
<template>
    <div>
        ...
        <router-link to='news'>新闻</router-link>
        <router-link to='message'>消息</router-link>
        <router-view/>
    </div>
</template>
<script>
export default {
    name:"Home"
}
</script>

<style scoped>

</style>>
```
<small>被嵌套的子组件
HomeNews.vue</small>
```js
<template>
    <div>
        <h2>我是首页news</h2>
        <p>我是首页news</p>
    </div>
</template>
<script>
export default {
    name:"HomeNews"
}
</script>

<style scoped>

</style>
```
<small>HomeMessage.vue</small>
```js
<template>
    <div>
        <h2>我是首页message</h2>
        <p>我是首页message</p>
    </div>
</template>
<script>
export default {
    name:"HomeMessage"
}
</script>

<style scoped>

</style>
```

## 6、参数传递
两种方式传递:
<ol>
<li>router-link通过v-bind绑定属性。</li>
<li>html标签通过js函数使用$router.push()方法传递。</li>
</ol>

两种可传的参数类型：
**params的类型：**
 - 配置路由格式：/router/:id
 - 传递的方式：在path后面跟上对应的值
 - 传递后形成的路径：/router/123,/router/abc

**query的类型：**
  - 配置路由格式：/router，也就是普通配置
  - 传递的方式：对象中使用query的key作为传递方式
  - 传递后形成的路径：/router?id=123,/router?id=abc


```js
<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <!-- <router-link v-bind:to="'/user/'+userId" tag='button'>用户</router-link> -->
    <!-- <router-link v-bind:to="{path:'/profile',query:{name:'xyz',age:18,height:1.87}}" tag="button">档案</router-link> -->
    <button @click="userClick()">用户</button>
    <button @click="profileClick()">档案</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "lisi"
    };
  },
  methods: {
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'kobe',
          age:19,
          height:1.87
        }
      });
    }
  }
};
</script>

<style>
</style>

```

## 7、\$router和$route的区别
- $router是new VueRouter()的全局实例对象
- $route是当前活跃的那个路由对象

## 8、导航守卫
路由跳转的时候，改变网页标题。
路由配置里边增加meta元数据对象，然后通过router的beforeEach()方法进行设置。
```js
//1、通过Vue.use(插件),安装插件
Vue.use(VueRouter)

//2、创建VueRouter对象
const routes=[
  {
    path:'',
    redirect:'/home'//重定向
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    }
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'关于'
    }
  }
  ...
]
const router=new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode:'history'
})

//导航守卫
//前置守卫
router.beforeEach((to,from,next)=>{
  //从from跳转到to
  document.title = to.matched[0].meta.title;
  next();
})

//后置钩子（hook） 跳转后调用
router.afterEach((to,from)=>{
  console.log('after each')
})
```

还有路由独享守卫，组件内守卫，可以参考官网:
https://router.vuejs.org/zh/

## 9、vue生命周期和keep-alive
vue生命周期图示：
<img src='assets/vuelifecycle.png' alt='vue生命周期图示'/>

keep-alive创建后不销毁：
```js
 <keep-alive>
      <router-view />
  </keep-alive>
```
在keep-alive使用时，activated()和deactivated()有效。
```js
//Home.vue
<script>
export default {
    name:"Home",
    data(){
       return {path:'/home/news'}
    },
    activated(){
        this.$router.push(this.path);
    },
    beforeRouteLeave(to,from,next){//组件内路由
        console.log(this.$route.path);
        this.path=this.$route.path;
        next();
    }
}
</script>
```

# 10、通用组件开发（Tabbar开发例子）
组件树图示：
<img src='assets/tabbar1.png' alt='组件树'/>
App.vue
```js
<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>   <!--使用MainTabBar组件-->
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar'
export default {
  name: "App",
  components: {
    MainTabBar        //注册MainTabBar组件
  }
};
</script>

<style scoped>
@import "assets/css/base.css"; //动态引入外部css文件
</style>
```
MainTabBar.vue
```js
/*
* Author: guoyili
* email: guoyili209@gmail.com
* Date: 2020-02-20 10:02:37
*/
<template>
 <div>
     <tab-bar>
      <tab-bar-item link="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/tabbar1.png" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/tabbar2.png" alt=""/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      ...
    </tab-bar>
 </div>
</template>

<script scoped>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
 export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
 }
</script>

<style scoped>

</style>
```
TabBar.vue
```js
/*
* Author: guoyili
* email: guoyili209@gmail.com
* Date: 2020-02-19 16:02:25
*/
<template>
 <div id='tab-bar'>
     <slot></slot> //设置插槽，一遍动态放入TabBarItem组件
 </div>
</template>

<script scoped>
 export default {
    name:'TabBar'
 }
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
```
TabBarItem.vue
```js
/*
* Author: guoyili
* email: guoyili209@gmail.com
* Date: 2020-02-19 16:23:05
*/
<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- <div :class="{active:isActive}"> -->//动态绑定class
    <div :style="activeStyle"> //动态绑定style样式
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "TabBarItem",
  props: {    //设置需要传入的属性
    link: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
        // isActive: true
     };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link);
      //   this.$router.push()
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

/* .active {
  color: red;
} */
</style>
```

==webpack配置文件别名：==
webpack.base.conf.js中设置alias对象:
```js
module.exports = {
  ...
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'views': resolve('src/views')
    }
  }
  ...
```
资源引用中运用"~"符号使用别名：
```js
      <tab-bar-item link="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/tabbar1.png" alt="" /> //~assets 表示src/assets
        <img slot="item-icon-active" src="~assets/img/tabbar/tabbar2.png" alt=""/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
```
