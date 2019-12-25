window.location.hash = "";
var files = {
    "Demo展示": [
        { "2D场景3D角色回合制游戏": "http://www.ylyz2019.top/game/realase/" },
        { "3D回合制游戏": "http://www.ylyz2019.top/game/release2/web/" }
    ],
    "游戏开发心得": [
        { "2D/Camera2D简单实现": "page/camera2d.html" },
        { "3D/3D中的简单数学": "page/3dmath.html" },
        { "3D/2D和3D场景的混合": "page/2d3dScene.html" },
        { "3D/4x4矩阵知识": "page/4x4matrix.html" },
        { "3D/Laya自定义shader": "page/layashader.html" },
        { "3D/WebGl渲染流程示例": "page/webglsimple.html" },
        { "3D/WebGL渲染管线与混合": "page/webglkonwledge.html" },
        { "3D/WebGL渲染到纹理": "page/webglrtt.html" }
    ],
    "特效示例": [
        { "雾化效果": "page/webglfx/fog.html" },
        { "基于Laya引擎实现的粒子效果": "page/webglfx/particle.html" }
    ],
    "Gulp":[
        {"Gulp教程":"page/webclient/learngulp.html"}
    ]
};
var panel = document.getElementById('panel');
var content = document.getElementById('content');
var viewer = document.getElementById('viewer');

var expandButton = document.getElementById('expandButton');
expandButton.addEventListener('click', function(event) {
    panel.classList.toggle('collapsed');
    event.preventDefault();
})

//ios8 workaround

if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
    viewer.addEventListener('load', function(event) {
        viewer.contentWindow.innerWidth -= 10;
        viewer.contentWindow.innerHeight -= 2;
    });
}

var container = document.createElement('div');
content.appendChild(container);

var button = document.createElement('div');
button.id = 'button';
button.textContent = 'View source';
button.addEventListener('click', function(e) {
    var array = location.href.split('/');
    array.pop();
    window.open('view-source:' + array.join('/') + '/' + selected + '.html');
}, false);
button.style.display = 'none';
// document.body.appendChild(button);

var divs = {};
var selected = null;

for (var key in files) {
    var section = files[key];
    var div = document.createElement('h2');
    div.textContent = key;
    container.appendChild(div);
    for (var i = 0; i < section.length; i++) {
        (function(file) {
            for (var key in file) {
                var name = key;
                var url = file[key];
                var div = document.createElement('div');
                div.className = 'link';
                div.textContent = name;
                div.addEventListener('click', function() {
                    // panel.classList.toggle('collapsed');
                    load(url);
                });
                container.appendChild(div);
                divs[url] = div;
                console.log(url);
            }
        })(section[i]);
    }
    var load = function(url) {
        if (selected !== null) divs[selected].className = 'link';
        divs[url].className = 'link selected';
        window.location.hash = url;
        viewer.src = url;
        viewer.focus();
        button.style.display = '';
    }
    if (window.location.hash !== "") {
        load(window.location.hash.substring(1));
    }
}