/**
 * Created by Administrator on 2017/4/18 0018.
 */
$(document).ready(function () {
    $(".btn5").click(function () {
        $.ajax({
            url:"../php/admin_display_user.php",
            type:'GET',
            dateType:'json',
            cache:false,
            timeout:1000,
            success: function (msg) {
                $(".admin_user").html(msg);
                $(".user_btn").click(function () {
                    var name=$(this).parents().siblings(".name").html();
                    var job = $(this).parents().siblings(".job").html();
                    $.ajax({
                        url:"../php/admin_delete_user.php",
                        type:'POST',
                        dateType:'json',
                        data:{name:name,job:job},
                        cache:false,
                        timeout:1000,
                        success: function (msg) {
                            alert(msg);
                            $.ajax({
                                url:"../php/admin_user.php",
                                type:'GET',
                                dateType:'json',
                                cache:false,
                                timeout:1000,
                                success: function (msg) {
                                    $(".admin_user").html(msg);
                                    $(".user_btn").click(function () {
                                        var name=$(this).parents().siblings(".name").html();
                                        var job = $(this).parents().siblings(".job").html();
                                        $.ajax({
                                            url:"../php/delete_user.php",
                                            type:'POST',
                                            dateType:'json',
                                            data:{name:name,job:job},
                                            cache:false,
                                            timeout:1000,
                                            success: function (msg) {
                                                alert(msg);
                                            }
                                        });
                                    });
                                }
                            });
                        }
                    });
                });
            }
        });
    });
});