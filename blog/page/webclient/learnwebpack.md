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
## 2、使用

