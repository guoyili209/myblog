<p style="text-align:center;">CSS相关</p>
=

[toc]

1、解决浮动产生的高度塌陷
```css
.clearfix:after{
    content:"";
    display:block;
    clear:both;
}
//兼容ie6
.clearfix{
    zoom:1;
}
```

2、文字滚动动画代码
```js
    $('.noticlist').animate({
        marginTop: "-120px"
    }, 500, function() {
        $(this).css({
            marginTop: "0px"
        }).find("a:first").appendTo(this);
    })
```