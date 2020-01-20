<p align='center'>Node.js教程</p>
=

[toc]

## 1、NPM 使用介绍
NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
* 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
* 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
* 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。命令如下，出现版本提示表示安装成功:

```javascript
$ npm -v
2.3.0
```
如果你安装的是旧版本的 npm，可以很容易得通过 npm 命令来升级，命令如下：
```javascript
$ sudo npm install npm -g
/usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
npm@2.14.2 /usr/local/lib/node_modules/npm
```
如果是 Window 系统使用以下命令即可：
```javascript
npm install npm -g
```
*使用淘宝镜像的命令：*
```javascript
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
**使用 npm 命令安装模块**
npm 安装 Node.js 模块语法格式如下：
```javascript
$ npm install <Module Name>
```
以下实例，我们使用 npm 命令安装常用的 Node.js web框架模块 express:
```javascript
$ npm install express
```
安装好之后，express 包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 require('express') 的方式就好，无需指定第三方包路径。
```javascript
var express = require('express');
```
**全局安装与本地安装**
npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如
```javascript
npm install express          # 本地安装
npm install express -g   # 全局安装
```
如果出现以下错误：
```javascript
npm err! Error: connect ECONNREFUSED 127.0.0.1:8087 
```
解决办法为：
```javascript
$ npm config set proxy null
```
**本地安装**
* 1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
* 2. 可以通过 require() 来引入本地安装的包。
**全局安装**
* 1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
* 2. 可以直接在命令行里使用。

如果你希望具备两者功能，则需要在两个地方安装它或使用 npm link。
接下来我们使用全局方式安装 express
```javascript
$ npm install express -g
```
**查看安装信息**
你可以使用以下命令来查看所有全局安装的模块：
```javascript
$ npm list -g
├─┬ cnpm@4.3.2
│ ├── auto-correct@1.0.0
│ ├── bagpipe@0.3.5
│ ├── colors@1.1.2
│ ├─┬ commander@2.9.0
│ │ └── graceful-readlink@1.0.1
│ ├─┬ cross-spawn@0.2.9
│ │ └── lru-cache@2.7.3
……
```
如果要查看某个模块的版本号，可以使用命令如下：
```javascript
$ npm list grunt
projectName@projectVersion /path/to/project/folder
└── grunt@0.4.1
```
**使用 package.json**
package.json 位于模块的目录下，用于定义包的属性。接下来让我们来看下 express 包的 package.json 文件，位于 node_modules/express/package.json 内容：
**Package.json 属性说明**
name - 包名。
version - 包的版本号。
description - 包的描述。
homepage - 包的官网 url 。
author - 包的作者姓名。
contributors - 包的其他贡献者姓名。
dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
keywords - 关键字
**卸载模块**
我们可以使用以下命令来卸载 Node.js 模块。
```javascript
$ npm uninstall express
```
卸载后，你可以到 /node_modules/ 目录下查看包是否还存在，或者使用以下命令查看：
```javascript
$ npm ls
```
**更新模块**
我们可以使用以下命令更新模块：
```javascript
$ npm update express
```
**搜索模块**
使用以下来搜索模块：
```javascript
$ npm search express
```
**创建模块**
创建模块，package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。
```javascript
$ npm init
```
接下来我们可以使用以下命令在 npm 资源库中注册用户（使用邮箱注册）：
```javascript
$ npm adduser
Username: mcmohd
Password:
Email: (this IS public) mcmohd@gmail.com
```
接下来我们就用以下命令来发布模块：
```javascript
$ npm publish
```
如果你以上的步骤都操作正确，你就可以跟其他模块一样使用 npm 来安装。
**版本号**
使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码，这里简单介绍一下。
语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。
* 如果只是修复bug，需要更新Z位。
* 如果是新增了功能，但是向下兼容，需要更新Y位。
* 如果有大变动，向下不兼容，需要更新X位。

版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如"argv": "0.0.x"表示依赖于0.0.x系列的最新版argv。
NPM支持的所有版本号范围指定方式可以查看官方文档。
**NPM 常用命令**
