<p style="text-align:center;">TypeScript相关</p>
=

[toc]

## 1、ts与js互调
参考：http://developer.egret.com/cn/github/egret-docs/Engine2D/callJS/tsCallJs/index.html
### 1.说明
- ts 是 js 的超集，因此只要是 js 与 js 可以互相调用的，ts 均可以调用，只不过需要增加声明来解决编译时报错。(declare)

- ts 最终生成的文件为 js，因此 js 调用 ts 其实就是 js 调用 js（ts 生成的 js 文件）。

### 2.ts调用js

**步骤** 
- 找到 js 调用 js 的方法。

- 增加方法调用的声明。

**示例**
- js 内的方法
```js
function callJsFunc(msg) {
    console.log("msg from egret : " + msg);
}
```
- ts 内声明
```ts
declare function callJsFunc(msg:string);//可以放在 ts 文件内（建议在顶部或者底部，中间的没试过）或者单独放到一个 .d.ts 文件中，请不要放在其他类型的文件内。msg 类型根据函数体判断。
```
- ts 内调用
```ts
callJsFunc("hello js");
```
>总结：在 js 调用 js 的基础上增加声明。其他的比如变量等，也是按上面步骤来实现。
### 3.js 调用 ts
js 调用 ts 其实就是 ts 调用 ts，由于 ts 调用 ts 可能会有同模块下的省略写法，因此只要使用不同模块下的调用来写即可。
**步骤**
- 找到非同一模块下 ts 的调用（比如 example.A.CallEgretFunc("hello")）。

- 完全按上面调用的方式来写 (比如上面的 example.A.CallEgretFunc("hello"))。

**示例**
- ts 内的方法
```ts
module exampleA {
    export class A {
        public callEgretMethod(msg:string):void {
            console.log("method msg from js : " + msg);
        }
        public static CallEgretFunc(msg:string):void {
            console.log("static msg from js : " + msg);
        }
    }
}
```
- 非同一模块下 ts 调用
```ts
module exampleB {
    export function b() {
        //调用方法
        var a:exampleA.A = new exampleA.A();
        a.callEgretMethod("method");
        //调用静态函数
        exampleA.A.CallEgretFunc("function");
    }
}
```
- js 内调用
```js
var a = new exampleA.A();//去掉 a 的类型
a.callEgretMethod("method");
exampleA.A.CallEgretFunc("function");
```
>总结：相当于非同一个模块下的 ts 调用 ts。其他的比如变量等，也是按上面步骤来实现。

## 2、生成 .d.ts
参考：http://developer.egret.com/cn/github/egret-docs/extension/threes/dts/index.html
**说明**
- 什么是 “.d.ts” 文件，简单一点讲，就是你可以在 ts 中调用的 js 的声明文件，类似c++中的 “.h” 头文件，不过和 “.h” 不一样的是，它完全是个声明文件，没有任何实现代码。

- 在 “.d.ts” 的每一个段落中，除了最外层为 interface 外，其他的都需要 declare 关键词，而且这个词只在最外层出现。比如：

```ts
declare class A {
}
interface I {
}
declare module b {
    var b2: string;
    function b3(): void;
    class B2 {
    }
    interface I1 {
    }
}
declare function f(): void;
declare var aa: string;
```
**写法**
下面我们介绍下 “.d.ts” 的几种声明的写法。

1、模块 module

- 单模块声明
```ts
module a {
}
```
- 多模块声明。有2种写法，比如下面的声明模块a，包含模块b。
```ts
declare module a.b {
}
```
或者
```ts
declare module a {
    module b {
    }
}
```
2、类 class
```ts
declare class A1 {
}
declare module m {
    class A2 {
    }
}
```
**接口 interface**
```ts
interface I1 {
}
declare module m {
    interface I2 {
    }
}
```
>接口和类的区别是，接口是不可以 new 出来的。class 和 interface 只能包含函数和变量，不能再有 module、class、interface。

**函数**
```ts
declare function f1(): void;
declare module m {
    function f2(): void;
}
declare class A {
    f(): void;
    static f(): void;
}
```
>函数体内不能再声明其他，其实也很明显，没有地方可以嵌套。

**变量**
```ts
declare var a1: string;
declare module m {
    var a2: string;
}
declare class A {
    a2: string;
    static a2: string;
}
```
>和函数体一样，不可以嵌套。

**特殊变量**
为什么要把这个单独拿出来，因为这个其实和普通的变量不太一样，它的声明类似 class 和 interface，如果是在纯 ts（非”.d.ts”）中写的话，它是和 interface 一样，不会生成到最终的 js 文件中去。

写法
```ts
declare var AAA: {
    (id:number):any;        //直接调用
    new (s:string):any;     //类似 class 的 new
    f(s:string):void;        //类似 class 的静态函数
    a:number;                //类似 class 的静态变量
};
```
调用
```ts
AAA(1);
new AAA("egret");
AAA.f("egret");
```
>特殊变量中不能嵌套 module、class、interface。

**示例**

代码
```js
//注册、登录、切换帐户、唤醒游戏时传入玩家账户信息
TDGA.Account({
    accountId : '1234256',
    level : 12,
    gameServer : '北京1',
    accountType : 1,
    age : 24,
    accountName : '昵称',
    gender : 1
});
//单独对帐户的某种信息做修改，可以单独调用以下对应方法
TDGA.Account.setAccountName('昵称')
TDGA.Account.setAccountType(2)
TDGA.Account.setLevel(12)
TDGA.Account.setGender(1)
TDGA.Account.setAge(25)
TDGA.Account.setGameServer('死亡之城')
```
分析
- 从整体来看很好判断除了第一个外，其他的几个调用的都是函数体。

- 由于 TDGA.Account 有2层，因此 TDGA 可以使用 module 来定义。

- 下面就是一个重点了，Account 到底是什么。类的写法是 new Account()，而接口是不可以通过名称来初始化的，因而其实这2种方式的定义都与调用的 api 不吻合。现在如果大家熟悉最后一种定义（特殊变量），其实就非常简单了。

最后在 .d.ts 中的写法如下
```ts
declare module TDGA {
    var Account: {
        (id: Object): any;
        setAccountName(p_value: string): void;
        setAccountType(p_value: number): void;
        setLevel(p_value: number): void;
        setGender(p_value: number): void;
        setAge(p_value: number): void;
        setGameServer(p_value: string): void;
    };
}
```