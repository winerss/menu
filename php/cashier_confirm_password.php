<?php
$callback=$_GET['callback'];
$name=$_GET["name"];
$password=$_GET["password"];
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");
mysql_select_db("menu");
$sql="select * from cashier WHERE  name='{$name}'";
$rs=mysql_query($sql);
$num=mysql_num_rows($rs);
if($num>0){
   $row=mysql_fetch_array($rs);
   if($password===$row['password']){ //对密码进行判断。
        echo '1';
   }else{
        echo '0';
   }
}
?>