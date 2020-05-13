<p style="text-align:center;">Web客户端面试/笔试2</p>
=

[toc]

## 1、变量/函数提升
考点全局/局部提升
```js
console.log(a); //undefined
var a=12;
function fn(){
    console.log(a); 
    var a=13;
}
fn(); //undefined
console.log(a); //12
```
```js
var foo=1;
function bar(){
    if(!foo){
        var foo=10;
    }
    console.log(foo);
}
bar(); //10
```
```js
if(!("a" in window)){
    var a=1;          //不管条件成不成立都要提升变量
}
console.log(a);//undefined
```
```js
var a=4;
function b(x,y,a){
    console.log(a);//3
    arguments[2]=10;
    console.log(a);//10
}
a=b(1,2,3);
console.log(a); //undefined
```
## 2、js严格模式和arg映射机制
==严格模式中，arguments对象是传入函数内实参列表的静态副本；非严格模式下，arguments对象里的元素和对应的实参是指向同一个值的引用==
arg和形参之间的映射是以arg的索引为基础完成的
```js
function fn(x,y){
    x=20;
    arguments[0]=100;
    y=200;
    console.log(arguments[1]);//undefined
    console.log(x); //100
}
fn(10)
```
arg映射建立在函数执行后，形参赋值之时。
```js
function fn(x,y){
    y=200;
    console.log(arguments[1]);//undefined
    arguments[1]=300;
    console.log(y);//200
}
fn(10)
```
以上例子都是在非严格模式下，所以有映射，即arguments对象里的元素和对应的实参是指向同一个值的引用。
严格模式：
在当前作用域第一行加 use strict，当前作用域开启严格模式；
全局开启，则在文件第一行加use strict。

==严格模式下不能使用未声明的变量。==
为什么用严格模式：
>1、消除代码运行的一些不安全之处，保证代码运行的安全；
2、提高编译器效率，增加运行速度；
3、为未来新版本的Javascript做好铺垫。

团队协作时，一般在自己代码中写一个闭包，然后只在当前作用域下启用，比如：
```js
~function(){
    "use strict"
    //...
}()
```
3、逻辑或逻辑与
```js
var a=1||2;//1
var b=0||2;//2
var c=1&&2;//2
var d=0&&2;//0
```
&&优先级高于||
```js
console.log(0||1&&2||0||3&&2||1) //2
```
4、堆栈内存释放
```js
var a=9;
function fn(){
    a=0;
    return function(b){
        return b+a++;
    }
}
var f=fn();
console.log(f(5)); //5
console.log(fn()(5));//5
console.log(f(5));//6
console.log(a);//2
```
```js
var ary=[1,2,3,4];
function fn(ary){
    ary[0]=0;    
    ary=[0];
    ary[0]=100;
    return ary;
}
var res=fn(ary);
console.log(ary);//[0,2,3,4]
console.log(res);//[100]
```
形参是函数的私有变量，变量存在栈中，值存在堆中，变量指向堆中的值。
```js
function fn(i){
    return function(n){
        console.log(n+(i++)) //后置递增递减，表达式计算完，最后再递增或递减
    }
}
 var f=fn(10);
 f(20); //30
 fn(20)(40);//60
 fn(30)(50);//80
 f(30);//41
```
以下考察this指向问题(反正谁调用函数，this就指向谁)
```js
var num=10;
var obj={num:20};
obj.fn=(function(num){
    this.num=num*3;
    num++;
    return function(n){
        this.num+=n;
        num++;
}
})(obj.num);
var fn=obj.fn;
fn(5); //this指向全局调用对象
obj.fn(10);//this指向调用实例对象
console.log(num,obj.num); //65 30
```
## 5、循环绑定
使用闭包
```js
for(var i=0;i<5;i++){
    input[i].onClick=(function(i){
        return function(){
            alert(i);
        }
    })(i);
}
```
使用es6
```js
for(let i=0;i<5;i++){
    input[i].onClick=function(i){
        alert(i);
    }
}
```
## 6、原型链重定向
```js
function Fn(){
    var n=10;
    this.m=20;
    this.aa=function(){console.log(this.m)}
}
Fn.prototype.bb=function(){console.log(this.n)}
var f1=new Fn;
Fn.prototype={
    aa:function(){console.log(this.m+10)}
}
var f2=new Fn;
console.log(f1.constructor); //Fn
console.log(f2.constructor); //Object
f1.bb(); //undefined
f1.aa();  //20
f2.bb(); //f2.bb is not a function报错
f2.aa(); //20
f2.__proto__.aa(); //NaN
```

