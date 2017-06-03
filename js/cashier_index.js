/**
 * Created by Administrator on 2017/4/10 0010.
 */
$(document).ready(function () {
    load();
});
function load(){
    var date = GetDateStr(0);
    $.ajax({
        url:"../php/cashier_index.php",
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
                            "<tr class="+'info'+j+">" +"<td class='key'>" +data[i]['id']+"</td>" +"<td class='name'>"+data[i]['name']
                            +"</td>" +"<td class='price'>"+data[i]['price'] + "</td>" +"<td class='amount'>" +data[i]['amount']
                            + "</td>"+
                            "</tr>";
                        $(".trow"+j).after(txt);
                    }
                }
            }
        }
    });
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
$(".sale").change(function () {
    var val=$(this).val();
    var money = $(".money").html();
    var a = val*money;
    $(".money").html(parseInt(a));
});
$(".num").change(function () {
    var num = $(this).val();
    var len = $(".info"+num).length;
    for(var i= 0,sum=0;i<len;i++){
        var price = $(".info"+num).eq(i).children(".price").html();
        var amount = $(".info"+num).eq(i).children(".amount").html();
        sum =sum+ parseInt(price) * parseInt(amount);
    }
    $(".money").html(sum);
});
$(".jisuan").click(function () {
    var money1=$(".money1").val();
    var money = $(".money").html();
    money2 = money1 - money;
    $(".change").html(money2);
});
