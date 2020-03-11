<p style="text-align:center;">ES6相关</p>
==

[toc]

##1、import 和 export
**export:**
导出模块对外的接口。
示列：
```js
export default xxx;//import导入的时候可以起别名
```
```js
export xxx;//import导入时不能起别名
```
**import:**
导入对应的的模块。

示例：
<ol>
<li>在html中引入两个js文件，并且类型设置为module</li>
```html
<script src="info.js" type="module"></script>
<script src="main.js" type="module"></script>
```
<li>import导入模块中的内容，比如mian.js代码</li>
```js
import {name,age,height} from "./info.js"
console.log(name,age,height);
```
<li>如果要导入某个模块中所有信息
<ul><li>通过*可以导入模块中所有的export变量</li>
<li>但是通常情况下我们需要给*起一个别名，方便后续使用</li>
```js
import * as xxx from "xx.js"
```
</ul>
</li>

## 2、Promise
基本用法
//resolve，reject本身它们又是函数
```js
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },1000)
}).then(()=>{
  console.log('hello world!');
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
        // reject();
    })
  }).then(res=>{
      console.log('hello js!');
  },err=>{
      console.log('err');
  });  
});
```
错误处理两种方式，Promise.reject()和catch()
```js
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },1000)
}).then(()=>{
  console.log('hello world!');
  return Promise.reject();
  }).then(res=>{
      console.log('hello js!');
  }).catch(err=>{
      console.log(err);
  });  
});
```
**Promise.all()使用**
<small>Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。</small>
<small>示例1：</small>

```js
let p1 = new Promise((resolve, reject) => {
  resolve('成功了')
})

let p2 = new Promise((resolve, reject) => {
  resolve('success')
})

let p3 = Promse.reject('失败')

Promise.all([p1, p2]).then((result) => {
  console.log(result)               //['成功了', 'success']
}).catch((error) => {
  console.log(error)
})

Promise.all([p1,p3,p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)      // 失败了，打出 '失败'
})
```
<small>示例2：</small>

```js
let wake = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time / 1000}秒后醒来`)
    }, time)
  })
}

let p1 = wake(3000)
let p2 = wake(2000)

Promise.all([p1, p2]).then((result) => {
  console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
}).catch((error) => {
  console.log(error)
})
```
_需要特别注意的是，Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，即p1的结果在前，即便p1的结果获取的比p2要晚。这带来了一个绝大的好处：在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，使用Promise.all毫无疑问可以解决这个问题。_

**Promise.race的使用**
<small>顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。</small>

```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  },1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 500)
})

Promise.race([p1, p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)  // 打开的是 'failed'
})
```