## 7、数组去重以及内置类方法扩展
```js
function unique(ary){
    var obj={};
    for(var i=0;i<ary.length;i++){
        var item=ary[i];
        if(obj.hasOwnProperty(item)){
            ary[i]=ary[ary.length-1];
            ary.pop();//ary.length--
            i--;
            continue;
        }
        obj[item]=item;
    }
    return ary;
}
```
Array.prototype.myUnique=function(){
    //...
}
## 8、document.parentNode和docment.parentnode的区别？
一个null,一个是undefined;
parentNode有这个属性，但是没有值，因为document没有父节点。
parentnode没有这个属性，所以是undefined（没有声明）

## 9、怎么规避多人开发函数重名的问题？
单例、模块化(AMD、CMD、CommonJS、es6的模块化)等

## 10、js如何实现面向对象中的继承？
原型继承、es6的class extends

## 11、你理解的闭包作用是什么，优缺点？
我理解的闭包是一个函数可以访问另外一个函数的作用域，它可在js中可以做很多事情，比如可以实现面向对象中的私有变量，
节流、防抖函数均使用闭包，循环绑定数组的值等等。
##趣味题：
有这样一个村庄，村里的每一个丈夫都背着妻子偷情，村里的每个妻子都知道除了自己丈夫以外的男人偷情，村里有一个规定，如果妻子知道自己丈夫偷情必须当天处决。有一天村里的女头领说村里有一个丈夫偷情，接下来会发生什么？


## 12、js中Array的常用方法
concat()	连接两个或更多的数组，并返回结果。
every()	检测数值元素的每个元素是否都符合条件。
filter()	检测数值元素，并返回符合条件所有元素的数组。
find()	返回符合传入测试（函数）条件的数组元素。
findIndex()	返回符合传入测试（函数）条件的数组元素索引。
forEach()	数组每个元素都执行一次回调函数。
indexOf()	搜索数组中的元素，并返回它所在的位置。
join()	把数组的所有元素放入一个字符串。
map()	通过指定函数处理数组的每个元素，并返回处理后的数组。
pop()	删除数组的最后一个元素并返回删除的元素。
push()	向数组的末尾添加一个或更多元素，并返回新的长度。

## 13、js中使用new时发生了哪些事情
会做4步操作
```js
var obj  ={};
obj.__proto__ = CO.prototype;
CO.call(obj);
return obj;
```

## 14、js 中 call()、apply()、bind() 的用法
```js
var name='小王',age=17;
var obj={
    name:'小张',
    objAge:this.age,
    myFun:function(fm,t){
        console.log(this.name+"年龄"+this.age,"来自"+fm+"去往"+t);
    }
}
var db={
    name:'德玛',
    age:99
}

obj.myFun.call(db,'成都','上海')；　　　　 // 德玛 年龄 99  来自 成都去往上海
obj.myFun.apply(db,['成都','上海']);      // 德玛 年龄 99  来自 成都去往上海  
obj.myFun.bind(db,'成都','上海')();       // 德玛 年龄 99  来自 成都去往上海
obj.myFun.bind(db,['成都','上海'])();　　 // 德玛 年龄 99  来自 成都, 上海去往 undefined
```
区别:
call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：

call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,'成都', ... ,'string' )。

apply 的所有参数都必须放在一个数组里面传进去 obj.myFun.apply(db,['成都', ..., 'string' ])。

bind 除了返回是函数以外，它 的参数和 call 一样。

## 15、箭头函数和普通函数的区别
1、this指向不同
箭头函数在定义生命时，就确定了this指向；
普通函数在实际调用的时候，才确定this指向；
2、call、apply、bind无法改变箭头函数this指向。
3、箭头函数全是匿名函数。
4、不能用作构造函数。
5、箭头函数没有arguments对象，可以用rest参数...解决。
6、不能Generator函数，不具有prototype原型对象，不具有super，不具有new.target。