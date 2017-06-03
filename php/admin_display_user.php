<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");
mysql_select_db("menu");

$sql="SELECT * FROM cashier";
$info=mysql_query($sql,$conn);
echo "<table  class='table table-hover'>";
echo "<tr>";
echo "<th>职务</th>";
echo "<th>姓名</th>";
echo "<th>密码</th>";
echo "<th>操作</th>";
echo "</tr>";
while($row=mysql_fetch_array($info)){
       $name = $row['name'];
       $password = $row['password'];
       echo "<tr>";
       echo "<td class='job'>收银员</td>";
       echo "<td class='name'>$name</td>";
       echo "<td>$password</td>";
       echo "<td><button class='btn btn-danger user_btn'>删除</button></td>";
       echo "</tr>";
}
echo "</table>";

$sql="SELECT * FROM cooker";
$info=mysql_query($sql,$conn);
echo "<table class='table table-hover'>";
echo "<tr>";
echo "<th>职务</th>";
echo "<th>姓名</th>";
echo "<th>密码</th>";
echo "<th>操作</th>";
echo "</tr>";
while($row=mysql_fetch_array($info)){
        $name = $row['name'];
        $password = $row['password'];
       echo "<tr>";
       echo "<td class='job'>厨师</td>";
       echo "<td class='name'>$name</td>";
       echo "<td>$password</td>";
       echo "<td><button class='btn btn-danger user_btn'>删除</button></td>";
       echo "</tr>";
}
echo "</table>";

$sql="SELECT * FROM admin";
$info=mysql_query($sql,$conn);
echo "<table  class='table table-hover'>";
echo "<tr>";
echo "<th>职务</th>";
echo "<th>姓名</th>";
echo "<th>密码</th>";
echo "<th>操作</th>";
echo "</tr>";
while($row=mysql_fetch_array($info)){
       $name = $row['name'];
       $password = $row['password'];
       echo "<tr>";
       echo "<td class='job'>管理员</td>";
       echo "<td class='name'>$name</td>";
       echo "<td>$password</td>";
       echo "<td><button class='btn btn-danger user_btn'>删除</button></td>";
       echo "</tr>";
}
echo "</table>";
mysql_close($conn);
?>
