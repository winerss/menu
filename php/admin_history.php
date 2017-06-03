<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");

$date=$_POST[date];

mysql_select_db("menu");
$sql="SELECT * FROM menuinfo WHERE date='$date'";
$result=mysql_query($sql,$conn);
while($row=mysql_fetch_array($result)){
echo    "<tr class='info'>" ;
echo     "<td class='key'>" .$row['id']."</td>" ;
echo     "<td class='name'>". $row['name'] ."</td>" ;
echo     "<td class='price'>". $row['price'] . "</td>" ;
echo     "<td class='amount'>" .$row['amount'] . "</td>" ;
echo     "</tr>";
}
mysql_close($conn);
?>
