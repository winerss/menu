<?php

$callback=$_GET['callback'];
$name=$_GET["name"];
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");
mysql_select_db("menu");
$sql="select * from admin WHERE  name='{$name}'";
$rs=mysql_query($sql);
$num=mysql_num_rows($rs);
if($num>0){
    echo '1';
}else{
    echo '0';
}
?>

