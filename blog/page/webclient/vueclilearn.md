<p style='text-align:center'>Vue-CLI脚手架教程</p>
==
[toc]

<strong>CLI(Command-Line Interface)命令行界面，俗称脚手架</strong>
## 1、安装
```sh
npm install -g @vue/cli //全局安装
```
查看版本
```sh
vue --servion
```
## 2、创建2.x版本cli
示例：
```sh
//桥接工具
npm install -g @vue/cli-init
# 'vue init' 的运行效果将会跟 'vue-cli@2.x' 相同
//初始化脚手架2
vue init webpack my-project
```
==cli安装不成功==
执行npm缓存清除
```sh
npm clean cache -force
```
如果命令强制清除缓存无效，可以手动删除缓存文件夹：
c:\users\administrator\appdata\roaming\npm-cache

## 3、创建3.x版本cli
```sh
vue create xxx;
```


