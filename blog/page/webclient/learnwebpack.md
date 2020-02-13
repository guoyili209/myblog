<p style="text-align:center">Webpack教程</p>
==

[toc]

##1、安装
**全局(vue cli2依赖该版本)**
```sh
npm install webpack@3.6.0 -g
```
**局部**
<small>(-save-dev开发时依赖，项目打包后不需要继续使用)</small>
```sh
cd 对应目录
npm install webpack@3.6.0 -save-dev
```
<strong>为什么全局安装后，还需要局部安装？</strong>
- 在终端直接执行webpack命令，使用的全局安装的webpack
- 当在package.json中定义了script时，其中包含了webpack命令，那么使用的是局部webpack

## 2、使用和打包
创建webpack.config.js配置文件：
```js
const path=require('path');

module.exports={
    entry:'./src/main.js',//配置入口
    output:{//配置出口和打包文件
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}
```
创建package.json文件
```sh
npm init
```
配置package.json，在script中增加脚本：
```json
{
  "name": "webpacktest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack" //增加build脚本
  },
  "author": "",
  "license": "ISC"
  ...
}

```
安装局部webpack：
```sh
npm install webpack@3.6.0 -save-dev //开发依赖
```
使用局部webpack打包：
```sh
npm run build
```
## 3、loader
官方参考需要的loader地址：https://www.webpackjs.com/loaders/

需要注意的点：
**处理css**
入口文件要引用相应的文件，比如css：
```js
...
require('./css/normal.css')
...
```
然后webpack.config.js中增加配置：
```js
const path=require('path');

module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    //增加css打包配置，具体查看官网对应loader的例子
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }
        ]
      }
}
```
**处理图片**
```js
...
output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'dist/'//添加公共路径，所有url读取都会在前面加上这个路径
    },
...
```
<small>小于8192会转换成base64，大于将用file-loader处理(本身是url-loader)</small>
```js
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name:'img/[name].[hash:8].[ext]'//自定义文件发布文件夹和文件名
                }
              }
            ]
          }
```
<strong>es6→es5</strong>
<small>安装babel</small>
```sh
npm install -save-dev babel-loader@7 babel-core babel-preset-es2015
```
<small>webpack.config.js中添加规则</small>
```js
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          }
```
## 4、webpack配置vue
<small>安装vue</small>
```sh
npm install vue -save //运行时依赖
```
<small>添加resolve（安装的vue默认指向runtime版本，不包含编译器）</small>
```
module:{
  ...
},
resolve:{
      //alias:别名
      alias:{
        'vue$':'vue/dist/vue.esm.js'
      } 
    }
```
```js
//使用vue进行开发
import Vue from 'vue';

const app = new Vue({
    el:'#app',
    data:{
        message:'hello world'
    }
})
```
```html
        <div id='app'>
            <h2>{{message}}</h2>
        </div>
```

<strong>组件化开发vue</strong>
安装vue-loader和vue-template-compiler
```sh
npm install vue-loader vue-template-compiler -save-dev //开发时依赖
```
配置webpack.config.js:
```js
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}
```
vue-loader官方参考:https://vue-loader.vuejs.org/guide/#manual-setup

示例：
App.vue

```html
<template>
    <div class='title'>
    <h2>{{message}}</h2>
    </div>
</template>
<script>
// import Cpn from './Cpn.vue';嵌套其他组件
export default {
    name:"App",
    components:{
        //嵌套其他组件
        // Cpn
    },
    data(){
        return {message:'hello world'};
    },
    methods:{
        btnClick(){

        }
    }
}
</script>
<style scoped>
.title{
    color: yellow;
}
</style>
```
使用如下：
```js
//使用vue进行开发
import Vue from 'vue';
import App from './js/vue/App.vue';

const app = new Vue({
    el:'#app',
    template:'<App/>',
   components:{
       App
   }
})
```
```html
<html>
<body>
...
<div id='app'>
</div>
...
</body>
</html>
```

## 5、Webpack插件
示例：自带BannerPlugin插件的使用
```js
const webpack=require('webpack');
...
resolve:{
      //alias:别名
      alias:{
        'vue$':'vue/dist/vue.esm.js'
      } 
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin(),
      new webpack.BannerPlugin("author guoyili")//横幅插件
    ]
```
**HtmlWebpackPlugin插件,生成服务器访问的html**
安装
```sh
npm install --save-dev html-webpack-plugin
```
配置
```js
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var webpackConfig = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({template:'index.html'})]//根据index.html模板生成
};
```
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>webpack App</title>
  </head>
  <body>
    <script src="index_bundle.js"></script>
  </body>
</html>
```
**UglifyjsWebpackPlugin插件压缩js**
```sh
npm i -D uglifyjs-webpack-plugin
```
指定版本(与cli2保持一致)：
```sh
npm install uglifyjs-webpack-plugin@1.1.1 -save-dev
```
配置
```js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
...
plugins: [
      ...
      new UglifyJsPlugin()
      ...
    ]
```
**webpack-dev-server插件搭建本地服务器**
安装
```sh
npm install -save-dev webpack-dev-server@2.9.1
```
devserver属性设置选项：
* contentBase:为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
* port:端口号
* inline:页面实时刷新
* historyApiFallback:在SPA页面中，依赖HTML5的history模式

webpack.config.js配置：
```js
module:{
  ...
},
devServer{
  contentBase:'./dist',
  inline:true
}
```
在package.json中添加执行脚本：
```js
...
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "dev":"webpack-dev-server -open"//使用npm run dev(这样会优先在本地node模块中查找)
  },
  ...
```

## 6、Webpack配置文件分离
安装webpack-merge模块
```sh
npm install webpack-merge -save-dev//运行时依赖
```
分离配置文件，示例：
base.config.js
```js
const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'bundle.js'
        // publicPath:'dist/'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }
          ]
         },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name:'img/[name].[hash:8].[ext]'
                }
              }
            ]
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
    },
    resolve:{
      //alias:别名
      alias:{
        'vue$':'vue/dist/vue.esm.js'
      } 
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin(),
      new webpack.BannerPlugin("author guoyili"),
      new HtmlWebpackPlugin({template:'index.html'}),
    //   new UglifyJsPlugin() 
    ]
    // devServer:{
    //   contentBase:'./dist',
    //   inline:true
    // }
}
```
dev.config.js:
```js
const webpackMerge = require('webpack-merge');
const baseconfig = require('./base.config');

module.exports = webpackMerge(baseconfig, {
    devServer: {
        contentBase: './dist',
        inline: true
    }
});
```
alpha.config.js:
```js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge=require('webpack-merge');
const baseconfig=require('./base.config');

module.exports=webpackMerge(baseconfig,{
    plugins: [
      new UglifyJsPlugin() 
    ]
});
```
配置package.json文件：
```js
...
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config ./build/prod.config.js",
    "dev": "webpack-dev-server --open --config ./build/dev.config.js"
  },
...
```
npm run build和npm run dev指向对应的配置文件;









