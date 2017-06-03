<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");
$date=$_POST[date];

mysql_select_db("menu");
$sql="SELECT * FROM menuinfo WHERE date='$date'and status='已做'";
        $result=mysql_query($sql,$conn);
        if($result){
        while($row=mysql_fetch_array($result)){
        $user['id'] = $row["id"];
        $user['name'] = $row["name"];
        $user['price'] = $row["price"];
        $user['amount'] = $row["amount"];
        $user['status'] = $row["status"];
        $data[]=$user;
        }
        $json = json_encode($data);//把数据转换为JSON数据.
        echo "$json";
        }else{
        echo "查询失败";
        }
        mysql_close($conn);
?>
