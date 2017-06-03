/**
 * Created by Administrator on 2017/4/10 0010.
 */
$(document).ready(function () {
    load_food();
    load_soul();
    load_zhushi();
    load_water();
});
function change_cart_color(i) {
    var len = $(".info").length+i;
    if(len>0) {
        $(".glyphicon-shopping-cart").css('color',"red");
    }
}
function load_food() {
    $.ajax({
        type:"GET",
        url:"http://localhost/menu/php/display_food.php",
        async:true,
        success:function (res) {
            var data = JSON.parse(res);
            var num=data.length;
            for(var i=0;i<num;i++) {
                var txt = "" +
                    " <div class='col-md-4 col-xs-12'> "
                    + "<div class='thumbnail'> " +
                    '<p class="hover_ibg"><span class="check glyphicon glyphicon-plus "></span></p>'+
                    "<img class='img-responsive' src='"+ data[i]["pic"]+"' alt=''> " +
                    '<div class="information">'+
                    "单价：<p class='price '>" + data[i]['price'] + "</p>元<br>" +
                    "菜名：<p class='name '>" + data[i]['name'] + "</p>" +
                    '<p class="hover_pbg"></p>'+
                    " </div> " +
                    " </div> " +
                    "</div>";
                $(".food").append(txt);
            }
            throttle(order);
            throttle(_hover);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        }
    });
}
function load_soul() {
    $.ajax({
        type:"GET",
        url:"http://localhost/menu/php/display_soul.php",
        async:true,
        success:function (res) {
            var data = JSON.parse(res);
            var num=data.length;
            for(var i=0;i<num;i++) {
                var txt =
                    ' <div class="col-md-4 col-xs-12">' +
                    ' <div class="thumbnail">' +
                    '<p class="hover_ibg"><span class="check glyphicon glyphicon-plus "></span></p>'+
                    " <img class='img-responsive' src='"+data[i]["pic"]+"' alt=''>" +
                    '<div class="information">'+
                    '单价：<p class="price ">'+data[i]["price"]+'</p>元<br>' +
                    '菜名：<p class="name ">'+data[i]["name"]+'</p>' +
                    '<p class="hover_pbg"></p>'+
                    '</div>'+
                    ' </div>' +
                    ' </div>';
                $(".soul").append(txt);
            }
            throttle(order);
            throttle(_hover);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        }
    });
}
function load_zhushi() {
    $.ajax({
        type:"GET",
        url:"http://localhost/menu/php/display_zhushi.php",
        success:function (res) {
            var data = JSON.parse(res);
            var num=data.length;
            for(var i=0;i<num;i++) {
                var txt =
                    ' <div class="col-md-4 col-xs-12">' +
                    ' <div class="thumbnail">' +
                    '<p class="hover_ibg"><span class="check glyphicon glyphicon-plus "></span></p>'+
                    ' <img class="img-responsive" src="' + data[i]["pic"] + '" alt="">' +
                    '<div class="information">' +
                    '单价：<p class="price ">' + data[i]["price"] + '</p>元<br>' +
                    '菜名：<p class="name ">' + data[i]["name"] + '</p>' +
                    '<p class="hover_pbg"></p>'+
                    '</div>' +
                    ' </div>' +
                    ' </div>';
                $(".zhushi").append(txt);
            }
            throttle(order);
            throttle(_hover);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        }
    });
}
function load_water() {
    $.ajax({
        type:"GET",
        url:"http://localhost/menu/php/display_water.php",
        success:function (res) {
            var data = JSON.parse(res);
            var num=data.length;
            for(var i=0;i<num;i++) {
                var txt =
                    ' <div class="col-md-4 col-xs-12">' +
                    ' <div class="thumbnail">' +
                    '<p class="hover_ibg"><span class="check glyphicon glyphicon-plus "></span></p>'+
                    ' <img class="img-responsive" src="'+data[i]["pic"]+'" alt="">' +
                    '<div class="information">' +
                    '单价：<p class="price ">'+data[i]["price"]+'</p>元<br>' +
                    '菜名：<p class="name ">'+data[i]["name"]+'</p>' +
                    '<p class="hover_pbg"></p>'+
                    " </div> " +
                    ' </div>' +
                    ' </div>';
                $(".water").append(txt);
            }
            throttle(order);
            throttle(_hover);

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        }
    });

}
function order( ) {
    $('.check').on('click', addData);
    function addData() {
        change_cart_color(1);
        var name = $(this).parents(".thumbnail").find(".name").html();
        var price = $(this).parents(".thumbnail").find(".price").html();
        var key1 = $(".key").val();
        var trow = $(".trow");
        var txt = "<tr class='info'>" +
            "<td class='key1'>" + key1 + "</td>" +
            "<td class='name1'>" + name + "</td>" +
            "<td class='price1'>" + price + "</td>" +
            "<td>" + "<button class='minus btn btn-info'>&minus;</button>" + "<input class='amount' type='text' value='1' style='width: 30px;height: 30px;border-radius: 50%;border:none;text-align: center'/>" + "<button class='plus btn btn-info'>&plus;</button>" + "</td>" +
            "<td class='totle'>" + price + "</td>" +
            "<td class='date'>" + date + "</td>" +
            "<td>" + "<button class='remove btn btn-danger'>删除</button>" + '<button class="sub btn btn-info" type="submit">提交</button>' + "</td>" +
            "</tr>";
        trow.after(txt);
        $(".remove").on('click', remove);
        $(".sub").unbind("click").on('click', sub);
        minus();
        plus();
        table();
    }

//日期
    var date;
    var datetime = new Date();
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    date = year + "-" + month + "-" + date;
    $(".date").html(date);


    function sub() {
        $(this).removeClass("btn-info").addClass("btn-success").html("成功");
        var name = $(this).parent().siblings(".name1").html();
        var price = $(this).parent().siblings(".price1").html();
        var date = $(this).parent().siblings(".date").html();
        var amount = $(this).parent().siblings().children(".amount").val();
        var total_price=$(this).parent().siblings(".totle").html();
        var key = $(this).parent().siblings(".key1").html();
        $.ajax({
            url: "../php/menu_info.php",
            data: {
                key: key,
                name: name,
                price: price,
                date: date,
                amount: amount,
                total_price:total_price
            },
            type: 'POST',
            success: function () {
                var modalBody = $(".modal-body");
                $(".my_table").html(key);
                var myTxt = "<tr class='my_info'>" +
                    "<td class='my_name'>" + name + "</td>" +
                    "<td class='my_amount'>"+amount+"份"+"</td>"+
                    "<td class='my_price'>" + price +"元"+ "</td>" +
                    "</tr>";
                modalBody.after(myTxt);
            }
        });
    }

    function remove() {
        $(this).parents(".info").remove();
    }

    function minus() {
        $(".minus").each(function () {
            $(this).unbind("click").click(function () {
                var $multi1 = 0;
                var vall1 = $(this).next().val();
                vall1--;
                if (vall1 <= 0) {
                    vall1 = 1;
                }
                $(this).next().val(vall1);
                $multi1 = parseFloat(vall1) * parseFloat($(this).parent().prev().text());
                $(this).parent().next().text(Math.round($multi1));
                totle();
            })
        })
    }

    function plus() {
        $(".plus").each(function () {
            $(this).unbind("click").click(function () {
                var $multi = 0;
                var vall = $(this).prev().val();
                vall++;
                $(this).prev().val(vall);
                $multi = parseFloat(vall) * parseFloat($(this).parent().prev().text());
                $(this).parent().next().text($multi);
                totle();
            })
        })
    }
/*
    $(".bill").click(function () {
        totle();
    });*/
    function totle() {
        var sum = 0;
        var key = $(".key").val();
        $(".totle").each(function () {
            sum += parseFloat($(this).html());
            $(".money").html(sum);
        });
        $(".key1").html(key);
    }
    function table(){
        $(".key").blur(function () {
            var key = $(".key").val();
            $(".key1").html(key)
        });
    }
    $(".m-sidebar").on('click', showMenu);
    $(".m-food").on('click', showfood);
    $(".m-soul").on('click', showsoul);
    $(".m-zhushi").on('click', showzhushi);
    $(".m-water").on('click', showwater);
    function showMenu() {
        $('.menu').css("display", 'block').siblings().css("display", "none");
        $(this).parent().addClass("cart_active").siblings().removeClass("bar_active");
    }

    function showfood() {
        $('.food').css("display", 'block').siblings().css("display", "none");
        $(this).parent().addClass("bar_active").siblings().removeClass("bar_active");
    }

    function showsoul() {
        $('.soul').css("display", 'block').siblings().css("display", "none");
        $(this).parent().addClass("bar_active").siblings().removeClass("bar_active");
    }

    function showzhushi() {
        $('.zhushi').css("display", 'block').siblings().css("display", "none");
        $(this).parent().addClass("bar_active").siblings().removeClass("bar_active");
    }

    function showwater() {
        $('.water').css("display", 'block').siblings().css("display", "none");
        $(this).parent().addClass("bar_active").siblings().removeClass("bar_active");
    }

    $('.check').on('click', addCart);
    function addCart(event) {
        var offset = $('#end').offset(), flyer = $('<img class="u-flyer" src="../images/food1.jpeg"/>');
        flyer.fly({
            start: {
                left: event.pageX,
                top: event.pageY
            },
            end: {
                left: offset.left,
                top: offset.top,
                width: 20,
                height: 20
            }
        });
    }
}

function _hover() {
    $(".thumbnail").on("mouseenter",over);
    $(".thumbnail").on("mouseleave",out);
}
function over() {
    $(this).find(".hover_pbg").stop(true,true).animate({
        bottom:"0"
    },300);
    $(this).find(".hover_ibg").stop(true,true).animate({
        marginTop:"0"
    },300);
}
function out() {
    $(this).find(".hover_pbg").stop(true,true).animate({
        bottom:"-82px",
        opacity:1
    },300);
    $(this).find(".hover_ibg").stop(true,true).animate({
        marginTop:"-300px",
        opacity:1
    },300);
}

//防止js重复执行
function throttle(fun){
    if(fun.timeoutId) {window.clearTimeout(fun.timeoutId);}
    fun.timeoutId = window.setTimeout(function(){
        fun();
        fun.timeoutId = null;
    }, 1000);
}

