/**
 * Created by Administrator on 2017/4/10 0010.
 */
$(document).ready(function () {
    $("#name").blur(function () {
        var name = $("#name").val();
        $.ajax({
            type:"GET",
            url:"http://localhost/menu/php/admin_confirm_name.php",
            dataType:"json",
            data:{name:name},
            success:function (res) {
                if(res=='1'){
                    $("#showResult").html("✔").css("color","green");
                }else {
                    $("#showResult").html("✘").css("color","red");
                }
            },
            error: function () {
                $(this).html("信息加载失败！");
            }
        });
    });
    $("#password").blur(function () {
        var name = $("#name").val();
        var password = $("#password").val();
        $.ajax({
            type:"GET",
            url:"http://localhost/menu/php/admin_confirm_password.php",
            dataType:"json",
            data:{
                name:name,
                password:password
            },
            success:function (res) {
                if(res=='1'){
                    $("#showPsd").html("✔").css("color","green");
                }else {
                    $("#showPsd").html("✘").css("color","red");
                }
            },
            error: function () {
                $(this).html("信息加载失败！");
            }
        });
    });
});
