<?php
$id=$_POST["id"];
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");
mysql_select_db("menu");
$sql="delete from food where id='{$id}'";
$result=mysql_query($sql,$conn);
$num=mysql_num_rows($result);//获取记录数；
if($num){
    echo "删除成功！";
}else{
    echo "删除失败！";
}
$sql="delete from soul where id='{$id}'";
$result=mysql_query($sql,$conn);
$num=mysql_num_rows($result);//获取记录数；
if($num){
    echo "删除成功！";
}else{
    echo "删除失败！";
}
$sql="delete from zhushi where id='{$id}'";
$result=mysql_query($sql,$conn);
$num=mysql_num_rows($result);//获取记录数；
if($num){
    echo "删除成功！";
}else{
    echo "删除失败！";
}
$sql="delete from water where id='{$id}'";
$result=mysql_query($sql,$conn);
$num=mysql_num_rows($result);//获取记录数；
if($num){
    echo "删除成功！";
}else{
    echo "删除失败！";
}
mysql_close($conn);
?>
