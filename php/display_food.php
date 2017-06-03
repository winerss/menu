<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");
mysql_select_db("menu");

$json = '';
$data = array();
class User
{
public $id;
public $name;
public $pic;
public $price;
}

$sql="select * from food";
$result=mysql_query($sql,$conn);
if($result){
while($row=mysql_fetch_array($result)){
 $user = new User();
 $user->id = $row["id"];
 $user->name = $row["name"];
 $user->pic=$row["pic"];
 $user->price = $row["price"];
 $data[]=$user;
}

$json = json_encode($data);//把数据转换为JSON数据.
echo "$json";
}else{
echo "查询失败";
}
mysql_close($conn);
?>