/**
 * Created by Administrator on 2017/4/10 0010.
 */
$(document).ready(function () {
    load();
});
function load(){
    var date = GetDateStr(0);
    $.ajax({
        url:"../php/cooker_index.php",
        data:{
            date:date
        },
        type:'POST',
        success: function (msg) {
            var data = JSON.parse(msg);
            len = data.length;
            for(var i=0;i<len;i++) {
                for(var j=1;j<11;j++) {
                    if(data[i]['id']==j) {
                        var txt=
                            "<tr class='info'>" +"<td class='key'>" +data[i]['id']+"</td>" +"<td class='name'>"+data[i]['name']
                            +"</td>" +"<td class='price'>"+data[i]['price'] + "</td>" +"<td class='amount'>" +data[i]['amount']
                            + "</td>" +"<td><button class='btn btn-danger'>"+data[i]['status']+"</button></td>"+
                            "</tr>";
                        $(".trow"+j).after(txt);
                    }
                }
            }
            $(".btn").unbind("click").on('click', change_sta);
            tag();
        }
    });
}
/*未完成*/
function tag(){
    var _tag = $('.btn').html();
    if(_tag=="已做"){
        $(this).removeClass('btn-danger').addClass('btn-success');
    }
}
function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;//获取当前月份的日期
    var d = dd.getDate();
    if (d < 10) {
        d = '0' + d;
    }
    if(m<10) {
        m = '0' + m;
    }
    return y + "-" + m + "-" + d;
}
function change_sta() {
    $(this).html("已做");
    $(this).removeClass("btn-danger").addClass("btn-success");
    var date = GetDateStr(0);
    var name = $(this).parent('td').siblings('.name').html();
    var key = $(this).parent('td').siblings('.key').html();
    $.ajax({
        url:"../php/menu_sta.php",
        data:{
            date:date,
            name:name,
            key:key
        },
        type:'POST',
        success: function (msg) {
            console.log(msg);
        }
    });
}
