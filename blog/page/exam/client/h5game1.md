<p style="text-align:center;">H5游戏高级开发（主程）面试/笔试1</p>
=

[toc]

## 1、let、var、const区别
let声明变量作用于块级作用域和子块级作用域，块级外面无法访问
```js
{
    let x;
    {
        console.log(x)
    }
    console.log(x)
}
console.log(x)//无法访问
```
const声明常量，声明后无法重新赋值

var声明变量作用于全局或者函数作用域，函数作用域中的变量可以泄露为全局全局变量

## 2、介绍一下游戏中mvc架构的做法，第三方框架或者你自己设计的

自己设计：
首先定义三个基类或抽象类，BaseController、BaseMode、BaseView

**BaseController**
定义两个属性dispatcher、socket，进行游戏系统层级的通信，比如主界面点击按钮进入某个系统的通信，和添加scoket通信命令码与回调函数绑定。
- GameDispatcher： 负责客户端全局事件通信
- CustomSocket：负责socket数据处理，缓存命令码和各系统回调函数的绑定

两个方法，listNotification（）添加系统层级的事件回调，registerMsgHandler（）添加socket命令回调
```ts
class BaseController{
    protected dispatcher:GameDispatcher;
    protected socket:CustomSocket;

    construcor(){
        this.dispatcher = GameDispatcher.getInstance();
         this.socket = CustomSocket.getInstance();
    }
    init() : void
      {
         this.listNotification();
         this.registerMsgHandler();
      }
      
      protected listNotification() : void
      {
      }
      
      protected registerMsgHandler() : void
      {
      }
}
```
**BaseMode**
不需要基类，由各模块mode直接继承至EventDispatcher类，使其具有事件派发能力。

**BaseView**
不需要基类，由各模块视图类直接继承编辑器的具体view。
<small>(只需另外设计一个容器类，对舞台上个各个view进行添加删除管理)</small>

子类的实现：
所有模块中
- control继承BaseController，包含一个view的实例对象，处理view中的交互逻辑；包含一个模块mode的单例对象，处理模块数据。

- view继承至具体的视图类（比如laya引擎的View（编辑器导出的某个视图））

- mode继承EventDispatcher，设计为单例模式，专门缓存并管理各模块的数据

## 3、介绍一下多人游戏的同步原理
### 1、帧同步
服务器在固定帧间间隔内，依次搜集所有客户端发送的操作指令消息，然后在当前帧结束时刻，转发所有消息给所有客户端。

细节：
服务器在逻辑帧内，可以根据具体设计做各种校验，以排除客户端的非法操作。

各个客户端在玩家操作时，可以立即响应，如果与稍后接受到服务端发送的指令消息不一样，则进行纠正，以服务器为准。

（核心表现：客户端同样的输入，同样的表现。）

指令是不能丢失的，丢失后就会有客户端计算的结果不一致了，所以网络传输必须使用有数据可靠性保证的传输方式，例如tcp，例如kcp。

为了应对玩家掉线的情况，服务器应该保存一场游戏中的指令，在玩家断线重连后发送到玩家终端。

适用实时要求高的竞技对战类游戏。

### 2、状态同步
服务器接收到客户端操作指令，然后计算出行为结果，然后以广播的方式下发游戏中各种状态，客户端收到状态后再根据状态显示内容。

状态同步其实是一种不严谨的同步。它的思想中，不同玩家屏幕上的表现的一致性并不是重要指标， 只要每次操作的结果相同即可。所以状态同步对网络延迟的要求并不高。像玩RPG游戏，200-300ms的延迟也可以接受。 但是在RTS游戏中，50ms的延迟也会很受伤。


适用于实时要求不高的回合制游戏中、RPG等游戏。

## 4、介绍一下websocket，在游戏中你是怎么去设计websoket通信模块的

WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。

WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

游戏中通信设计，客户端一般是自定义socket模块，提供一个添加服务器响应的指令码和回调函数绑定的接口，供各个游戏系统初始化回调响应。

再提供一个请求服务器指令码和传递参数绑定的接口，供各个游戏系统向服务器发送数据。

soket模块内部设计，消息体设计，数据长度(uint32)+指令码(uint16)+游戏数据

游戏数据设计，和服务器定好读取的数据类型，按照对应数据协议规则进行读取。
```ts
class CS_LoginPacket {
    userName: string;
    pw: string;
    testArr = [];
    defines = [];
    constructor() {
        this.defines = [
            ["userName", DataType.STRING],
            ["pw", DataType.STRING],
            ["testArr", DataType.UINT8, DataType.VECTOR]
        ]
    }
}
```
