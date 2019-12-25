Vue.component('v_leavemessageboard', {
    props: ['message'],
    template: '<div class="form-group">' +
        '<label>{{message.ymd}} {{message.time}}  {{message.ipregion}}网友：</label>' +
        '<p class="border">{{message.msg}}</p>' +
        '</div>' +
        '<span></span>'

});
Vue.component('v_pagination',{
    props:['pagecount'],
    template:'<li class="page-item active"><a class="page-link" href="#">{{pagecount}}</a></li>'
            
});
var vm = new Vue({
    el: '#leaveMessage',
    data: {
        sites: [],
        pages:[]
    }
});