$(document).ready(function () {
    $("#name").blur(function () {
        var name = $("#name").val();
        $.ajax({
            type:"GET",
            url:"http://localhost/menu/php/cashier_confirm_name.php",
            dataType:"json",
            data:{name:name},
            success:function (res) {
                if(res=='0'){
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
    $("#repassword").blur(function () {
        var rePsd=$("#repassword").val();
        var psd = $("#password").val();
        if(rePsd==psd) {
            $("#showPsd").html("✔").css("color","green");
            $("#showRepsd").html("✔").css("color","green");
            return true;
        }else {
            $("#showPsd").html("✘").css("color","red");
            $("#showRepsd").html("✘").css("color","red");
            return false;
        }
    });
});
