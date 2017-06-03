<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");
mysql_select_db("menu");

$sql="select * from food";
$result=mysql_query($sql,$conn);
 echo "<tr><td colspan=4><h3>菜品</h3></td></tr>";
while($row=mysql_fetch_array($result)){
 echo "<tr>";
 echo "<td class='id'>".$row["id"]."</td>";
 echo "<td class='name'>".$row["name"]."</td>";
 echo "<td class='price'>".$row["price"]."</td>";
 echo "<td><button class='btn btn-danger'>删除</button></td>";
 echo "</tr>";
}

$sql="select * from soul";
$result=mysql_query($sql,$conn);
 echo "<tr><td colspan=4><h3>汤品</h3></td></tr>";
while($row=mysql_fetch_array($result)){
 echo "<tr>";
 echo "<td class='id'>".$row["id"]."</td>";
 echo "<td class='name'>".$row["name"]."</td>";
 echo "<td class='price'>".$row["price"]."</td>";
 echo "<td><button class='btn btn-danger'>删除</button></td>";
 echo "</tr>";
}

$sql="select * from zhushi";
$result=mysql_query($sql,$conn);
 echo "<tr><td colspan=4><h3>主食</h3></td></tr>";
while($row=mysql_fetch_array($result)){
 echo "<tr>";
 echo "<td class='id'>".$row["id"]."</td>";
 echo "<td class='name'>".$row["name"]."</td>";
 echo "<td class='price'>".$row["price"]."</td>";
 echo "<td><button class='btn btn-danger'>删除</button></td>";
 echo "</tr>";
}

$sql="select * from water";
$result=mysql_query($sql,$conn);
 echo "<tr><td colspan=4><h3>饮品</h3></td></tr>";
while($row=mysql_fetch_array($result)){
 echo "<tr>";
 echo "<td class='id'>".$row["id"]."</td>";
 echo "<td class='name'>".$row["name"]."</td>";
 echo "<td class='price'>".$row["price"]."</td>";
 echo "<td><button class='btn btn-danger'>删除</button></td>";
 echo "</tr>";
}
mysql_close($conn);
?>

