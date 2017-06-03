/**
 * Created by Administrator on 2017/4/30 0030.
 */
$(document).ready(function () {
    $(".btn2").click(function () {
        //var id = $(this).parents("td").siblings(".id").html();
        $.ajax({
            type: "POST",
            url: "../php/admin_display_menu.php",
            success: function (msg) {
                $(".list2 table").append(msg);
                $(".btn-danger").click(function () {
                    var id = $(this).parents("td").siblings(".id").html();
                    var name = $(this).parents("td").siblings(".name").html();
                    var price = $(this).parents("td").siblings(".price").html();
                    //console.log(id);
                    $.ajax({
                        type:"POST",
                        url:"../php/admin_delete_menu.php",
                        data:{
                            id:id
                        },
                        success: function () {

                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            alert(XMLHttpRequest.status);
                            alert(XMLHttpRequest.readyState);
                            alert(textStatus);
                        }
                    });
                    $(this).parents("tr").remove();

                });
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            }
        });

    });
});