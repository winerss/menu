<?php
$id=$_POST["key"];
$name=$_POST["name"];
$price=$_POST["price"];
$date=$_POST["date"];
$amount=$_POST["amount"];
$total_price=$_POST['total_price'];
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");
mysql_select_db("menu");
$sql="
      insert into menuinfo(
                        id,
                        name,
                        price,
                        amount,
                        total_price,
                        date,
                        status
                        )
                 values(
                        '{$id}',
                        '{$name}',
                        '{$price}',
                        '{$amount}',
                        '{$total_price}',
                        '{$date}',
                        '待做'
                       )";
mysql_query($sql);
mysql_close($conn);
?>