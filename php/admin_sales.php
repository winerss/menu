<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$date = $_POST['date'];
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");
mysql_select_db("menu");

$json = '';
$data = array();
$sql="select * from menuinfo where date='$date' ";
$result=mysql_query($sql,$conn);
if($result){
    while($row=mysql_fetch_array($result)){
        $user['total_price'] = $row["total_price"];
        $data[]=$user;
    }

    $json = json_encode($data);//把数据转换为JSON数据.
    echo "$json";
}else{
    echo "查询失败";
}
mysql_close($conn);
?>