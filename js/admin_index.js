/**
 * Created by Administrator on 2017/4/11 0011.
 */
$(document).ready(function () {
    chart(0);
    next();
    load_data();
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
    function next() {
        var j=0;
        $('.next').click(function () {
            j = j - 5;
            chart(j);
            load_data();
        });
    }
    function chart(i) {
        $(".date li:nth-child(5)").html(GetDateStr(i));
        $(".date li:nth-child(4)").html(GetDateStr(i-1));
        $(".date li:nth-child(3)").html(GetDateStr(i-2));
        $(".date li:nth-child(2)").html(GetDateStr(i-3));
        $(".date li:nth-child(1)").html(GetDateStr(i-4));
    }

    $(".btn3").click(function () {
        var data_y=15;
        var data_x1 = $(".value li:nth-child(1)").html();
        var data2 = $(".value li:nth-child(2)").html();
        var data3 = $(".value li:nth-child(3)").html();
        var data4 = $(".value li:nth-child(4)").html();
        var data5 = $(".value li:nth-child(5)").html();
        console.log(data_x1);
        console.log(data_y);

    });
 /*业绩统计*/
    function load_data() {
        //数据5
        ((function () {
            var val = $('.date li:nth-child(5)').html();
            $.ajax({
                url:"../php/admin_sales.php",
                data:{
                    date:val
                },
                type:'POST',
                success: function (res) {
                    var info = JSON.parse(res);
                    for(var i= 0,sum=0;i<info.length;i++) {
                        sum += parseInt(info[i]['total_price']);
                    }
                    $('.value li:nth-child(5)').animate({
                        height:sum+'px'
                    },300);
                    $('.value li:nth-child(5)').html(sum);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState);
                    console.log(textStatus);
                }
            });
        }))();
        //数据4
        ((function () {
            var val = $('.date li:nth-child(4)').html();
            $.ajax({
                url:"../php/admin_sales.php",
                data:{
                    date:val
                },
                type:'POST',
                success: function (res) {
                    var info = JSON.parse(res);
                    for(var i= 0,sum=0;i<info.length;i++) {
                        sum += parseInt(info[i]['total_price']);
                    }
                    $('.value li:nth-child(4)').animate({
                        height:sum+'px'
                    },300);
                    $('.value li:nth-child(4)').html(sum);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState);
                    console.log(textStatus);
                }
            });
        }))();
        //数据3
        ((function () {
            var val = $('.date li:nth-child(3)').html();
            $.ajax({
                url:"../php/admin_sales.php",
                data:{
                    date:val
                },
                type:'POST',
                success: function (res) {
                    var info = JSON.parse(res);
                    for(var i= 0,sum=0;i<info.length;i++) {
                        sum += parseInt(info[i]['total_price']);
                    }
                    $('.value li:nth-child(3)').animate({
                        height:sum+'px'
                    },300);
                    $('.value li:nth-child(3)').html(sum);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState);
                    console.log(textStatus);
                }
            });
        }))();
        //数据2
        ((function () {
            var val = $('.date li:nth-child(2)').html();
            $.ajax({
                url:"../php/admin_sales.php",
                data:{
                    date:val
                },
                type:'POST',
                success: function (res) {
                    var info = JSON.parse(res);
                    for(var i= 0,sum=0;i<info.length;i++) {
                        sum += parseInt(info[i]['total_price']);
                    }
                    $('.value li:nth-child(2)').animate({
                        height:sum+'px'
                    },300);
                    $('.value li:nth-child(2)').html(sum);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState);
                    console.log(textStatus);
                }
            });
        }))();
        //数据1：
        ((function () {
            var val = $(".date li:nth-child(1)").html();
            $.ajax({
                url:"../php/admin_sales.php",
                data:{
                    date:val
                },
                type:'POST',
                success: function (res) {
                    var info = JSON.parse(res);
                    for(var i= 0,sum=0;i<info.length;i++) {
                        sum += parseInt(info[i]['total_price']);
                    }
                    $('.value li:nth-child(1)').animate({
                        height:sum+'px'
                    },300);
                    $('.value li:nth-child(1)').html(sum);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState);
                    console.log(textStatus);
                }
            });
        }))();
    }

    //选项卡
    $(".btn1").click(function () {
        $(this).addClass("btn-info").parent().siblings().children().removeClass("btn-info");
        $(".list1").css("display", 'block').siblings().css("display", "none");
    });
    $(".btn2").click(function () {
        $(this).addClass("btn-info").parent().siblings().children().removeClass("btn-info");
        $(".list2").css("display", 'block').siblings().css("display", "none");
    });
    $(".btn3").click(function () {
        $(this).addClass("btn-info").parent().siblings().children().removeClass("btn-info");
        $(".list3").css("display", 'block').siblings().css("display", "none");
    });
    $(".btn4").click(function () {
        $(this).addClass("btn-info").parent().siblings().children().removeClass("btn-info");
        $(".list4").css("display", 'block').siblings().css("display", "none");
    });
    $(".btn5").click(function () {
        $(this).addClass("btn-info").parent().siblings().children().removeClass("btn-info");
        $(".list5").css("display", 'block').siblings().css("display", "none");
    });
    $(".btn6").click(function () {
        $(this).addClass("btn-info").parent().siblings().children().removeClass("btn-info");
        $(".list6").css("display", 'block').siblings().css("display", "none");
    });
    /*历史数据*/
    $(".sub4").click(function () {
        var date=$(".search4").val();
        $.ajax({
            url:"../php/admin_history.php",
            data:{
                date:date
            },
            type:'POST',
            success: function (msg) {
                $(".trow4").after(msg);
            }
        });

    });
    /*菜单查询*/
    $(".sub1").click(function () {
        var date = GetDateStr(0);
        var info = $(".search1").val();
        $.ajax({
            url:"../php/admin_menu.php",
            data:{
                info:info,
                date:date
            },
            type:'POST',
            success: function (msg) {
                $(".trow1").after(msg);
            }
        });
    });
});