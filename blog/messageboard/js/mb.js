function submitMessage() {
    $.get("/msgboard?page=1", function (data, status) {
        console.log(data + ";" + status);
        var objdata = JSON.parse(data);
        for (var i = 0; i < objdata.length; i++) {
            var date = new Date(objdata[i].time);
            vm.sites.unshift({ msg: objdata[i].msg, ymd: date.toLocaleDateString(), time: date.toLocaleTimeString(), ipregion: objdata[i].ipregion });
        }
    });
    $.get('/msgpagecount', function (data, status) {
        console.log(data + ";" + status);
        var pagecount = data;
        for (var i = 0; i < data; i++) {
            vm.pages.push(i + 1);
        }
    });
    $('#submit_btn').click(function (e) {
        var str = $('#form_message').val();
        if (str == "") {
            return alert("请输入留言内容!");
        }
        $('#form_message').val("");
        $.post("/msgboard",
            {
                msg: str
            },
            function (data, status) {
                var objdata = JSON.parse(data);
                var date = new Date(objdata.time);
                vm.sites.unshift({ msg: str, ymd: date.toLocaleDateString(), time: date.toLocaleTimeString(), ipregion: objdata.ipregion });
            });

    });
}
$(document).ready(function () {
    submitMessage();
})