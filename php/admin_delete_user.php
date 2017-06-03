<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");
mysql_select_db("menu");
$name=$_POST["name"];
$job=$_POST["job"];
mysql_query($sql,$conn);

if($job=="收银员"){
    $sql="delete from cashier  where name='{$name}'";
    if(mysql_query($sql,$conn)){
        echo "删除成功！";
    }else{
        echo "删除失败！";
    }
}else if($job=="厨师"){
 $sql="delete from cooker  where name='{$name}'";
    if(mysql_query($sql,$conn)){
        echo "删除成功！";
    }else{
        echo "删除失败！";
    }
}else if($job=="管理员"){
  $sql="delete from admin  where name='{$name}'";
     if(mysql_query($sql,$conn)){
         echo "删除成功！";
     }else{
         echo "删除失败！";
     }
 }
mysql_close($conn);
?>
