var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var geoip = require('geoip-lite');
var fs = require('fs');
var regionCode;
fs.readFile('serverconfig/regioncode.json', function (err, data) {
    if (err) {
        throw err;
    }
    var code = data.toString();
    code = JSON.parse(code);
    regionCode = code;
});

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
console.log(__dirname+"/assets/");
app.use('/', express.static("D:/myblog-vue/myblog-vue/myblog/dist"));
// console.log(__dirname+'/web/')
app.get('/index.html', function (req, res) {
    res.sendFile("index.html")
})
app.get('/msgboard', function (req, res) {
    //输出json格式
    var response = {
        "page": req.query.page
    };
    console.log(response);
    returnMsg(response.page, res);
})
app.get('/msgpagecount', function (req, res) {
    returnPageCount(res);
});

app.post('/msgboard', urlencodedParser, function (req, res) {
    console.log(req.body)
    // 输出 JSON 格式
    var response = {
        "msg": req.body.msg
    };
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    var geo = geoip.lookup(ip);
    var date = Date.now();
    var obj = {};
    if (!geo) {
        obj = { ipregion: "未知", time: date };
        res.end(JSON.stringify(obj));
        insertMsg(response.msg, "未知", date);
    } else {
        obj = { ipregion: regionCode[geo.region], time: date };
        res.end(JSON.stringify(obj));
        insertMsg(response.msg, regionCode[geo.region], date);
    }
})


var url = "mongodb://localhost:27017/msgboard";
//创建数据库和集合
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log("数据库已创建!");
    var dbo = db.db("msgboard");
    dbo.createCollection('msg', function (err, res) {
        if (err) throw err;
        console.log("创建集合!");
        dbo.collection('msg').createIndex({ 'time': -1 }, null, function (err, results) {
            if (err) {
                console.log('msg createindex err' + err.message);
            } else {
                console.log('create index result:' + results);
            }
            db.close();
        });
    });
});
//插入数据
var insertMsg = function (msg, ipregion, time) {
    var obj = {
        time: time,
        ipregion: ipregion,
        msg: msg
    };
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("msgboard");
        dbo.collection("msg").insertOne(obj, function (err, res) {
            if (err) throw err;
            console.log("文档插入成功");
            db.close();
        });
    });
}
//返回数据
var returnMsg = function (page, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("msgboard");
        dbo.collection("msg").find().skip(10 * (page - 1)).limit(10).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.end(JSON.stringify(result));
            db.close();
        });
    });
}

//返回总页数
var returnPageCount = function (res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("msgboard");
        dbo.collection("msg").find().count(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.end(JSON.stringify(Math.ceil(result / 10)));
            db.close();
        });
    });
}

var localIP = getIPAdress();
console.log("本机IP:" + localIP);
var server = app.listen(80, localIP, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为http://" + host + ":" + port);
})

function getIPAdress() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}  